import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import SideNavBar from "./components/LeftSideNavBar";
import { About } from "./pages/about";
import Home from "./pages/home";
import LogIn from "./auth/login";
import SignUp from "./auth/signup";

const App = () => {
  
  return (
    <BrowserRouter>
        <NavBar pageTitle={"Home"} />
        <SideNavBar />

        {/* BROWSER ROUTER */}
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/" element={<LogIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
    </BrowserRouter>
  );
};

export default App;
