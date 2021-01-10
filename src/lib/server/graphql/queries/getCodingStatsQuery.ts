import { GithubContributions } from '../../../common/CodingStats';

export interface GetCodingStatsQueryResponse {
    viewer: {
        contributionsCollection: GithubContributions;
    };
}

/**
 * GitHub's SDK takes actual strings, not gql tags
 */
const getCodingStatsQuery = `
    query getContributions($start: DateTime!, $end: DateTime!) {
        viewer {
            contributionsCollection(from: $start, to: $end) {
                startedAt
                endedAt
                totalRepositoriesWithContributedCommits
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
`;

export default getCodingStatsQuery;
