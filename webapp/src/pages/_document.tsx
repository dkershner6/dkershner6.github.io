import React, { ReactElement } from 'react';

import { ServerStyleSheets } from '@material-ui/core/styles';
import Document, {
    Html,
    Head,
    Main,
    NextScript,
    DocumentInitialProps,
    DocumentContext
} from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export const siteMetadata = {
    siteUrl: 'https://dkershner.com',
    title: 'DKershner.com',
    description: 'Prolific Software Architect - AWS / Azure'
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
            <Html lang="en">
                <Head>
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
                    <link
                        rel="stylesheet"
                        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
                    />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

// `getInitialProps` belongs to `_document` (instead of `_app`),
// it's compatible with server-side generation (SSG).
MyDocument.getInitialProps = async (ctx) => {
    // Resolution order
    //
    // On the server:
    // 1. app.getInitialProps
    // 2. page.getInitialProps
    // 3. document.getInitialProps
    // 4. app.render
    // 5. page.render
    // 6. document.render
    //
    // On the server with error:
    // 1. document.getInitialProps
    // 2. app.render
    // 3. page.render
    // 4. document.render
    //
    // On the client
    // 1. app.getInitialProps
    // 2. page.getInitialProps
    // 3. app.render
    // 4. page.render

    // Render app and page and get the context of the page with collected side effects.
    const sheets = new ServerStyleSheets();
    const styleSheets = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
        ctx.renderPage = () =>
            originalRenderPage({
                enhanceApp: (App) => (props) =>
                    styleSheets.collectStyles(
                        sheets.collect(<App {...props} />)
                    )
            });

        const initialProps = await Document.getInitialProps(ctx);

        return {
            ...initialProps,
            // Styles fragment is rendered after the app and page rendering finish.
            styles: [
                ...React.Children.toArray(initialProps.styles),
                styleSheets.getStyleElement(),
                sheets.getStyleElement()
            ]
        };
    } finally {
        styleSheets.seal();
    }
};

export default MyDocument;
