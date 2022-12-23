import { useEffect } from "react";
import { Container } from "@mui/system";
import { ThemeProvider } from "@mui/system";
import theme from "./styles/theme";
import Appbar from "./components/Navigation/Navbar";
import Campaig from "./components/campaign/campaign";
import { Routes, Route } from "react-router-dom";
import Page2 from "./pages/Page2";
import Page3 from "./pages/page3";
function App() {
    useEffect(() => {
        document.title = "Adsmart.com";
    }, []);

    return (
        <ThemeProvider theme={theme}>
            <Container>
                <Appbar />
                <Routes>
                    <Route path="/" element={<Campaig />} />
                    <Route path="/page2" element={<Page2 />} />
                    <Route path="/page3" element={<Page3 />} />
                </Routes>
            </Container>
        </ThemeProvider>
    );
}

export default App;
