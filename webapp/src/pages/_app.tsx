import React, { useEffect, ReactElement } from 'react';

import CssBaseline from '@material-ui/core/CssBaseline';
import Head from 'next/head';
import ReactGA from 'react-ga';
import { UIContextProvider } from '../context/UIContext';
import ThemeProviders from '../components/ThemeProviders';

import { siteMetadata } from './_document';

interface AppProps {
    Component: () => ReactElement;
    pageProps: unknown;
}

const MyApp = ({ Component, pageProps }: AppProps): ReactElement => {
    useEffect(() => {
        ReactGA.initialize('UA-10014066-1');
        ReactGA.pageview(window.location.pathname + window.location.search);
    }, []);

    useEffect(() => {
        // Remove the server-side injected CSS.
        const jssStyles = document.querySelector('#jss-server-side');
        if (jssStyles) {
            jssStyles.parentElement.removeChild(jssStyles);
        }
    }, []);

    return (
        <>
            <Head>
                <title data-testid="pageTitle">{siteMetadata.title}</title>
            </Head>
            <UIContextProvider>
                <ThemeProviders>
                    <CssBaseline />
                    <Component {...pageProps} />
                </ThemeProviders>
            </UIContextProvider>
        </>
    );
};

export default MyApp;
