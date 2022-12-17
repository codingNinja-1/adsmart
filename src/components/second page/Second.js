import { ListItemText } from "@mui/material";
import Button from "@mui/material/Button";
import { AppbarContainer, AppbarHeader, MyList } from "../../styles/Appbar";
import "../../../src/index.css";
export default function AppbarDesktop({ matches }) {
    return (
        <AppbarContainer>
            <AppbarHeader sx={{ color: "#005CC3" }}>Adzmart.ng</AppbarHeader>
            <MyList type="row">
                <ListItemText primary="Advertise" />
                <ListItemText primary="How it works" />
                <Button
                    variant="contained"
                    sx={{ marginRight: 2 }}
                    color="primary"
                >
                    login
                </Button>
                <Button
                    variant="contained"
                    color="secondary"
                    className="buttoN"
                >
                    Signup
                </Button>
            </MyList>
        </AppbarContainer>
    );
}
