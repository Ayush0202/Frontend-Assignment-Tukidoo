import { Button } from "@mui/material";

import DriveFileMoveOutlinedIcon from "@mui/icons-material/DriveFileMoveOutlined";
import EmergencyRecordingOutlinedIcon from "@mui/icons-material/EmergencyRecordingOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import MarkUnreadChatAltOutlinedIcon from "@mui/icons-material/MarkUnreadChatAltOutlined";
import MicNoneOutlinedIcon from "@mui/icons-material/MicNoneOutlined";

function SideMenu() {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div style={{ marginBottom: "15px" }}>
          <img src="photo1.jpg" alt="" style={{ width: "175px" }} />
        </div>
        <div style={{ marginBottom: "15px" }}>
          <img src="photo2.jpg" alt="" style={{ width: "175px" }} />
        </div>
        <div
          style={{
            padding: "5px",
            display: "flex",
            flexWrap: "wrap",
            columnGap: "5px",
          }}
        >
          <div>
            <Button
              style={{ color: "black", backgroundColor: "#eeedf3" }}
              onClick={() => alert("Cam Button Pressed")}
            >
              <EmergencyRecordingOutlinedIcon />
            </Button>
            <div style={{ marginLeft: "15px", marginBottom: "10px" }}>Cam</div>
          </div>

          <div>
            <Button
              style={{ color: "black", backgroundColor: "#eeedf3" }}
              onClick={() => alert("Mic Button Pressed")}
            >
              <MicNoneOutlinedIcon />
            </Button>
            <div style={{ marginLeft: "15px" }}>Mic</div>
          </div>

          <div>
            <Button
              style={{ color: "black", backgroundColor: "#eeedf3" }}
              onClick={() => alert("Share Button Pressed")}
            >
              <DriveFileMoveOutlinedIcon />
            </Button>
            <div style={{ marginLeft: "15px" }}>Share</div>
          </div>

          <div>
            <Button
              style={{ color: "black", backgroundColor: "#eeedf3" }}
              onClick={() => alert("Chat Button Pressed")}
            >
              <MarkUnreadChatAltOutlinedIcon />
            </Button>
            <div style={{ marginLeft: "15px" }}>Chat</div>
          </div>

          <div>
            <Button
              style={{ color: "black", backgroundColor: "#0086a0" }}
              onClick={() => alert("Leave Button Pressed")}
            >
              <LogoutOutlinedIcon />
            </Button>
            <div style={{ marginLeft: "15px" }}>Leave</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SideMenu;
