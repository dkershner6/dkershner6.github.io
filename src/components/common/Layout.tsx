import React, { useContext } from 'react';
import { Helmet } from 'react-helmet';
import Footer from './Footer';
import Navigation from './Navigation';

import { ISiteMetadata } from './SiteMetadata';
import GlobalContext from './GlobalContext';

interface ILayout {
    siteMetadata?: ISiteMetadata;
    children: unknown;
}

const Layout = (props: ILayout) => {
    const { children } = props;
    const { siteMetadata } = useContext(GlobalContext);
    const { title, description } = siteMetadata;
    const urlParams = typeof window !== 'undefined' ? new URLSearchParams(window.location.search) : undefined;
    const format = urlParams === undefined ? '' : urlParams.get('format');

    return (
        <div>
            <Helmet>
                <html lang="en" />
                <title data-testid="pageTitle">{title}</title>
                <meta name="description" content={description} />

                <link rel="apple-touch-icon" sizes="180x180" href={`/img/apple-touch-icon.png`} />
                <link rel="icon" type="image/png" href={`/img/favicon-32x32.png`} sizes="32x32" />
                <link rel="icon" type="image/png" href={`/img/favicon-16x16.png`} sizes="16x16" />

                <link rel="mask-icon" href={`/img/safari-pinned-tab.svg`} color="#ff4400" />
                <meta name="theme-color" content="#fff" />

                <meta property="og:type" content="business.business" />
                <meta property="og:title" content={title} />
                <meta property="og:url" content="/" />
                <meta property="og:image" content={`/img/og-image.jpg`} />
            </Helmet>
            <PageLayout format={format}>{children}</PageLayout>
        </div>
    );
};

const PageLayout = (props) => {
    const { format, children } = props;
    if (format === 'print' || format === 'printCover' || format === 'printCombined') {
        return <div>{children}</div>;
    } else {
        return (
            <>
                <Navigation />
                <div>{children}</div>
                <Footer />
            </>
        );
    }
};

export default Layout;
