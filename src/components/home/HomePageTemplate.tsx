import React from 'react';

import About from './About';
import PortfolioMenu from '../portfolio/PortfolioMenu';
import Social from './Social';
import { Hero } from './Hero';

export interface IHomePageTemplate {
    image: string;
    heading: string;
    subheading: string;
}

export const HomePageTemplate = (props: IHomePageTemplate) => (
    <>
        <Hero {...props} />
        <About />
        <PortfolioMenu />
        <Social />
    </>
);
