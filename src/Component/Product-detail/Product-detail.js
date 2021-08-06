import React from "react";
import {Link} from "react-router-dom"
import ProductDetailsForm from "./Product-details-form";
import Nav from "../../Common/Add-new-product-navbar";

function ProductDetails() {
  return (
    <main>
      <div class="admin-grid">
        <Link to="index.html" class="manage-products-btn">
          <img
            src="/images/left-chevron.svg"
            alt="return to"
            class="manage-products-image"
          />
          Manage Produce
        </Link>
        <div class="grid-text">Add New Produce</div>

        <Nav />

        <label for="description" class="Product-intro-text">
          Product Details
        </label>
        <ProductDetailsForm />

        <Link to="#" class="gen-next add-btn">
          Next
        </Link>
      </div>
    </main>
  );
}

export default ProductDetails;
