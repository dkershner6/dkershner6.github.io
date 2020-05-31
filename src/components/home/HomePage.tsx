import React, { ReactElement } from 'react';
import SiteWrapper from '../common/SiteWrapper';
import { IHomePageTemplate, HomePageTemplate } from './HomePageTemplate';

interface IHomePage {
    data: IHomePageTemplate;
}

const HomePage = ({ data }: IHomePage): ReactElement => {
    return (
        <SiteWrapper>
            <HomePageTemplate
                image={data.image}
                heading={data.heading}
                subheading={data.subheading}
            />
        </SiteWrapper>
    );
};

export default HomePage;
