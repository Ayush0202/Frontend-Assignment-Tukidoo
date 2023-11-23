import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import "./App.css";
import Dashboard from "./components/Dashboard";
import MainNavbar from "./components/MainNavbar";
import SideBar from "./components/SideBar";
function App() {
  return (
    <>
      <Box>
        <Grid container>
          <Grid xs={1} style={{ background: "#f0f1f3", height: "100vh" }}>
            <SideBar />
          </Grid>
          <Grid xs={11}>
            <Box style={{ padding: "25px" }}>
              <MainNavbar />
              <Dashboard />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default App;
