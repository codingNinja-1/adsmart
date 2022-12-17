import { useEffect } from "react";
import { Container } from "@mui/system";
import { ThemeProvider } from "@mui/system";
import theme from "./styles/theme";
import Appbar from "./components/Appbar/Appbar";
import Campaig from "./components/campaign/campaign";
import {Routes, Route, createBrowserRouter as Router } from "react-router-dom"
function App() {
    useEffect(() => {
        document.title = "Adsmart.com";
    }, []);

    return (
        <ThemeProvider theme={theme}>
            <Router>
                <Container>
                    <Appbar />
                    <Routes>
                        <Route path="/">
                            <Campaig />
                        </Route> 
                    </Routes>
                </Container>
             </Router>      
               </ThemeProvider>
    );
}

export default App;
