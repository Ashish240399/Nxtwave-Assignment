import { Avatar } from "@mui/material";
import { deepPurple } from "@mui/material/colors";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { userName } from "../Redux/Actions/UserAction";
import "./Navbar.css";
const logo = require("../image/nxtwave1.jpg");
const Navbar = () => {
  const loginUser = JSON.parse(localStorage.getItem("name"));
  const username = useSelector((store) => store.userName.user);
  const dispatch = useDispatch();
  return (
    <div className="navbar">
      <Link to="/">
        <img className="nav-logo" src={logo} alt="Logo" />
      </Link>
      <div className="navbar-inner">
        <Link
          onClick={() => {
            if (username) {
              dispatch(userName(null));
              alert("Logout Successful");
            }
          }}
          to={!username && "/login"}
        >
          <p style={{ fontSize: "20px" }}>{username ? "Logout" : "Login"}</p>
        </Link>

        <Avatar sx={{ bgcolor: deepPurple[500] }}>
          {username ? username[0] + username[1] : null}
        </Avatar>
      </div>
    </div>
  );
};

export default Navbar;
