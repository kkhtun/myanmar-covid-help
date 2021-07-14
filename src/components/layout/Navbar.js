import React from "react";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="nav-container">
      <h1>Myanmar Covid-19 Tracker</h1>
      <div className="nav-links">
        <NavLink exact to="/" className="nav-link" activeClassName="nav-active">
          Stats
        </NavLink>
        <NavLink to="/charts" className="nav-link" activeClassName="nav-active">
          Charts
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
