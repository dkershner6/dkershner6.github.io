import React, { ReactElement } from 'react';

import { AppBar, Link } from '@material-ui/core';
import styled from 'styled-components';

import packageJson from '../../../package.json';

const FooterContainer = styled.div`
    display: flex;
`;

const FooterLeft = styled.div`
    flex: 1;
    padding: 1rem;
`;

const FooterRight = styled.div`
    padding: 1rem;
`;

const Footer = (): ReactElement => {
    return (
        <footer>
            <AppBar position="static" color="default">
                <FooterContainer>
                    <FooterLeft>
                        &copy; Kershner Endeavors LLC | Hero image background
                        from{' '}
                        <Link
                            href="https://svgbackgrounds.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            SVGBackgrounds.com
                        </Link>
                    </FooterLeft>
                    <FooterRight>v{packageJson.version}</FooterRight>
                </FooterContainer>
            </AppBar>
        </footer>
    );
};

export default Footer;
