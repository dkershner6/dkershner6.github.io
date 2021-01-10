import React, { ReactElement } from 'react';

import Document, {
    Html,
    Head,
    Main,
    NextScript,
    DocumentInitialProps,
    DocumentContext
} from 'next/document';

const siteMetadata = {
    siteUrl: 'https://dkershner.com',
    title: 'DKershner.com',
    description:
        'Full-stack Software Engineer, DevOps Practitioner, & Cloud Architect'
};

class MyDocument extends Document {
    static async getInitialProps(
        ctx: DocumentContext
    ): Promise<DocumentInitialProps> {
        const initialProps = await Document.getInitialProps(ctx);
        return { ...initialProps };
    }

    render(): ReactElement {
        return (
            <Html>
                <Head>
                    <html lang="en" />
                    <title data-testid="pageTitle">{siteMetadata.title}</title>
                    <meta
                        name="description"
                        content={siteMetadata.description}
                    />

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
                    <meta property="og:title" content={siteMetadata.title} />
                    <meta property="og:url" content="/" />
                    <meta property="og:image" content={`/img/og-image.jpg`} />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
