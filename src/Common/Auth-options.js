import React from "react";
import {Link} from "react-router-dom"

function AuthOption(props) {
  return (
    <>
      <Link to={props.link} className="card subbox" style={{zIndex:"2"}}>
        <img src={props.image} alt="icon"/>{" "}
        <span className="Auth-Icon-Text">{props.text}</span>
      </Link>
    </>
  );
}

export default AuthOption;
