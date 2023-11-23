import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";

// mui icons
import AssignmentTurnedInOutlinedIcon from "@mui/icons-material/AssignmentTurnedInOutlined";
import AvTimerOutlinedIcon from "@mui/icons-material/AvTimerOutlined";
import EqualizerRoundedIcon from "@mui/icons-material/EqualizerRounded";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import SegmentIcon from "@mui/icons-material/Segment";

// list of icons
const data = [
  { icon: <SegmentIcon style={{ fontSize: 30 }} /> },
  { icon: <NotificationsNoneOutlinedIcon style={{ fontSize: 30 }} /> },
  { icon: <AvTimerOutlinedIcon style={{ fontSize: 30 }} /> },
  { icon: <AssignmentTurnedInOutlinedIcon style={{ fontSize: 30 }} /> },
  { icon: <RemoveRedEyeOutlinedIcon style={{ fontSize: 30 }} /> },
  { icon: <PeopleAltOutlinedIcon style={{ fontSize: 30 }} /> },
  { icon: <EqualizerRoundedIcon style={{ fontSize: 30 }} /> },
];

function SideBar() {
  const getList = () => (
    <div>
      {data.map((item, index) => (
        <ListItem button key={index}>
          <ListItemIcon
            style={{
              fontSize: 400,
              display: "flex",
              justifyContent: "center",
              marginBottom: "15px",
              marginLeft: "10px",
            }}
          >
            {item.icon}
          </ListItemIcon>
        </ListItem>
      ))}
    </div>
  );
  return (
    <>
      <img src="icon.png" alt="main-icon" style={{ marginLeft: "15px" }} />
      {getList()}
      <img
        src="profile-photo.png"
        alt="profile-photo"
        style={{
          width: "75px",
          marginLeft: "20px",
          marginTop: "75px",
        }}
      />
    </>
  );
}

export default SideBar;
