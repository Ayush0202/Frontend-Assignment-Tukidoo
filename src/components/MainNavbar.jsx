import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

export default function MainNavbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        style={{ backgroundColor: "white", color: "black", boxShadow: "none" }}
      >
        <Toolbar>
          <Button
            size="small"
            color="inherit"
            sx={{
              mr: 2,
            }}
            onClick={() => {
              alert("Go Back Button");
            }}
          >
            <ArrowBackIosIcon />
          </Button>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Basic Mathematics 101
          </Typography>
          <div>
            <Button
              Button
              color="inherit"
              onClick={() => {
                alert("Call Teacher Button");
              }}
            >
              <img src="call.jpg" alt="call" style={{ marginRight: "5px" }} />
              Call Teacher
            </Button>
            <Button
              Button
              color="inherit"
              onClick={() => {
                alert("Support Button");
              }}
            >
              <img
                src="support.jpg"
                alt="call"
                style={{ marginRight: "5px" }}
              />
              Support
            </Button>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
