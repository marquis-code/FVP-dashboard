import React from "react";

function AuthCard(props) {
  return (
    <>
      <div className="container">
        <center>
          <div className="card box" id={props.cardname}>
            <div className="card-body border">{props.children}</div>
          </div>
        </center>
      </div>
      <div className="background-illustration">
        <img
          src="/images/login-in-illustration.svg"
          alt="logo"
          className="farm-illustration"
        />
      </div>
    </>
  );
}

export default AuthCard;
