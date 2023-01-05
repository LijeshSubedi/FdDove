import { Search, Twitter } from "@mui/icons-material";
import {
  AppBar,
  Box,
  IconButton,
  InputBase,
  Toolbar,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { Link } from "react-router-dom";

const NavBar = ({ pageTitle }) => {
  const isNonMobileScreen = useMediaQuery("(min-width: 1000px)");
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="fixed"
        left="0"
        right="0"
        top="0"
        sx={{ bgcolor: "rgba(255,255,255,0.2)", backdropFilter: "blur(20px)" }}
      >
        <Toolbar>
          {/* TWITTER ICON */}
          <Link to="/home">
            <IconButton
              edge="start"
              color="primary"
              aria-label="twitter"
              sx={{ margin:"auto auto auto 6rem", fontSize: "40", "&:hover": { cursor: "pointer" } }}
            >
              <Twitter />
            </IconButton>
          </Link>

          {/* PAGE TITLE  */}
          <Typography
            sx={{
              color: "black",
              fontWeight: "700",
              fontSize: "24px",
              margin: "auto 4%",
            }}
          >
            {pageTitle}
          </Typography>

          {/* SEARCH TWITTER */}
          {isNonMobileScreen && (
            <Box
              sx={{
                bgcolor: "rgba(0,0,0,0.1)",
                borderRadius: "25px",
                padding: "3px",
                width: "30%",
                margin: "auto 5% auto auto",
              }}
            >
              <IconButton>
                <Search />
              </IconButton>
              {"  "}
              <InputBase placeholder="Search Twitter" />
            </Box>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;
