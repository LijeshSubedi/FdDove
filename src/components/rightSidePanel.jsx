/* 
1. Right Side Panel for viewing the tag, followers, and unfollowings
*/

import { AccountCircleRounded } from "@mui/icons-material";
import { Box, Paper, Typography } from "@mui/material";

const RightSidePanel = () => {
  return (
    <Box
      sx={{
        margin: "0",
        padding: "1.5rem",
        border: "2px solid rgba(0,0,0,0.2)",
        display:"flex",
        flexDirection:"column",
        width:"35%",

        position:"relative",
    
      }}
    >
      {/* Trending*/}
      <Paper elevation={0}
        sx={{
          padding: "2rem",
          margin: "1rem auto",
          background: "rgb(245,245, 245)",
          "&: hover":{cursor:"pointer"},
          display:"flex",
          flexDirection:"column",
          width:"60%",
          borderRadius:"25px",
  
        }}
      >
        <Typography>#elonmusk</Typography>
        <Typography>#pele</Typography>
        <Typography>#natgeo</Typography>
        <Typography>#scienceofWn</Typography>
        <Typography>#joke</Typography>
        <Typography>#words</Typography>
        <Typography>#inthisday</Typography>
        <Typography>#don'tdo</Typography>
      </Paper>

      {/* Followers */}

      <Paper elevation={0}
        sx={{
          padding: "2rem",
          margin: "1rem auto",
          position: "sticky",
          top: "0rem",
          border: "0",
          background: "rgb(245,245,245)",  
          "&: hover":{cursor:"pointer"},
          display:"flex",
          flexDirection:"column",
          width:"60%",
          borderRadius:"25px",
        }}
      >
        <Typography><AccountCircleRounded /> lonmusk1</Typography>
        <Typography><AccountCircleRounded /> elonmusk12</Typography>
        <Typography><AccountCircleRounded /> londausk123</Typography>
        <Typography><AccountCircleRounded /> elonmusk1234</Typography>
        <Typography><AccountCircleRounded /> adlonmusk1234</Typography>
        <Typography><AccountCircleRounded /> alusk1234</Typography>
        <Typography><AccountCircleRounded /> edlsk1234</Typography>
        <Typography><AccountCircleRounded /> dxonmusk1234</Typography>
        <Typography><AccountCircleRounded /> eonm1234</Typography>
        <Typography><AccountCircleRounded /> zdusk1234</Typography>
      </Paper>
    </Box>
  );
};

export default RightSidePanel;
