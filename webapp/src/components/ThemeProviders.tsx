import { MuiThemeProvider } from '@material-ui/core';
import { ThemeProvider } from 'styled-components';
import React, { useContext } from 'react';
import UIContext from '../context/UIContext';

const ThemeProviders: React.FC = ({ children }) => {
    const { theme } = useContext(UIContext);

    return (
        <ThemeProvider theme={theme}>
            <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
        </ThemeProvider>
    );
};

export default ThemeProviders;
