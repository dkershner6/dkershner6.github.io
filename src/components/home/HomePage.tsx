import React from 'react';
import Layout from '../common/Layout';
import { IHomePageTemplate, HomePageTemplate } from './HomePageTemplate';

interface IHomePage {
    data: IHomePageTemplate;
}

const HomePage = ({ data }: IHomePage) => {
    return (
        <Layout>
            <HomePageTemplate image={data.image} title={data.title} heading={data.heading} subheading={data.subheading} />
        </Layout>
    );
};

export default HomePage;
