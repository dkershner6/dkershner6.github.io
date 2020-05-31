export const backendTechnologies = [
    {
        id: 'aspNetCore',
        label: 'ASP.NET Core / C#',
        type: 'backend',
        language: 'C#',
        familiarity: 5,
        link: 'https://dotnet.microsoft.com/apps/aspnet'
    },
    {
        id: 'efcore',
        label: 'Entity Framework Core / C#',
        type: 'backend',
        language: 'C#',
        familiarity: 5
    },
    {
        id: 'azureFunctions',
        label: 'Azure Functions / C#',
        type: 'backend',
        language: 'C#',
        familiarity: 5,
        link: 'https://azure.microsoft.com/en-us/services/functions/'
    },
    {
        id: 'azureLogicApps',
        label: 'Azure Logic Apps',
        type: 'backend',
        familiarity: 5,
        link: 'https://azure.microsoft.com/en-us/services/logic-apps/'
    },
    {
        id: 'node',
        label: 'Node / TypeScript',
        type: 'backend',
        language: 'Typescript',
        familiarity: 5
    },
    {
        id: 'flask',
        label: 'Flask / Python',
        type: 'backend',
        language: 'Python',
        familiarity: 3
    }
];

export const frontendTechnologies = [
    {
        id: 'react',
        label: 'React / Typescript',
        type: 'frontend',
        language: 'Typescript',
        familiarity: 5,
        link: 'https://reactjs.org/'
    },
    {
        id: 'liquid',
        label: 'Liquid (Shopify)',
        type: 'frontend',
        language: 'Liquid',
        familiarity: 4,
        link: 'https://help.shopify.com/en/themes/liquid'
    }
];

export const deploymentTechnologies = [
    {
        id: 'kubernetes',
        label: 'Kubernetes / Docker',
        type: 'deployment',
        familiarity: 4,
        link: 'https://kubernetes.io'
    },
    {
        id: 'azureDevops',
        label: 'Azure DevOps',
        type: 'deployment',
        familiarity: 4,
        link: 'https://dev.azure.com'
    }
];

export const dataTechnologies = [
    {
        id: 'dynamoDb',
        label: 'AWS DynamoDB',
        type: 'data',
        language: 'NoSQL',
        familiarity: 5,
        link: 'https://aws.amazon.com/dynamodb/'
    },
    {
        id: 'azureSql',
        label: 'Azure SQL',
        type: 'data',
        language: 'SQL',
        familiarity: 5,
        link: 'https://azure.microsoft.com/en-us/services/sql-database/'
    },
    {
        id: 'azureStorage',
        label: 'Azure Storage Blobs / Tables',
        type: 'data',
        language: 'NoSQL',
        familiarity: 5,
        link: 'https://azure.microsoft.com/en-us/services/storage/'
    },
    {
        id: 'azureStorageQueues',
        label: 'Azure Storage Queues',
        type: 'data',
        language: 'NoSQL',
        familiarity: 5,
        link: 'https://azure.microsoft.com/en-us/services/storage/'
    },
    {
        id: 'redis',
        label: 'Redis',
        type: 'data',
        language: 'NoSQL',
        familiarity: 4,
        link: 'https://redis.io/'
    },
    {
        id: 'azureSearch',
        label: 'Azure Search',
        type: 'data',
        language: 'NoSQL',
        familiarity: 4,
        link: 'https://azure.microsoft.com/en-us/services/search/'
    },
    {
        id: 'mongoDb',
        label: 'Mongo DB',
        type: 'data',
        language: 'NoSQL',
        familiarity: 4,
        link: 'https://www.mongodb.com/'
    },
    {
        id: 'kinesis',
        label: 'AWS Kinesis',
        type: 'data',
        language: 'Stream',
        familiarity: 4,
        link: 'https://aws.amazon.com/kinesis/'
    }
];

export const clouds = [
    {
        id: 'azure',
        label: 'Azure',
        type: 'cloud',
        familiarity: 5,
        link: 'https://azure.microsoft.com'
    },
    {
        id: 'googlefirebase',
        label: 'Google Firebase',
        type: 'cloud',
        familiarity: 4,
        link: 'https://firebase.google.com'
    },
    {
        id: 'googlecloud',
        label: 'Google Cloud',
        type: 'cloud',
        familiarity: 3,
        link: 'https://cloud.google.com'
    },
    {
        id: 'aws',
        label: 'AWS',
        type: 'cloud',
        familiarity: 5,
        link: 'https://aws.amazon.com/'
    }
];

function sortFamiliarityDescending(a, b) {
    if (a.familiarity < b.familiarity) {
        return 1;
    } else if (a.familiarity > b.familiarity) {
        return -1;
    }
    return 0;
}

export const technologies = [
    ...backendTechnologies,
    ...frontendTechnologies,
    ...deploymentTechnologies,
    ...dataTechnologies,
    ...clouds
].sort(sortFamiliarityDescending);

export default technologies;
