import { Link } from "@mui/material";
import { Campaign, Middle, Papers } from "../../styles/campaign";
import Firsttexts from "../Firsttext/Firsttext";

export default function Campaig() {
    return (
        <>
            <Firsttexts></Firsttexts>

            <Campaign>
                <Papers sx={{ marginRight: "10px" }}>
                    <Link  to ="./second">
                    <Middle sx={{ color: "#005CC3",  }}>
                        I am an Advistiser
                    </Middle>
                    </Link>
                </Papers>   
                <Middle
                    sx={{
                        fontWeight: "700",
                        margin: 3,
                        color: "#005CC3",
                    }}
                >
                    or
                </Middle>

                <Papers>
                    <Middle> I need an Advertising Expert</Middle>
                </Papers>
            </Campaign>
        </>
    );
}
