import React, { ReactElement } from 'react';

import { GetStaticProps } from 'next';

import Home from '../components/Home';
import CodingStats from '../lib/common/CodingStats';
import getCodingStats from '../lib/server/handlers/getCodingStats';

interface HomePageProps {
    codingStats: CodingStats;
}

const HomePage = (props: HomePageProps): ReactElement => {
    return <Home {...props} />;
};

export const getStaticProps: GetStaticProps<HomePageProps> = async () => {
    const codingStats = await getCodingStats();
    return { props: { codingStats } };
};

export default HomePage;
