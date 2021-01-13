import React, { ReactElement, ReactNode } from 'react';

import Head from 'next/head';

import Footer from './Footer';
import Navigation from './Navigation';

interface LayoutProps {
    title?: string;
    children: ReactNode;
}

const Layout = (props: LayoutProps): ReactElement => {
    const { children, title } = props;
    const urlParams =
        typeof window !== 'undefined'
            ? new URLSearchParams(window.location.search)
            : undefined;
    const format = urlParams === undefined ? '' : urlParams.get('format');

    return (
        <>
            <Head>{title ? <title>{title}</title> : null}</Head>
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
