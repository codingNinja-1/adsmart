import { Campaign, Papers, Middle, Btn } from "../../styles/campaign";
import { FirstText } from "./";
import { Button, Link } from "@mui/material";

export default function Campaignii({ NextSlide, PrevSlide }) {
    return (
        <>
            <FirstText></FirstText>

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
                <Button
                    sx={{ width: "130px" }}
                    variant="contained"
                    onClick={PrevSlide}
                >
                    Previous
                </Button>
                <Button
                    sx={{ width: "130px" }}
                    onClick={NextSlide}
                    variant="contained"
                >
                    Next
                </Button>
            </Btn>
        </>
    );
}
