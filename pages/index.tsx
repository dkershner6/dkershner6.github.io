import React from 'react';
import HomePage from '../src/components/home/HomePage';

const homePageData = {
    title: 'Derek Kershner',
    image: '/img/hero-background.jpg',
    heading: 'Derek Kershner',
    subheading: 'Full-stack Software Engineer, DevOps Practitioner, & Cloud Architect',
};

const IndexPage = () => {
    return <HomePage data={homePageData} />;
};

export default IndexPage;
