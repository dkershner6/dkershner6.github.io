import { useEffect, useState, useMemo } from 'react';

import { Octokit } from '@octokit/rest';

import IProject, { ProjectCategory } from './IProject';

export enum GitHubTopic {
    REACT = 'react',
    REACT_NATIVE = 'react-native',
    REACT_HOOKS = 'react-hooks',
    NEXT = 'nextjs',
    NODE = 'nodejs',
    NPM_PACKAGE = 'npm-package',
    GITHUB_ACTIONS = 'github-actions',
    CODE_CHALLENGE = 'code-challenge'
}

const APPLICABLE_TOPICS = Object.values(GitHubTopic);

const useGitHubProjects = (): IProject[] => {
    const [repos, setRepos] = useState([]);
    const octokit = new Octokit();

    const loadRepos = async (): Promise<void> => {
        const repos = await octokit.repos.listForUser({
            username: 'dkershner6',
            per_page: 100,
            headers: {
                accept: 'application/vnd.github.mercy-preview+json' // topics
            }
        });
        setRepos(repos.data.filter((repo) => !repo.archived));
    };

    useEffect(() => {
        if (repos.length === 0) loadRepos();
    });

    return useMemo(
        () =>
            repos
                .filter((repo) =>
                    repo.topics.some((topic) =>
                        APPLICABLE_TOPICS.includes(topic)
                    )
                )
                .map((repo) => ({
                    category: ProjectCategory.OPEN_SOURCE,
                    topics: repo.topics,
                    name: repo.name,
                    link: repo.html_url,
                    description: repo.description,
                    language: repo.language
                })),
        [repos]
    );
};

export default useGitHubProjects;
