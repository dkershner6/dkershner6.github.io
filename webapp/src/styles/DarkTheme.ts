import { createMuiTheme } from '@material-ui/core/styles';

export type ThemeType = typeof DarkTheme;

const DarkTheme = createMuiTheme({
    palette: {
        type: 'dark',
        primary: { main: '#1976d2' },
        info: { main: '#3f51b5' }
    }
});

export default DarkTheme;
