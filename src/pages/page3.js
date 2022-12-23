import { useEffect } from "react";
import Budget from "../components/campaign budget/budget";
// import Campaignii from "../components/campaign2/CampaignII";

function Page3() {
    useEffect(() => {
        document.title = "Adsmart.com";
    }, []);

    return (
        <>
            <Budget/>
        </>

    );
} 
 
export default Page3;
