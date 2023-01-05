import { Button, Paper, Switch, TextField, Typography } from "@mui/material";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../appState/context/appContext";

const LogIn = () => {
  const appMode = useContext(AppContext);
  const light = appMode.theme.light;
  const dark = appMode.theme.dark;
  const [theme, setTheme] = useState(light);
  const label = { light: "light", dark: "dark" };
  const Navigate = useNavigate();

  const[loginData, setLogin] = useState({username:"", password:""});

  const handleTheme = () => {
    if (theme === light) {
      setTheme(dark);
    } else {
      setTheme(light);
    }
  };


  const handleLogin = async(e) =>{
    e.preventDefault();
    const response = await fetch("http://localhost:5001/auth/login",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify(loginData)
    });

    if(response.ok){
      console.log(loginData);
      alert("Logged In.")
      Navigate("/home");
    }else{
      alert("Login Failed !!");
    }


    
  }

  return (
    <div>
      <Paper
        elevation={8}
        sx={{
          margin: "8rem 9rem auto 20rem",
          p: "1.5rem",
          color: theme.special,
          bgcolor: theme.back,
          borderRadius: "20px",
        }}
      >
        {/* Toggle Theme */}
        <Switch {...label} defaultChecked onClick={handleTheme} />
        {/* Whats happenning */}
        <Typography
          variant="h4"
          sx={{
            fontWeight: "700",
            fontSize: "3.3rem",
            margin: "auto 1rem auto 10rem",
          }}
        >
          What's Happenning Now?
        </Typography>
        <br /><br />
        
        <form onSubmit={handleLogin}>
          {/* username */}
          <Typography
            variant="h5"
            sx={{ width: "50%", margin: "auto 1rem auto 25rem" }}
          >
            Username
          </Typography>
          <TextField
            variant="outlined"
            type="text"
            name="username"
            label="username"
            value={loginData.username}
            onChange={(e)=>setLogin({...loginData, username:e.target.value})}
            
            sx={{ width: "50%", margin: "auto 1rem auto 25rem" }}
          />{" "}
          <br />
          <br />
          {/* Password ---------   */}
          <Typography
            variant="h5"
            sx={{ width: "50%", margin: "auto 1rem auto 25rem" }}
          >
            Password
          </Typography>
          <TextField
            autoComplete="on"
            variant="outlined"
            type="password"
            name="password"
            label="password"
            value={loginData.password}
            onChange={(e)=>setLogin({...loginData, password:e.target.value})}
            sx={{ width: "50%", margin: "auto 1rem auto 25rem" }}
          />
          <br />
          <br />
          <br />
          {/* Login Btn -------- */}
          <Button
            sx={{
              width: "50%",
              margin: "auto 1rem auto 25rem",
              bgcolor: light.special,
              border: "2px solid #1DA1F2",
              color: dark.front,
              fontSize: "20px",
              fontWeight: "600",
              "&:hover": { color: light.front },
            }}
            onClick={handleLogin}
          >
            Log In
          </Button>
          <br />
        </form>
        <br /> <br />
      </Paper>

      {/* -----------------Sign up route------------------- */}
      <Paper
        elevation={8}
        sx={{
          margin: "1rem 9rem auto 20rem",
          p: "1.5rem",
          color: theme.special,
          bgcolor: theme.back,
          borderRadius: "20px",
        }}
      >
        <Typography variant="h6" sx={{textAlign:"center"}}>
          Give free Speech from today
        </Typography>
        <Button
        
          sx={{
            bgcolor: light.special,
            border: "2px solid #1DA1F2",
            color: dark.front,
            fontSize: "20px",
            fontWeight: "600",
            "&:hover": { color: light.front },
          }}
          onClick={() => Navigate("/register")}
        >
          Sign up
        </Button>
        <br /> <br />
      </Paper>
    </div>
  );
};

export default LogIn;
