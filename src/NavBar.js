import React from "react";
import { Route, NavLink, Routes } from "react-router-dom";

const linkStyles = {
    display: "inline-block",
    justify:"center",
    width: "60px",
    padding: "12px",
    margin: "0 6px 6px",
    background: "#9f83ff",
    textDecoration: "none",
    color: "white",
}

function NavBar() {
  return (
    <div>
      <NavLink
        to="/"
        style={linkStyles}
        activestyle={{
          background: "darkblue",
        }}
      >
        Home
      </NavLink>
      <NavLink
        to="/yarns"
        style={linkStyles}
        activestyle={{
          background: "darkblue",
        }}
      >
        Yarns
      </NavLink>
      <NavLink
        to="/yarns/new"
        style={linkStyles}
        activestyle={{
          background: "darkblue",
        }}
      >
        Add a Yarn
      </NavLink>
    </div>
  );
}

export default NavBar