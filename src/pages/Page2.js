import { useEffect } from "react";
// import { Container } from "@mui/system";
// import Campaig from "../components/campaign/campaign";
import Campaignii from "../components/campaign2/CampaignII";

function Page2() {
    useEffect(() => {
        document.title = "Adsmart.com";
    }, []);

    return (
        <>
            {/* <Login/> */}
            {/* <Campaig /> */}
            < Campaignii />
        </>

    );
} 
 
export default Page2;
