import React, {
    createContext,
    useEffect,
    useMemo,
    useRef,
    useState
} from 'react';

import { PaletteType, Theme } from '@material-ui/core';

import DarkTheme from '../styles/DarkTheme';
import LightTheme from '../styles/LightTheme';

export interface UIContextOutput {
    themeType: PaletteType;
    setThemeType: React.Dispatch<React.SetStateAction<PaletteType>>;
    theme: Theme;
}

const UIContext = createContext<UIContextOutput>(undefined);

const THEME_TYPE_STORAGE_KEY = 'dkershner-theme-type';

export const UIContextProvider: React.FC = ({ children }) => {
    const initialStorageCheckComplete = useRef(false);
    const [themeType, setThemeType] = useState<PaletteType>('light');

    useEffect(() => {
        if (typeof window !== 'undefined') {
            if (!initialStorageCheckComplete.current) {
                const themeTypefromStorage = localStorage.getItem(
                    THEME_TYPE_STORAGE_KEY
                );

                if (themeTypefromStorage) {
                    setThemeType(themeTypefromStorage as PaletteType);
                }
                initialStorageCheckComplete.current = true;
                return;
            }
            localStorage.setItem(THEME_TYPE_STORAGE_KEY, themeType);
        }
    }, [themeType]);

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
