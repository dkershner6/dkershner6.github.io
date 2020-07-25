import { GitHubTopic } from './useGitHubProjects';

export enum ProjectCategory {
    SaaS = 'SaaS',
    OPEN_SOURCE = 'Open Source',
    CODE_CHALLENGE = 'Code Challenge',
    COMMUNITY_SERVICE = 'Community Service'
}

export enum ProjectLanguage {
    NET = 'C#',
    TS = 'TypeScript'
}

export default interface IProject {
    category: ProjectCategory;
    topics: GitHubTopic[];
    name: string;
    description: string;
    link?: string;
    language: ProjectLanguage;
}
