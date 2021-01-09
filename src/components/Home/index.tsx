import React, { ReactElement } from 'react';

import SiteWrapper from '../common/SiteWrapper';

import Hero from './Hero';
import Projects from './Projects';
import Social from './Social';

export const HOME_PAGE_DATA = {
    title: 'Derek Kershner',
    image: '/img/hero-background.webp',
    heading: 'Derek Kershner',
    subheading: 'Senior Software Architect - AWS / Azure'
};

const Home = (): ReactElement => {
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
