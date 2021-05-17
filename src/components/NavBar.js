import React from "react";
import "../App.css";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div id="nav-all">
      <ul>
        <li>
          <NavLink to="/" className="nav-home" activeClassName="selected">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className="nav-about" activeClassName="selected">
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/dashboard" className="nav-dashboard" activeClassName="selected">
            Dashboard
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
