import React from "react";
import { NavLink } from "react-router-dom";

function NewProductNav() {
  return (
    <div className="admin-menu-bar">
      <ul className="admin-menu-bar-lists">
        <NavLink to="/admin-dashboard/general-information" 
       activeClassName="admin-current-menu" className="admin-menu-bar-list ">
          <li  className="menu-bar-link">
            General Info
          </li>
        </NavLink>
        <NavLink to="/admin-dashboard/product-description" activeClassName="admin-current-menu" className="admin-menu-bar-list">
          <li  className="menu-bar-link">
            Product Description
          </li>
        </NavLink>
        <NavLink to="/admin-dashboard/product-details" activeClassName="admin-current-menu" className="admin-menu-bar-list">
          <li  className="menu-bar-link">
            Product Detail
          </li>
        </NavLink>
        <NavLink to="/admin-dashboard/product-demand" activeClassName="admin-current-menu" className="admin-menu-bar-list">
          <li  className="menu-bar-link">
            Product Demand
          </li>
        </NavLink>
      </ul>
    </div>
  );
}
export default NewProductNav;
