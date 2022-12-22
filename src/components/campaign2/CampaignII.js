import { Campaign, Papers, Middle, Btn } from "../../styles/campaign";
import Firsttexts from "../Firsttext/Firsttext";
import { Button, Link } from "@mui/material";

export default function Campaignii() {
    return (
        <>
            <Firsttexts></Firsttexts>

            <Campaign>
                <Papers sx={{ marginRight: "10px" }}>
                    <Link to="./second" underline="hover">
                        <Middle sx={{ color: "#005CC3" }}>
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
            <Btn>
                    <Button sx={{ width: "130px" }} variant="contained"
                    href="/"
                    >
                        Previous
                    </Button>
                <Button
                    sx={{ width: "130px" }}
                    href="/"
                    variant="contained"
                >
                    Next
                </Button>
            </Btn>
        </>
    );
}
