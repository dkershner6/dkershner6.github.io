export interface ISiteMetadata {
    siteUrl: string;
    title: string;
    description: string;
}

const getSiteMetadata = (): ISiteMetadata => {
    return {
        siteUrl: 'https://dkershner.com',
        title: 'DKershner.com',
        description:
            'Full-stack Software Engineer, DevOps Practitioner, & Cloud Architect'
    };
};

export default getSiteMetadata;
