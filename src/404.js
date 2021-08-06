import React from "react";
import Logo from "./Common/Logo.js"

function Invalidpath() {
  return (
    <>
    <Logo />
    <center>
   			 <div className="error-header">
   			 	
			    <img src="/images/PAGE-NOT-FOUND.svg" alt="page-not-found" />
          <h3>ERROR 404</h3>
          <br />
   			 	<p>PAGE NOT FOUND</p>
   			 </div>
    </center>
    </>
  );
}

export default Invalidpath;