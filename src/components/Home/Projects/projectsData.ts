import IProject, { ProjectCategory, ProjectLanguage } from './IProject';
import { GitHubTopic } from './useGitHubProjects';

const saasProjects: Omit<IProject, 'category'>[] = [
    {
        topics: [GitHubTopic.REACT, GitHubTopic.NEXT],
        link: 'https://githubactions.com',
        name: 'GitHubActions.com',
        description:
            'GitHubActions.com provides tools for simplifying GitHubActions, specializing in manually triggering actions.',
        language: ProjectLanguage.TS
    }
];

const communityServiceProjects: Omit<IProject, 'category'>[] = [
    {
        topics: [GitHubTopic.REACT, GitHubTopic.NEXT],
        name: 'Partners In Care',
        description:
            'Partners In Care is a Hospice and Home Health Non-Profit in Bend, OR. I develop tools to aid efficiency for various repetitive data entry tasks.',
        language: ProjectLanguage.TS
    }
];

const openSourceContributorProjects: Omit<IProject, 'category'>[] = [
    {
        topics: [],
        name: 'ShopifySharp',
        description:
            '(Contributor) ShopifySharp is a .NET library that helps developers easily authenticate with and manage Shopify stores.',
        language: ProjectLanguage.NET
    }
];

const projects: IProject[] = [
    ...saasProjects.map((project) => ({
        ...project,
        category: ProjectCategory.SaaS
    })),
    ...communityServiceProjects.map((project) => ({
        ...project,
        category: ProjectCategory.COMMUNITY_SERVICE
    })),
    ...openSourceContributorProjects.map((project) => ({
        ...project,
        category: ProjectCategory.OPEN_SOURCE
    }))
];

export default projects;
