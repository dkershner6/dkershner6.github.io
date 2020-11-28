import IProject, { ProjectCategory, ProjectLanguage } from './IProject';
import { GitHubTopic } from './useGitHubProjects';

const mobileApps: Omit<IProject, 'category'>[] = [
    {
        topics: [GitHubTopic.REACT_NATIVE],
        name: 'Picky Club',
        link: {
            ios:
                'https://apps.apple.com/us/app/picky-club/id1525613638?itsct=apps_box&itscg=30200',
            android:
                'https://play.google.com/store/apps/details?id=com.dkershner.pickymobile&hl=en_US&gl=US'
        },
        language: ProjectLanguage.TS,
        description: 'App to control subscription boxes for Picky Bars'
    },
    {
        topics: [GitHubTopic.REACT_NATIVE],
        name: 'Partners In Care Hospice House',
        link: {
            android:
                'https://play.google.com/store/apps/details?id=com.dkershner.partnersmobile'
        },
        language: ProjectLanguage.TS,
        description:
            'App for nurses at Partners In Care (rejected from Apple for too specific use case)'
    }
];

const tools: Omit<IProject, 'category'>[] = [
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
    ...mobileApps.map((project) => ({
        ...project,
        category: ProjectCategory.MOBILE_APP
    })),
    ...tools.map((project) => ({
        ...project,
        category: ProjectCategory.TOOL
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
