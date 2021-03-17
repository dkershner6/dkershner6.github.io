import React, { ReactElement } from 'react';

import { AppBar } from '@material-ui/core';
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

const COPYRIGHT = <>&copy;</>;
export const COPYRIGHT_COMPANY_NAME = 'Kershner Endeavors LLC';

const Footer = (): ReactElement => {
    return (
        <footer>
            <AppBar position="static" color="default">
                <FooterContainer>
                    <FooterLeft>
                        {COPYRIGHT} {new Date().getFullYear()}{' '}
                        {COPYRIGHT_COMPANY_NAME}
                    </FooterLeft>
                    <FooterRight>v{packageJson.version}</FooterRight>
                </FooterContainer>
            </AppBar>
        </footer>
    );
};

export default Footer;
