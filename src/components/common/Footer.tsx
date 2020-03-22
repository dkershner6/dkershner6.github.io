import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import { Jumbotron } from 'react-bootstrap';
import GlobalContext from './GlobalContext';

const Footer = () => {
    const { siteMetadata } = useContext(GlobalContext);
    return (
        <footer>
            <Jumbotron fluid className="mt-5">
                <Container>
                    <p className="text-muted" data-testid="pageTitleTest">
                        Page Title: {siteMetadata.title}
                    </p>
                    <p className="text-muted">
                        This site was built using{' '}
                        <a href="https://www.nextjs.org/" target="_blank" rel="noopener noreferrer">
                            Next.JS
                        </a>{' '}
                        with{' '}
                        <a href="https://jamstack.org/" target="_blank" rel="noopener noreferrer">
                            JAMStack
                        </a>{' '}
                        principles in place, with{' '}
                        <a href="https://www.typescriptlang.org/" target="_blank" rel="noopener noreferrer">
                            TypeScript
                        </a>{' '}
                        to make it scalable (for no reason),{' '}
                        <a href="https://www.netlifycms.org/" target="_blank" rel="noopener noreferrer">
                            Netlify CMS
                        </a>{' '}
                        for content management,{' '}
                        <a href="https://github.com/nfl/react-helmet" target="_blank" rel="noopener noreferrer">
                            React Helmet
                        </a>{' '}
                        for SEO, and{' '}
                        <a href="https://react-bootstrap.github.io/" target="_blank" rel="noopener noreferrer">
                            React Bootstrap
                        </a>{' '}
                        to skin it. It's hosted on{' '}
                        <a href="https://www.netlify.com/" target="_blank" rel="noopener noreferrer">
                            Netlify
                        </a>
                        , feel free to have a look at the{' '}
                        <a href="https://github.com/dkershner6/dkershner.com/" target="_blank" rel="noopener noreferrer">
                            open source code
                        </a>
                        . This site is used for testing and changes very frequently, and items are often broken. In the past, it has been built with{' '}
                        <a href="https://www.gatsbyjs.org/" target="_blank" rel="noopener noreferrer">
                            GatsbyJS
                        </a>
                        ,
                        <a href="https://github.com/facebook/create-react-app" target="_blank" rel="noopener noreferrer">
                            Create React App
                        </a>
                        ,{' '}
                        <a href="https://jekyllrb.com/" target="_blank" rel="noopener noreferrer">
                            Jekyll
                        </a>
                        , WordPress, PHP, and Raw HTML<a href="/r">.</a>
                    </p>
                </Container>
            </Jumbotron>
        </footer>
    );
};

export default Footer;
