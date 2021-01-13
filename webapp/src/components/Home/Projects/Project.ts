import GitHubTopic from './GitHubTopic';

export enum ProjectCategory {
    ALL = 'All',
    MOBILE_APP = 'Mobile App',
    TOOL = 'Tool',
    OPEN_SOURCE = 'Open Source',
    CODE_CHALLENGE = 'Code Challenge',
    COMMUNITY_SERVICE = 'Community Service'
}

export enum ProjectLanguage {
    NET = 'C#',
    TS = 'TypeScript'
}

export type MobileLink = { ios?: string; android?: string };

export default interface Project {
    category: ProjectCategory;
    topics: GitHubTopic[];
    name: string;
    description: string;
    link?: string | MobileLink;
    language: ProjectLanguage;
}
