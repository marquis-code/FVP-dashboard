import React from "react";

function Backdrop(props) {
  return <div className="backdrop" onClick={props.click}></div>;
}

export default Backdrop;
