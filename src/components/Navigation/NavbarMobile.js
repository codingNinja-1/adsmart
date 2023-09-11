import { AppbarContainer, AppbarHeader } from "../../styles/Appbar";

export default function AppbarMobile({ matches }) {
    return (
        <AppbarContainer>
            <AppbarHeader
                sx={{ color: "#005CC3" }}>{`Adzmart.ng`}</AppbarHeader>
        </AppbarContainer>
    );
}
