import { Box, Typography} from "@mui/material";
import RightSidePanel from "../components/rightSidePanel";

const Home = () => {
  return (

    <Box sx={{ display: "flex", flexDirection: "row" }}>

      {/* -------------------------- Tweets Exploration -------------------------- */}
      <Box
        sx={{
          p: "1.5rem",
          margin: "3.5rem 8rem auto 12.4rem",
          display:"flex",
          flexDirection:"column"
        }}
      >
        <Typography variant="h3" sx={{borderBottom:"2px solid"}}>This is a home page. !!</Typography>
        
        <h4>This is about  Home Page. </h4>
        <h4>This is about  Home Page. </h4>
        <h4>This is about  Home Page. </h4>
        <h4>This is about  Home Page. </h4>
        <h4>This is about  Home Page. </h4>
        <h4>This is about  Home Page. </h4>
        <h4>This is about  Home Page. </h4>
        <h4>This is about  Home Page. </h4>
        <h4>This is about  Home Page. </h4>
        <h4>This is about  Home Page. </h4>
        <h4>This is about  Home Page. </h4>
        <h4>This is about  Home Page. </h4>
        <h4>This is about  Home Page. </h4>
        <h4>This is about  Home Page. </h4>
        <h4>This is about  Home Page. </h4>
        <h4>This is about  Home Page. </h4>
        <h4>This is about  Home Page. </h4>
        <h4>This is about  Home Page. </h4>
        <h4>This is about  Home Page. </h4>
        <h4>This is about  Home Page. </h4>
        <h4>This is about  Home Page. </h4>
        <h4>This is about  Home Page. </h4>
        <h4>This is about  Home Page. </h4>
      </Box>

      {/* --------------------- Right Sider Panel -------------------------- */} 
      <RightSidePanel />      

    </Box>
  );
};

export default Home;
