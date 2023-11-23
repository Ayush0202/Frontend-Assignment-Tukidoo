import { Box, Grid } from "@mui/material";

import Menu from "./Menu";
import SideMenu from "./SideMenu";

function Dashboard() {
  return (
    <>
      <Box style={{ padding: "25px" }}>
        <Menu />
        <Grid container>
          <Grid xs={2} style={{ backgroundColor: "white", marginTop: "20px" }}>
            <SideMenu />
          </Grid>
          <Grid xs={10}>
            <Box style={{ backgroundColor: "white", marginTop: "20px" }}>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <img src="youtube.jpg" alt="youtube" />
              </div>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default Dashboard;
