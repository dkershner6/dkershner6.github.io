import React, { useEffect, ReactElement } from 'react';

// eslint-disable-next-line import/default
import ReactGA from 'react-ga';

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
    return <Component {...pageProps} />;
};

export default MyApp;
