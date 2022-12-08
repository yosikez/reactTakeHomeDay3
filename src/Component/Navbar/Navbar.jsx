import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  const Active = {
    color: "white",
    textDecoration: "none",
    backgroundColor: "#ff7e26",
    padding: "5px",
    fontSize: "20px",
    borderRadius: "10px",
    transform: "scale(1.2)",
  };
  const NonActive = {
    padding: "5px",
    color: "white",
    textDecoration: "none",
    fontSize: "20px",
  };
  return (
    <nav
      style={{
        backgroundColor: "#282c34",
        padding: "20px",
        display: "flex",
        gap: "20px",
      }}
    >
      <NavLink
        to="/article"
        style={({ isActive }) => (isActive ? Active : NonActive)}
      >
        Post
      </NavLink>
      <NavLink
        to="/users"
        style={({ isActive }) => (isActive ? Active : NonActive)}
      >
        Users
      </NavLink>
      <NavLink
        to="/comments"
        style={({ isActive }) => (isActive ? Active : NonActive)}
      >
        Comments
      </NavLink>
    </nav>
  );
};

export default NavBar;
