import React from "react";
import UserHeading from "./User-heading"


const VerificationStatus = (prop) => {
  return (
    <>
      <div className="grid bank-form-success">
        <UserHeading title="Apply for capital" />
        <div className="status-card">
          <img src={prop.icon} alt="leaf" className="leaf" />
          <h2 style={{color: prop.styl}}>{prop.title}</h2>
          {/* <p>
              {prop.description}
          </p> */}
          {/* <button className="bank-form-btn" onClick={prop.on_Click}>{prop.button}</button> */}
        </div>
      </div>
    </>
  );
};

export default VerificationStatus;

