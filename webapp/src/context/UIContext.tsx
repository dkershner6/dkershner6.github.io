import React, { createContext, useMemo, useState } from 'react';

import { PaletteType, Theme } from '@material-ui/core';

import DarkTheme from '../styles/DarkTheme';
import LightTheme from '../styles/LightTheme';

export interface UIContextOutput {
    themeType: PaletteType;
    setThemeType: React.Dispatch<React.SetStateAction<PaletteType>>;
    theme: Theme;
}

const UIContext = createContext<UIContextOutput>(undefined);

export const UIContextProvider: React.FC = ({ children }) => {
    const [themeType, setThemeType] = useState<PaletteType>('light');

    const theme = useMemo(
        () => (themeType === 'light' ? LightTheme : DarkTheme),
        [themeType]
    );

    return (
        <UIContext.Provider value={{ themeType, setThemeType, theme }}>
            {children}
        </UIContext.Provider>
    );
};

export default UIContext;
