import React, { ReactElement } from 'react';

import CodingStats from '../../lib/common/CodingStats';
import Layout from '../common/Layout';

import Hero from './Hero';
import Projects from './Projects';
import Social from './Social';

interface HomeProps {
    codingStats: CodingStats;
}

export const HOME_PAGE_DATA = {
    title: 'Derek Kershner',
    image: '/img/hero-background.webp',
    heading: 'Derek Kershner',
    subheading: 'Prolific Software Architect - AWS / Azure'
};

const Home = (props: HomeProps): ReactElement => {
    const { codingStats } = props;
    const { image, heading, subheading } = HOME_PAGE_DATA;
    return (
        <Layout>
            <Hero
                image={image}
                heading={heading}
                subheading={subheading}
                codingStats={codingStats}
            />
            <Projects />
            <Social />
        </Layout>
    );
};

export default Home;
