import React, { ReactElement } from 'react';

import { Container, Grid, Paper } from '@material-ui/core';
import { RestEndpointMethodTypes } from '@octokit/rest';

import CodingStats from '../../lib/common/CodingStats';
import Layout from '../common/Layout';

import InfoGrid from './InfoGrid';
import Projects from './Projects';

interface HomeProps {
    codingStats: CodingStats;
    repos: RestEndpointMethodTypes['repos']['listForUser']['response']['data'];
    serverDate: Date;
}

export const HOME_PAGE_DATA = {
    title: 'Derek Kershner',
    heading: 'Derek Kershner',
    subheading: 'Prolific Software Architect - AWS / Azure'
};

const Home = (props: HomeProps): ReactElement => {
    const { codingStats, repos, serverDate } = props;

    return (
        <Layout>
            <InfoGrid codingStats={codingStats} serverDate={serverDate} />
            <Projects repos={repos} />
        </Layout>
    );
};

export default Home;
