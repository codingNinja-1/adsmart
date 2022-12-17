import { useEffect } from "react";
import { Container } from "@mui/system";
import { ThemeProvider } from "@mui/system";
import theme from "./styles/theme";
import Appbar from "./components/Appbar/Appbar";
import Login from "./components/login/login";
import Campaig from "./components/campaign/campaign";
import Campaignii from "./components/campaign2/CampaignII";

function App() {
    useEffect(() => {
        document.title = "Adsmart.com";
    }, []);

    return (
        <ThemeProvider theme={theme}>
            <Container>
                <Appbar />
                {/* <Login/> */}
                <Campaig/>
                <Campaignii/>
            </Container>
        </ThemeProvider>
    );
}

export default App;
