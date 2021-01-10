import { graphql } from '@octokit/graphql';
import { startOfYear, subMinutes } from 'date-fns';
import { NextApiRequest, NextApiResponse } from 'next';
import nc from 'next-connect';

import { GithubContributions } from '../../lib/common/CodingStats';
import { GITHUB_USER_NAME } from '../../lib/common/gitHubStats';
import CodingStatsModel from '../../lib/server/models/CodingStatsModel';
import makeRange from '../../utils/makeRange';

const handler = nc();

// const ALL_YEARS = makeRange(2017, new Date().getFullYear());

const CACHE_TIME_IN_MINUTES = 15;

handler.get(
    async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
        try {
            const year = new Date().getFullYear();
            const results = await graphql<{
                viewer: {
                    contributionsCollection: GithubContributions;
                };
            }>(
                `
                    query getContributions($start: DateTime!, $end: DateTime!) {
                        viewer {
                            contributionsCollection(from: $start, to: $end) {
                                startedAt
                                endedAt
                                restrictedContributionsCount
                                totalCommitContributions
                                totalIssueContributions
                                totalRepositoryContributions
                                totalPullRequestContributions
                                totalPullRequestReviewContributions
                            }
                        }
                        rateLimit {
                            cost
                            used
                            remaining
                        }
                    }
                `,
                {
                    headers: {
                        authorization: `token ${process.env.GITHUB_PERSONAL_TOKEN}`
                    },
                    start: startOfYear(
                        new Date().setFullYear(year)
                    ).toISOString(),
                    end: startOfYear(
                        new Date().setFullYear(year + 1)
                    ).toISOString()
                }
            );

            const codingStats = await upsertCodingStats(
                year,
                results.viewer.contributionsCollection
            );

            return res.status(200).json({ codingStats });
        } catch (error) {
            // eslint-disable-next-line no-console
            console.error(error);
            return res.status(500).json({ errorMessage: error.message });
        }
    }
);

const upsertCodingStats = async (
    year: number,
    contributionsCollection: GithubContributions
) => {
    if (contributionsCollection) {
        const codingStats = await CodingStatsModel.get(GITHUB_USER_NAME);
        if (codingStats) {
            const cacheTime = subMinutes(new Date(), CACHE_TIME_IN_MINUTES);
            if (new Date(codingStats.updatedAt) > cacheTime) {
                return codingStats;
            }

            codingStats.githubContributions[year] = contributionsCollection;
            return await CodingStatsModel.put(codingStats);
        }
        return await CodingStatsModel.put({
            userName: GITHUB_USER_NAME,
            githubContributions: {
                [year]: contributionsCollection
            },
            updatedAt: new Date().toISOString()
        });
    }
    return {};
};

export default handler;
