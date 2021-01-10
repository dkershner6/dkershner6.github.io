import React, { ReactElement } from 'react';

import CodingStats from '../../lib/common/CodingStats';
import SiteWrapper from '../common/SiteWrapper';

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
    subheading: 'Software Architect - AWS / Azure'
};

const Home = (props: HomeProps): ReactElement => {
    console.log(props);
    const { image, heading, subheading } = HOME_PAGE_DATA;
    return (
        <SiteWrapper>
            <Hero image={image} heading={heading} subheading={subheading} />
            <Projects />
            <Social />
        </SiteWrapper>
    );
};

export default Home;
