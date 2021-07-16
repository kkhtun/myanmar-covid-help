import React from "react";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="nav-container">
      <h1>Myanmar COVID Help</h1>
      <div className="nav-links">
        <NavLink
          exact
          to="/"
          className="nav-link"
          activeClassName="nav-active"
          isActive={(match, location) => {
            if (
              location.pathname === "/" ||
              location.pathname === "/service-item"
            ) {
              return true;
            }
          }}
        >
          Services
        </NavLink>
        <NavLink
          exact
          to="/stats"
          className="nav-link"
          activeClassName="nav-active"
        >
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
