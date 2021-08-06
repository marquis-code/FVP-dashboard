import React from "react";
import { Link, NavLink } from "react-router-dom";

function Nav() {
  return (
    <nav class="admin-nav">
      <Link to="/" className="logo">
        <img
          src="/images/farmz2u-logo.svg"
          alt="Farmz2u"
          className="logo-img"
        />
      </Link>

      <button className="admin-nav-btn">
        <img
          src="/images/arrow.svg"
          alt="hide navigation"
          className="nav-btn-arrow"
        />
      </button>

      <ul className="admin-nav-bar">
        <li className="nav-bar-list">
          <NavLink to="/admin-dashboard/" activeClassName=" admin-current-link" className="admin-link-list" >
            <img src="/images/fruit.svg" alt="plan" className="link-img" />
            Produce Management
          </NavLink>
        </li>
        <li className="nav-bar-list">
          <NavLink to="/admin-dashboard/user-management" activeClassName=" admin-current-link" className="admin-link-list " >
            <img
              src="/images/user-mgt.svg"
              alt="user management"
              className="link-img"
            />
            <div className="user-img">
              <div className="user-head"></div>
              <div className="user-body"></div>
            </div>
            User Management
          </NavLink>
        </li>
        <li className="nav-bar-list">
          <Link to="" className="admin-link-list">
            <img src="/images/logout.svg" alt="log out" className="link-img" />
            Log Out
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
