import React from "react";
import { NavLink } from "react-router-dom";
import Banner from "./YDV2.jpg";

const linkStyles = {
  display: "inline-block",
  justify: "center",
  width: "100px",
  padding: "12px",
  margin: "0 6px 6px",
  background: "#872d7b",
  textDecoration: "none",
  color: "white",
};

function NavBar() {
  return (
    <div className="top">
      <div className="banner">
        <img src={Banner} alt="Yarn Dragon Banner" />
        <br />
        <br />
      </div>
      <br />
      <div className="links">
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
    </div>
  );
}

export default NavBar;
