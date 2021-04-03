import { RestEndpointMethodTypes } from '@octokit/rest';

import GitHubTopic from './GitHubTopic';
import Project, { ProjectCategory, ProjectLanguage } from './Project';

const APPLICABLE_TOPICS = Object.values(GitHubTopic);

const formatReposAsProjects = (
    repos: RestEndpointMethodTypes['repos']['listForUser']['response']['data']
): Project[] => {
    return repos
        ?.filter((repo) =>
            repo.topics.some((topic) =>
                APPLICABLE_TOPICS.includes(topic as GitHubTopic)
            )
        )
        ?.map((repo) => ({
            category: ProjectCategory.OPEN_SOURCE,
            topics: repo.topics as GitHubTopic[],
            name: repo.name,
            link: repo.html_url,
            description: repo.description,
            language: repo.language as ProjectLanguage
        }));
};

export default formatReposAsProjects;
