import React from "react";

function Errormsg(props) {
  return (
    <div
      className={props.stylecss}
      style={{ color: "#FF2323", fontSize: "12px", position: "relative", display:"flex", fontWeight:"500", marginBottom:"4px" }}
    >
      {props.errorText}
    </div>
  );
}

export default Errormsg;
