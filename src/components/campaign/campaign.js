
// import { Link } from "@mui/material";
import { Campaign, Middle, Papers } from "../../styles/campaign";
import { FirstText } from "./";

export default function Campaig({ NextSlide, PrevSlide }) {
    return (
        <>
            <FirstText></FirstText>

            <Campaign>
                <Papers sx={{ marginRight: "10px" }} onClick={NextSlide}>
                    <Middle sx={{ color: "#005CC3" }}>
                        I am an Advistiser
                    </Middle>
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
