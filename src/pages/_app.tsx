import React, { useEffect, ReactElement } from 'react';

import Head from 'next/head';
import ReactGA from 'react-ga';

import { siteMetadata } from './_document';

import '../styles/css/bootstrap.css';

interface AppProps {
    Component: () => ReactElement;
    pageProps: unknown;
}

const MyApp = ({ Component, pageProps }: AppProps): ReactElement => {
    useEffect(() => {
        ReactGA.initialize('UA-10014066-1');
        ReactGA.pageview(window.location.pathname + window.location.search);
    }, []);

    return (
        <>
            <Head>
                <title data-testid="pageTitle">{siteMetadata.title}</title>
            </Head>
            <Component {...pageProps} />
        </>
    );
};

export default MyApp;
