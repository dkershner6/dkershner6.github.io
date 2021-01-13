import React, { ReactElement } from 'react';

import { Octokit, RestEndpointMethodTypes } from '@octokit/rest';
import { GetStaticProps } from 'next';

import Home from '../components/Home';
import CodingStats from '../lib/common/CodingStats';
import getCodingStats from '../lib/server/github/getCodingStats';

interface HomePageProps {
    codingStats: CodingStats;
    repos: RestEndpointMethodTypes['repos']['listForUser']['response']['data'];
}

const HomePage = (props: HomePageProps): ReactElement => {
    return <Home {...props} />;
};

export const getStaticProps: GetStaticProps<HomePageProps> = async () => {
    const octokit = new Octokit();
    const [codingStats, { data }] = await Promise.all([
        getCodingStats(),
        octokit.repos.listForUser({
            username: 'dkershner6',
            per_page: 100,
            headers: {
                accept: 'application/vnd.github.mercy-preview+json' // topics
            }
        })
    ]);

    return {
        props: { codingStats, repos: data },
        revalidate: 60 * 30 // In seconds
    };
};

export default HomePage;
