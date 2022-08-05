import { Avatar } from "@mui/material";
import { deepPurple } from "@mui/material/colors";
import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
const logo = require("../image/nxtwave1.jpg");
const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/">
        <img className="nav-logo" src={logo} alt="Logo" />
      </Link>
      <Avatar sx={{ bgcolor: deepPurple[500] }}>AS</Avatar>
    </div>
  );
};

export default Navbar;
