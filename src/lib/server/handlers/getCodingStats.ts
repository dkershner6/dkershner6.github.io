import { graphql } from '@octokit/graphql';
import { startOfYear, subMinutes } from 'date-fns';

import CodingStats, { GithubContributions } from '../../common/CodingStats';
import { GITHUB_USER_NAME } from '../../common/gitHubStats';
import CodingStatsModel from '../models/CodingStatsModel';

// const ALL_YEARS = makeRange(2017, new Date().getFullYear());

const CACHE_TIME_IN_MINUTES = 15;

const getCodingStats = async (): Promise<CodingStats> => {
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
            start: startOfYear(new Date().setFullYear(year)).toISOString(),
            end: startOfYear(new Date().setFullYear(year + 1)).toISOString()
        }
    );

    return await upsertCodingStats(
        year,
        results.viewer.contributionsCollection
    );
};

const upsertCodingStats = async (
    year: number,
    contributionsCollection: GithubContributions
): Promise<CodingStats> => {
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
    return null;
};

export default getCodingStats;
