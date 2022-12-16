import { createTheme } from "@mui/material/styles";
export const Colors = {
    primary: "#005CC3",
    secondary: "#d1addc",
    logo: "#005CC3",
    /* keep adding */
};

const theme = createTheme({
    palette: {
        primary: {
            main: Colors.primary,
        },
        secondary: {
            main: Colors.secondary,
        },
        logo: {
            main: Colors.logo,
        },
    },
    components: {
        MuiButton: {
            defaultProps: {
                disableElevation: true,
                disableRipple: true,
                // margin:'2ee',
            },
        },
    },
    Button: {
        marginLeft: "2em",
    },
});
export default theme;
