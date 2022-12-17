// import { Box, TextField, Typography } from "@mui/material";
import { Button } from "@mui/material";
import React from "react";
import { LoginForm, LoginHeader, LoginTextField } from "../../styles/Loginform";
import { ThemeProvider } from "@mui/system";
import theme from "../styles/theme";
import Appbar from "../components/Appbar/Appbar";
import Login from "../components/login/login";

const Login = () => {
    return (
        <LoginForm>
            <LoginHeader padding={2}>SignUP Here</LoginHeader>
            <LoginTextField
                margin="normal"
                type={"text"}
                variant="outlined"
                placeholder="Name"
            />
            <LoginTextField
                margin="normal"
                type={"email"}
                variant="outlined"
                placeholder="E-mail"
            />
            <LoginTextField
                margin="normal"
                type={"number"}
                variant="outlined"
                placeholder="phone number"
            />
            <LoginTextField
                margin="normal"
                type={"password"}
                variant="outlined"
                placeholder="password"
            />
            <Button sx={{ marginTop: 2 }} color="success" variant="outlined">
                Submit
            </Button>
        </LoginForm>

        // <div>
        //     <form>
        //         <Box display="flex" flexDiretion={"column"}>
        //             <Typography>Login</Typography>
        //             <TextField />
        //         </Box>
        //     </form>
        // </div>
    );
};

export default Login;
