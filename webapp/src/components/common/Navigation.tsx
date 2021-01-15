import React, { ReactElement, useContext } from 'react';

import { AppBar, Icon, IconButton, Toolbar } from '@material-ui/core';
import SunMoonIcon from '@material-ui/icons/Brightness4';
import styled from 'styled-components';
import UIContext from '../../context/UIContext';

const HeaderLeft = styled.div`
    flex: 1;
`;

const HeaderRight = styled.div`
    color: #fff;
`;

const WhiteSunMoonIcon = styled(SunMoonIcon)`
    color: #fff;
`;

const Navigation = (): ReactElement => {
    const { themeType, setThemeType } = useContext(UIContext);

    return (
        <AppBar
            position="static"
            color={themeType === 'light' ? 'primary' : 'transparent'}
        >
            <Toolbar>
                <HeaderLeft />
                <HeaderRight>
                    <IconButton
                        onClick={() =>
                            setThemeType((prevThemeType) =>
                                prevThemeType === 'light' ? 'dark' : 'light'
                            )
                        }
                    >
                        <WhiteSunMoonIcon />
                    </IconButton>
                </HeaderRight>
            </Toolbar>
        </AppBar>
    );
};

export default Navigation;
