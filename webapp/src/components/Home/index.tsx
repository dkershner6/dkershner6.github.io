import React, { ReactElement } from 'react';

import { RestEndpointMethodTypes } from '@octokit/rest';

import CodingStats from '../../lib/common/CodingStats';
import Layout from '../common/Layout';

import Hero from './Hero';
import Projects from './Projects';
import Social from './Social';

interface HomeProps {
    codingStats: CodingStats;
    repos: RestEndpointMethodTypes['repos']['listForUser']['response']['data'];
}

export const HOME_PAGE_DATA = {
    title: 'Derek Kershner',
    heading: 'Derek Kershner',
    subheading: 'Prolific Software Architect - AWS / Azure'
};

const Home = (props: HomeProps): ReactElement => {
    const { codingStats, repos } = props;
    const { heading, subheading } = HOME_PAGE_DATA;
    return (
        <Layout>
            <Hero
                heading={heading}
                subheading={subheading}
                codingStats={codingStats}
            />
            <Projects repos={repos} />
            <Social />
        </Layout>
    );
};

export default Home;
