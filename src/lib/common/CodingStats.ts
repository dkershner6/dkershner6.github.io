export interface GithubContributions {
    startedAt: string;
    endedAt: string;

    totalRepositoriesWithContributedCommits: number;
    /** Private contributions */
    restrictedContributionsCount: number;
    totalCommitContributions: number;
    totalIssueContributions: number;
    totalRepositoryContributions: number;
    totalPullRequestContributions: number;
    totalPullRequestReviewContributions: number;
}

export default interface CodingStats {
    userName: string;
    githubContributions: Record<number, GithubContributions>;
    updatedAt: string;
}
