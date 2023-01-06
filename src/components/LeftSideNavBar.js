import {
  AccountCircleRounded,
  HomeRounded,
  MailOutlineRounded,
  MoreHorizRounded,
  NotificationsNoneRounded,
  PermIdentityRounded,
  TagRounded,
} from "@mui/icons-material";
import { Box, IconButton, Tooltip, useMediaQuery } from "@mui/material";
import { Link } from "react-router-dom";
import PostTweet from "./TweetPost";

const SideNavBar = () =>{
  const isNonMobileScreen = useMediaQuery("(min-width: 1000px)");
  return(
    <div>
    {isNonMobileScreen && (<Box
      sx={{
        margin: "0",
        width: "15%",
        border: "2px solid rgba(0,0,0,0.1)",
        bgcolor: "white",
        display:"block",
        position: "fixed",
        top: "4rem",
        bottom: "0rem",
        left: "0rem",
      }}
    >
      {/* ------- HOME ------- */}
      <Link to="/home">
      <Tooltip title="Home" placement="right"><IconButton
        color="primary"
        sx={{
          margin: "0.6rem 0 auto 9rem",
          fontSize: "13px",
          padding: "0.8em",
          border: "1px solid rgba(0,0,0,0.1)",
        }}
      >
        <HomeRounded />
      </IconButton></Tooltip></Link>
      <br />

      {/* -------- Explore ------- */}
      <Tooltip title="Explore" placement="right"><IconButton
        color="primary"
        sx={{
          margin: "0.6rem 0 auto 9rem",
          fontSize: "13px",
          padding: "0.8em",
          border: "1px solid rgba(0,0,0,0.1)",
        }}
      >
        <TagRounded />
      </IconButton></Tooltip>
      <br />

      {/* ------------ Notifications ------------- */}
      <Tooltip title="Notification" placement="right"><IconButton
        color="primary"
        sx={{
          margin: "0.6rem 0 auto 9rem",
          fontSize: "13px",
          padding: "0.8em",
          border: "1px solid rgba(0,0,0,0.1)",
        }}
      >
        <NotificationsNoneRounded />
      </IconButton></Tooltip>
      <br />

      {/* ---------------- Messages --------------- */}
      <Tooltip title="Messages" placement="right"><IconButton
        color="primary"
        sx={{
          margin: "0.6rem 0 auto 9rem",
          fontSize: "13px",
          padding: "0.8em",
          border: "1px solid rgba(0,0,0,0.1)",
        }}
      >
        <MailOutlineRounded />
      </IconButton></Tooltip>
      <br />

      {/* -------------- Profile ----------------- */}
      <Tooltip title="Profile" placement="right"><IconButton
        color="primary"
        sx={{
          margin: "0.6rem 0 auto 9rem",
          fontSize: "13px",
          padding: "0.8em",
          border: "1px solid rgba(0,0,0,0.1)",
        }}
      >
        <PermIdentityRounded />
      </IconButton></Tooltip>
      <br />

      {/* ------------------ more or other function----------- */}
      <Tooltip title="More" placement="right"><IconButton
        color="primary"
        aria-label="More"
        sx={{
          margin: "0.6rem 0 auto 9rem",
          fontSize: "13px",
          padding: "0.8em",
          border: "1px solid rgba(0,0,0,0.1)",
        }}
      >
        <MoreHorizRounded />
      </IconButton></Tooltip>
      <br />
      {/* ------------------ New Tweet ------------- */}
      {/* <Tooltip title="New Tweet" placement="right"><IconButton
        color="primary"
        sx={{
          margin: "0.6rem 0 auto 9rem",
          fontSize: "13px",
          padding: "0.8em",
          border: "1px solid rgba(0,0,0,0.1)",
        }}
      >
        <HistoryEduRounded />
      </IconButton></Tooltip>
      <br /> */}
      <PostTweet/>

      {/* ---------- Account -------- */}
      <Link to="/about"><Tooltip title="Account" placement="right"><IconButton
        color="primary"
        sx={{
          margin: "7rem 0 0rem 9rem",
          fontSize: "13px",
          padding: "0.8em",
          border: "1px solid rgba(0,0,0,0.1)",
        }}
      >
        <AccountCircleRounded />
      </IconButton></Tooltip></Link>
      <br />
    </Box>)}
    </div>
  );
}


export default SideNavBar;