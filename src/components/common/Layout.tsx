import React, { useContext, ReactElement } from 'react';
import Head from 'next/head';
import Footer from './Footer';
import Navigation from './Navigation';

import GlobalContext from './GlobalContext';

interface ILayout {
    title?: string;
    children: unknown;
}

const Layout = (props: ILayout): ReactElement => {
    const { children, title } = props;
    const { siteMetadata } = useContext(GlobalContext);
    const { description } = siteMetadata;
    const urlParams =
        typeof window !== 'undefined'
            ? new URLSearchParams(window.location.search)
            : undefined;
    const format = urlParams === undefined ? '' : urlParams.get('format');

    return (
        <>
            <Head>
                <html lang="en" />
                <title data-testid="pageTitle">
                    {(title ?? siteMetadata.title) === siteMetadata.title
                        ? siteMetadata.title
                        : `${title} | ${siteMetadata.title}`}
                </title>
                <meta name="description" content={description} />

                <link
                    rel="apple-touch-icon"
                    sizes="180x180"
                    href={`/img/apple-touch-icon.png`}
                />
                <link
                    rel="icon"
                    type="image/png"
                    href={`/img/favicon-32x32.png`}
                    sizes="32x32"
                />
                <link
                    rel="icon"
                    type="image/png"
                    href={`/img/favicon-16x16.png`}
                    sizes="16x16"
                />

                <link
                    rel="mask-icon"
                    href={`/img/safari-pinned-tab.svg`}
                    color="#ff4400"
                />
                <meta name="theme-color" content="#fff" />

                <meta property="og:type" content="business.business" />
                <meta property="og:title" content={title} />
                <meta property="og:url" content="/" />
                <meta property="og:image" content={`/img/og-image.jpg`} />
            </Head>
            <PageLayout format={format}>{children}</PageLayout>
        </>
    );
};

const PageLayout = (props): ReactElement => {
    const { format, children } = props;
    if (
        format === 'print' ||
        format === 'printCover' ||
        format === 'printCombined'
    ) {
        return <div>{children}</div>;
    } else {
        return (
            <>
                <Navigation />
                <main>{children}</main>
                <Footer />
            </>
        );
    }
};

export default Layout;
