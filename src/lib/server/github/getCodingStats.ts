import { graphql } from '@octokit/graphql';
import { startOfYear, subMinutes } from 'date-fns';

import makeRange from '../../../utils/makeRange';
import CodingStats, { GithubContributions } from '../../common/CodingStats';
import { GITHUB_USER_NAME } from '../../common/gitHubStats';
import getCodingStatsQuery, {
    GetCodingStatsQueryResponse
} from '../graphql/queries/getCodingStatsQuery';
import CodingStatsModel from '../models/CodingStatsModel';

const ALL_YEARS = makeRange(2017, new Date().getFullYear());

const CACHE_TIME_IN_MINUTES = 15;

const getCodingStats = async (allYears = false): Promise<CodingStats> => {
    if (!allYears) {
        const year = new Date().getFullYear();
        return await upsertCodingStatsForYear(year);
    }
    return await upsertCodingStatsForAllYears();
};

const upsertCodingStatsForAllYears = async () => {
    const thisYear = new Date().getFullYear();
    for (const year of ALL_YEARS) {
        const codingStats = await upsertCodingStatsForYear(year);
        if (year === thisYear) {
            return codingStats;
        }
    }
};

const upsertCodingStatsForYear = async (year: number): Promise<CodingStats> => {
    const results = await graphql<GetCodingStatsQueryResponse>(
        getCodingStatsQuery,
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

/**
 * Unable to use a DynamoDB update due to the complex shape, sadly.
 * Placing the stats in a set had too many tradeoffs and became hard to delete.
 * @param year Year as number
 * @param contributionsCollection @see GithubContributions
 */
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
            githubContributions: [contributionsCollection],
            updatedAt: new Date().toISOString()
        });
    }
    return null;
};

export default getCodingStats;
