import { Box } from "@mui/system";
import { styled } from "@mui/material/styles";
import { Paper } from "@mui/material";

export const Campaign = styled(Box)(() => ({
    display: "flex",
    m: 1,
    width: 428,
    height: 328,
   }));

export const Papers= styled(Paper)(()=>({
 background: "#005CC3",
}))
// return (

//         {/* <Paper variant="outlined" /> */}
//         <Typography></Typography>
//         <Paper variant="outlined" square />
//     </Box>
// );

//   <Box
//         sx={{
//             display: "flex",
//             "& > :not(style)": {
//                 m: 1,
//                 width: 428,
//                 height: 328,
//                 background: "#005CC3",
//             },

//         }}
//     ></Box>
