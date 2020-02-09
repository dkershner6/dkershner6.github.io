import React from 'react';
import { Helmet } from 'react-helmet';

interface IHelmetHead {
    title: string;
}

const HelmetHead = (props: IHelmetHead) => {
    const { title } = props;
    return <Helmet titleTemplate={`${title} | %s`} />;
};

export default HelmetHead;
