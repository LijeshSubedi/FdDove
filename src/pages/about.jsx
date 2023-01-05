import { Paper, Typography } from "@mui/material"

export const About = () =>{
  return <Paper elevation={13} sx={{margin:"10rem 9rem auto 20rem", p:"1.5rem"}}>
    <Typography variant="h4" sx={{fontWeight:"700"}}>Mahesh Bogati</Typography>
    <br /> 
    <Typography sx={{fontWeight:"600"}}>Software Developer and expert at software engineering. </Typography>
    <br />
    <Typography>Email: mahesh@gmail.com </Typography>
    <br /> <br />
  </Paper>
}