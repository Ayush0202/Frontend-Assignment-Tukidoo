import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

// mui icon
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import LaptopMacOutlinedIcon from "@mui/icons-material/LaptopMacOutlined";
import NoteAltOutlinedIcon from "@mui/icons-material/NoteAltOutlined";
import OndemandVideoOutlinedIcon from "@mui/icons-material/OndemandVideoOutlined";
import PersonalVideoOutlinedIcon from "@mui/icons-material/PersonalVideoOutlined";
import VideoFileOutlinedIcon from "@mui/icons-material/VideoFileOutlined";

export default function Menu() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        style={{
          backgroundColor: "#eeedf3",
          color: "black",
          padding: "5px",
          boxShadow: "none",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <Button color="inherit" onClick={() => alert("Classroom")}>
            <LaptopMacOutlinedIcon style={{ marginRight: "7.5px" }} /> Classroom
          </Button>
          <Button color="inherit" onClick={() => alert("Whiteboard")}>
            <PersonalVideoOutlinedIcon
              style={{ marginRight: "7.5px" }}
              onClick={() => alert("Whiteboard")}
            />
            Whiteboard
          </Button>
          <Button color="inherit" onClick={() => alert("Videos")}>
            <OndemandVideoOutlinedIcon style={{ marginRight: "7.5px" }} />{" "}
            Videos
          </Button>
          <Button color="inherit" onClick={() => alert("Slide Show")}>
            <NoteAltOutlinedIcon style={{ marginRight: "7.5px" }} />
            Slide Show
          </Button>
          <Button color="inherit" onClick={() => alert("Documents")}>
            <DescriptionOutlinedIcon style={{ marginRight: "7.5px" }} />
            Documents
          </Button>
          <Button color="inherit" onClick={() => alert("Doc.Cam")}>
            <VideoFileOutlinedIcon style={{ marginRight: "7.5px" }} />
            Doc.Cam
          </Button>
        </div>
      </AppBar>
    </Box>
  );
}
