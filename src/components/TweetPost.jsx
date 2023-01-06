import {
  EmojiEmotions,
  HistoryEduRounded,
  Image,
  PersonPin,
  VideoCameraBack,
} from "@mui/icons-material";
import {
  Avatar,
  Box,
  Button,
  Fab,
  Modal,
  Stack,
  styled,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

const StyledModal = styled(Modal)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

const UserBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  marginBottom: "3px",
});

function PostTweet() {
  const [Open, SetOpen] = useState(false);
  const [tweet, setTweet] = useState({description:" "});

  const handleTweet = async(e) =>{
    e.preventDefault();
    const response = await fetch("http://localhost:5001/tweets/justTweet/",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify(tweet),
    })

    if(!response.ok){
      console.log(console.error());
    }

  };
  return (
    <>
      <Tooltip
        onClick={(e) => SetOpen(true)}
        title="Tweet"
        sx={{
          position: "fixed",
          bottom: 318,
          left: 140,
        }}
      >
        <Fab color="primary" aria-label="tweet">
          <HistoryEduRounded />
        </Fab>
      </Tooltip>
      <StyledModal
        open={Open}
        onClose={(e) => SetOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          width={300}
          height={225}
          bgcolor={"background.default"}
          color={"text.primary"}
          p={3}
          borderRadius={5}
        >
          <UserBox>
            <Avatar
              sx={{ height: 30, width: 30 }}
              src="https://bestprofilepictures.com/wp-content/uploads/2021/04/Cool-Profile-Picture-For-Discord-768x890.jpg"
            />
            <Typography variant="body1" fontWeight={300}>
              <Button
                variant="outlined"
                size="small"
                sx={{
                  borderRadius: "20px",
                }}
              >
                Everyone
              </Button>
            </Typography>
          </UserBox>
          {/* --------------------------------------- form of tweet -------------------------------- */}
          <form onSubmit={handleTweet}>
            <TextField
              sx={{
                width: "100%",
              }}
              id="standard-multiline-static"
              multiline
              name="description"
              value={tweet.description}
              rows={6}
              placeholder="What's happening?"
              variant="standard"
              onChange={(e) => setTweet({...tweet, description: e.target.value})}
            />
            <Stack direction="row" gap={2} mt={2} mb={3}>
              <EmojiEmotions sx={{ color: "#FFC93C" }} />
              <PersonPin color="success" />
              <Image color="secondary" />
              <VideoCameraBack color="primary" />
              <Stack gap={4}>
                <Button
                  variant="contained"
                  type="submitt"
                  sx={{
                    float: "right",
                    borderRadius: "20px",
                    marginLeft: "80%",
                    marginTop: "-8%",
                  }}
                >
                  Tweet
                </Button>
              </Stack>
            </Stack>
          </form>
        </Box>
      </StyledModal>
    </>
  );
}

export default PostTweet;
