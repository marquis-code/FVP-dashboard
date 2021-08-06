import React from "react";
import {Link} from "react-router-dom"
import Form from "./product-description-form";
import Nav from "../../Common/Add-new-product-navbar";

function ProductDescription() {
  return (
    <main>
      <div class="admin-grid">
        <a href="index.html" class="manage-products-btn">
          <img
            src="/images/left-chevron.svg"
            alt="return to"
            class="manage-products-image"
          />
          Manage Produce
        </a>
        <div class="admin-grid-text">Add New Produce</div>
        <Nav />
        <label for="description" class="Product-intro-text">
          Product Description
        </label>
        <Form />
        <Link to="/admin-dashboard/product-details" class="gen-next add-btn">
          Next
        </Link>
      </div>
    </main>
  );
}
export default ProductDescription;
