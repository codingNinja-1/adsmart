import { FirstText } from "./";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
// import FormLabel from '@mui/material/FormLabel';
import { Button } from "@mui/material";
import { Btn } from "../../styles/campaign";


export default function Budget({ PrevSlide }) {
    return (
        <>
            <FirstText></FirstText>

            <FormControl sx={{ display: "flex", flexDirection: "column" }}>
                {/* <FormLabel id="demo-row-radio-buttons-group-label"/> */}

                <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                >
                    <Button sx={{ width: "45%" }}>
                        <FormControlLabel
                            value="N200,000-500,000"
                            control={<Radio />}
                            label="N200,000 - N500,000"
                        />
                    </Button>
                    <Button sx={{ width: "45%" }}>
                        <FormControlLabel
                            value="male"
                            control={<Radio />}
                            label="N500,000 - N1,000,000"
                        />
                    </Button>
                </RadioGroup>
                <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                >
                    <Button sx={{ width: "45%", hover: "Colors.primary" }}>
                        <FormControlLabel
                            value="othe"
                            control={<Radio />}
                            label="N1,000,000 - N2,000,000"
                        />
                    </Button>
                    <Button sx={{ width: "45%" }}>
                        <FormControlLabel
                            value="A"
                            control={<Radio />}
                            label="aBOVE n2,000,000"
                        />
                    </Button>
                </RadioGroup>
            </FormControl>
            <Btn>
                <Button sx={{ width: "130px" }} variant="contained"
                    onClick={PrevSlide}
                >
                    Previous
                </Button>
                <Button
                    sx={{ width: "130px" }}
                    href="/page3"
                    variant="contained"
                >
                    Submit
                </Button>
            </Btn>
        </>
    );
}



