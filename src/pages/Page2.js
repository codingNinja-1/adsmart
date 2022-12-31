import { useEffect } from "react";
import {Campaign2} from "../components/campaign";

function Page2() {
    useEffect(() => {
        document.title = "Adsmart.com";
    }, []);

    return (
        <>
            {/* <Login/> */}
            {/* <Campaig /> */}
            < Campaign2 />
        </>

    );
}

export default Page2;
