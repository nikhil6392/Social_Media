import { createMuiTheme } from "@mui/material";
import { pink } from '@material-ui/core/colors';

const theme = createMuiTheme({
    typography: {
        useNextVariants: true,
    },
    palette: {
        primary:{
            light: '#5c67a3',
            main: '#3f4771',
            dark: '#2e355b',
            contrastText: '#fff',
        },
        secondary:{
            light: '#ff79b0',
            main: '#ff4081',
            dark: '#c60055',
            contrastText: '#000',
        },
            openTitle: '#3f4771',
            protectedTitle: '#EC407A',
            type: 'light'
    }
})

export default theme;