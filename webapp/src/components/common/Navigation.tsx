import React, { ReactElement, useContext } from 'react';

import {
    AppBar,
    Avatar,
    IconButton,
    Link,
    Toolbar,
    Tooltip
} from '@material-ui/core';
import SunMoonIcon from '@material-ui/icons/Brightness4';
import GitHubIcon from '@material-ui/icons/GitHub';
import styled from 'styled-components';

import UIContext from '../../context/UIContext';

const HeaderLeft = styled.div`
    flex: 1;
`;

const HeaderRight = styled.div`
    display: flex;
    align-items: center;
    color: #fff;
`;

const WhiteGitHubIcon = styled(GitHubIcon)`
    color: #fff;
`;

const WhiteSunMoonIcon = styled(SunMoonIcon)`
    color: #fff;
`;

const LighthouseContainer = styled.div`
    display: flex;
    margin-right: 1rem;
`;

const avatarProps = {
    style: {
        backgroundColor: '#008800'
    }
};

const Navigation = (): ReactElement => {
    const { themeType, setThemeType } = useContext(UIContext);

    return (
        <AppBar
            position="static"
            color={themeType === 'light' ? 'primary' : 'transparent'}
        >
            <Toolbar>
                <HeaderLeft></HeaderLeft>
                <HeaderRight>
                    <LighthouseContainer>
                        <Tooltip title="Lighthouse Performance">
                            <Link
                                href="https://developers.google.com/web/tools/lighthouse"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Avatar {...avatarProps}>100</Avatar>
                            </Link>
                        </Tooltip>
                        <Tooltip title="Lighthouse Accessibility">
                            <Link
                                href="https://developers.google.com/web/tools/lighthouse"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Avatar {...avatarProps}>100</Avatar>
                            </Link>
                        </Tooltip>
                        <Tooltip title="Lighthouse Best Practices">
                            <Link
                                href="https://developers.google.com/web/tools/lighthouse"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Avatar {...avatarProps}>100</Avatar>
                            </Link>
                        </Tooltip>
                        <Tooltip title="Lighthouse SEO">
                            <Link
                                href="https://developers.google.com/web/tools/lighthouse"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Avatar {...avatarProps}>100</Avatar>
                            </Link>
                        </Tooltip>
                    </LighthouseContainer>
                    <Tooltip title="Source code">
                        <IconButton
                            href="https://github.com/dkershner6/dkershner.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="See Source Code"
                        >
                            <WhiteGitHubIcon />
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="Light/Dark Mode">
                        <IconButton
                            onClick={() =>
                                setThemeType((prevThemeType) =>
                                    prevThemeType === 'light' ? 'dark' : 'light'
                                )
                            }
                            aria-label="Toggle Light/Dark Mode"
                        >
                            <WhiteSunMoonIcon />
                        </IconButton>
                    </Tooltip>
                </HeaderRight>
            </Toolbar>
        </AppBar>
    );
};

export default Navigation;
