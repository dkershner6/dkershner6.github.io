import React, { ReactElement } from 'react';
import HomePage from '../components/home/HomePage';

const homePageData = {
    title: 'Derek Kershner',
    image: '/img/hero-background.jpg',
    heading: 'Derek Kershner',
    subheading: 'Senior Cloud Architect - AWS / Azure / Firebase'
};

const IndexPage = (): ReactElement => {
    return <HomePage data={homePageData} />;
};

export default IndexPage;
