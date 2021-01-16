import React, { ReactElement } from 'react';
import packageJson from '../../../package.json';

import { AppBar } from '@material-ui/core';
import styled from 'styled-components';

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
                    <FooterLeft>&copy; Kershner Endeavors LLC</FooterLeft>
                    <FooterRight>v{packageJson.version}</FooterRight>
                </FooterContainer>
            </AppBar>
        </footer>
    );
};

export default Footer;
