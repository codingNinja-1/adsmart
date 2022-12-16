import { Typography, TextField } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/system";

// login
export const LoginForm = styled(Box)(() => ({
    margin: "auto",
    display: "flex",
    flexDirection: "column",
    flexGrow: 1,
    border: "1px solid #005CC3 ",
    alignItems: "center",
    justifyContent: "space-around",
    padding: "20px",
    maxWidth: "400px",
    boxShadow: "2px 2px 20px black",
    borderRadius: "10px",
}));

export const LoginHeader = styled(Typography)(() => ({
    color: "Colors.primary",
    textAlign: "center",
    flexGrow: 5,
    fontSize: "2em",
    fontFamily: '"Montez","cursive"',
}));

export const LoginTextField = styled(TextField)(() => ({
    color: "#005cc3",
}));
