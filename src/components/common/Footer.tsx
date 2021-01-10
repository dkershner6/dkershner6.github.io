import React, { ReactElement } from 'react';

import { Container, Jumbotron } from 'react-bootstrap';

const Footer = (): ReactElement => {
    return (
        <footer>
            <Jumbotron fluid className="mt-5">
                <Container>
                    <div className="text-muted">
                        This site was built using:
                        <ul>
                            <li>
                                <a
                                    href="https://www.nextjs.org/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Next.JS
                                </a>{' '}
                                with{' '}
                                <a
                                    href="https://jamstack.org/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    JAMStack
                                </a>{' '}
                                principles in place, using incremental static
                                regeneration, with{' '}
                                <a
                                    href="https://www.typescriptlang.org/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    TypeScript
                                </a>
                                .
                            </li>
                            <li>
                                <a
                                    href="https://react-bootstrap.github.io/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    React Bootstrap
                                </a>{' '}
                                to skin it.
                            </li>
                            <li>
                                The frontend is hosted on{' '}
                                <a
                                    href="https://github.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Vercel
                                </a>
                            </li>
                            <li>
                                The AWS CDK is used to declare its
                                infrastructure stack.
                            </li>
                            <li>
                                It uses DynamoDB in a single table design for
                                its database. (Thanks Houlihan/
                                <a
                                    href="https://www.alexdebrie.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Alex DeBrie
                                </a>
                                )
                            </li>
                            <li>Uses GitHub actions for CI/CD</li>
                            <li>
                                Feel free to have a look at the{' '}
                                <a
                                    href="https://github.com/dkershner6/dkershner.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    open source code
                                </a>
                                .{' '}
                                <strong>
                                    All of the above in contained within this
                                    repo as code.
                                </strong>
                            </li>
                            <li>
                                This site is used for testing and various
                                automated tasks, and changes very frequently,
                                therefore items are often broken.
                            </li>
                            <li>
                                In the past, it has been built with{' '}
                                <a
                                    href="https://www.gatsbyjs.org/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    GatsbyJS
                                </a>
                                ,{' '}
                                <a
                                    href="https://github.com/facebook/create-react-app"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Create React App
                                </a>
                                ,{' '}
                                <a
                                    href="https://jekyllrb.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Jekyll
                                </a>
                                , WordPress, and Raw HTML<a href="/r">.</a>
                            </li>
                        </ul>
                    </div>
                </Container>
            </Jumbotron>
        </footer>
    );
};

export default Footer;
