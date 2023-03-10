import { Box } from "@mui/system";
import { styled } from "@mui/material/styles";
import { Paper, Typography } from "@mui/material";

export const Campaign = styled(Box)(() => ({
    justifyContent: "center",
    display: "flex",
    textAlign: "center",
    padding: "0 5px",
    alignItems: "center",
    // justifyContent: "center",
}));

export const Papers = styled(Paper)(() => ({
    width: 538,
    height: 330,
    display: 'flex',
    flexDirection: "column",
    border: "1px solid #005CC3",
    alignContent: "center",
    // : "center",
    justifyContent: "center",
    backgroundColor: "rgba(0,90,200,0.3)"
}));

export const Middle = styled(Typography)(() => ({
    fontSize: "2em",
    color: "Colors.secondary"
}));

export const Btn = styled(Box)(() => ({
    justifyContent: "space-between",
    display: "flex",
    marginTop: '05vh',
    textAlign: "center",
    m: 1,
    alignItems: "center",
    // justifyContent: "center",
}));

export const SliderWrapper = styled(Box)(() => ({
    width: "100%",
    overflowX: "hidden"

}));
export const SliderContainer = styled(Box)(() => ({
    width: "100%",
    display: "inline-flex",
    transition: "0.3s all ease",
    transform: "translateX(calc(0% + -3px))",

}));

export const SlidingElement = styled(Box)(() => ({
    flexShrink: 0,
    width: "100%",
}));
