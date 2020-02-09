import React from 'react';
import { HomePageTemplate } from '../../components/home/HomePageTemplate';

interface IIndexPagePreview {
    entry: {
        getIn: (any) => any;
    };
    getAsset: (any) => any;
}

const IndexPagePreview = ({ entry }: IIndexPagePreview) => {
    const data = entry.getIn(['data']).toJS();

    if (data) {
        return <HomePageTemplate image={data.image} title={data.title} heading={data.heading} subheading={data.subheading} />;
    } else {
        return <div>Loading...</div>;
    }
};

export default IndexPagePreview;
