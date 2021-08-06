import React from "react";
import { Link } from "react-router-dom";
import Nav from "../../Common/Add-new-product-navbar";
import Form from "./General-information-form";

function GeneralInformation() {
  return (
    <main>
      <div className="admin-grid">
        <Link to="/dashboard/" className="manage-products-btn">
          <img
            src="/images/left-chevron.svg"
            alt="return to"
            className="manage-products-image"
          />
          Manage Produce
        </Link>
        <div className="admin-grid-text">Add New Produce</div>

        <Nav />
        <label for="general-info" className="Product-intro-text">
          General Info
        </label>

        <Form />

        <input type="file" className="gen-info-img" />

        <Link to="/dashboard/product-description" className="gen-next add-btn">
          Next
        </Link>
      </div>
    </main>
  );
}

export default GeneralInformation;
