import React from 'react';
import { Helmet } from 'react-helmet';
import Footer from './Footer';
import Navigation from './Navigation';
import '../../css/bootstrap.css';
import useSiteMetadata from './SiteMetadata';
import { withPrefix } from 'gatsby';

interface ILayout {
    siteMetadata?: any;
    children: any;
}

const Layout = (props: ILayout) => {
    const { siteMetadata, children } = props;
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { title, description } = siteMetadata || useSiteMetadata();
    const urlParams = typeof window !== 'undefined' ? new URLSearchParams(window.location.search) : undefined;
    const format = urlParams === undefined ? '' : urlParams.get('format');
    return (
        <div>
            <Helmet>
                <html lang="en" />
                <title>{title}</title>
                <meta name="description" content={description} />

                <link rel="apple-touch-icon" sizes="180x180" href={`${withPrefix('/')}img/apple-touch-icon.png`} />
                <link rel="icon" type="image/png" href={`${withPrefix('/')}img/favicon-32x32.png`} sizes="32x32" />
                <link rel="icon" type="image/png" href={`${withPrefix('/')}img/favicon-16x16.png`} sizes="16x16" />

                <link rel="mask-icon" href={`${withPrefix('/')}img/safari-pinned-tab.svg`} color="#ff4400" />
                <meta name="theme-color" content="#fff" />

                <meta property="og:type" content="business.business" />
                <meta property="og:title" content={title} />
                <meta property="og:url" content="/" />
                <meta property="og:image" content={`${withPrefix('/')}img/og-image.jpg`} />
            </Helmet>
            <PageLayout format={format}>{children}</PageLayout>
        </div>
    );
};

const PageLayout = props => {
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
