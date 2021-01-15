import React, { ReactElement } from 'react';

import { Container, Link, Typography } from '@material-ui/core';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
    padding: 3rem;
    background-color: ${(props) => props.theme.palette.background.default};
`;

const Footer = (): ReactElement => {
    return (
        <FooterWrapper>
            <Container>
                <Typography variant="subtitle1">
                    This site was built using:
                    <ul>
                        <li>
                            <Link
                                href="https://www.nextjs.org/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Next.JS
                            </Link>{' '}
                            with{' '}
                            <Link
                                href="https://jamstack.org/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                JAMStack
                            </Link>{' '}
                            principles in place, using incremental static
                            regeneration, with{' '}
                            <Link
                                href="https://www.typescriptlang.org/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                TypeScript
                            </Link>
                            .
                        </li>
                        <li>
                            <Link
                                href="https://react-bootstrap.github.io/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                React Bootstrap
                            </Link>{' '}
                            to skin it.
                        </li>
                        <li>
                            The frontend is hosted on{' '}
                            <Link
                                href="https://github.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Vercel
                            </Link>
                        </li>
                        <li>
                            The AWS CDK is used to declare its infrastructure
                            stack.
                        </li>
                        <li>
                            It uses DynamoDB in a single table design for its
                            database. (Thanks Houlihan/
                            <Link
                                href="https://www.alexdebrie.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Alex DeBrie
                            </Link>
                            )
                        </li>
                        <li>Uses GitHub actions for CI/CD</li>
                        <li>
                            Feel free to have a look at the{' '}
                            <Link
                                href="https://github.com/dkershner6/dkershner.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                open source code
                            </Link>
                            .{' '}
                            <strong>
                                All of the above in contained within this repo
                                as code.
                            </strong>
                        </li>
                        <li>
                            Hero image background from{' '}
                            <Link
                                href="https://svgbackgrounds.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                SVGBackgrounds.com
                            </Link>
                        </li>
                        <li>
                            This site is used for testing and various automated
                            tasks, and changes very frequently, therefore items
                            are often broken.
                        </li>
                        <li>
                            In the past, it has been built with{' '}
                            <Link
                                href="https://www.gatsbyjs.org/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                GatsbyJS
                            </Link>
                            ,{' '}
                            <Link
                                href="https://github.com/facebook/create-react-app"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Create React App
                            </Link>
                            ,{' '}
                            <Link
                                href="https://jekyllrb.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Jekyll
                            </Link>
                            , WordPress, and Raw HTML
                            <Link href="/r">.</Link>
                        </li>
                    </ul>
                </Typography>
            </Container>
        </FooterWrapper>
    );
};

export default Footer;
