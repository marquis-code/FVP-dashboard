import React from "react";
import { NavLink } from "react-router-dom";

function UserMenuBar() {
  return (
    <div className="menu-bar">
      <ul className="menu-bar-lists">
        <NavLink to="/dashboard" activeClassName="current-menu" className="menu-bar-list ">
          <li className="menu-bar-link">Get Started</li>
        </NavLink>
        <NavLink to="/dashboard/details" activeClassName="current-menu" className="menu-bar-list">
          <li className="menu-bar-link">Details</li>
        </NavLink>
        <NavLink to="/dashboard/dashboard" activeClassName="current-menu" className="menu-bar-list">
          <li className="menu-bar-link">Dashboard</li>
        </NavLink>
      </ul>
    </div>
  );
}
export default UserMenuBar;