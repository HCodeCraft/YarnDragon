import React from "react";
import { Route, NavLink, Routes } from "react-router-dom";

const linkStyles = {
    display: "inline-block",
    justify:"center",
    width: "80px",
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
        activeStyle={{
          background: "darkblue",
        }}
      >
        Home
      </NavLink>
      <NavLink
        to="/yarns"
        exact
        style={linkStyles}
        activeStyle={{
          background: "darkblue",
        }}
      >
        Yarns
      </NavLink>
      <NavLink
        to="/yarns/new"
        exact
        style={linkStyles}
        activeStyle={{
          background: "darkblue",
        }}
      >
        Add a Yarn
      </NavLink>
    </div>
  );
}

export default NavBar