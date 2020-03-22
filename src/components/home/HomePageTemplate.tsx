import React from 'react';
import HelmetHead from '../common/Seo';

import About from './About';
import PortfolioMenu from '../portfolio/PortfolioMenu';
import Social from './Social';
import { Hero } from './Hero';

export interface IHomePageTemplate {
    image: string;
    title: string;
    heading: string;
    subheading: string;
}

export const HomePageTemplate = (props: IHomePageTemplate) => (
    <>
        <HelmetHead title={props.title} />
        <Hero {...props} />
        <About />
        <PortfolioMenu />
        <Social />
    </>
);