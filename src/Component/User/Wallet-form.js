import React from "react";
import Backdrop from "../../Common/Backdrop";

function WalletForm(props) {
  return (
    <>
      <div className="wallet_container_secondary">
        <div className="j-btn">
          <button className="nav-tol" type="button" onClick={props.click}>
            <img src="/images/back-arrow.svg" className="close-modal" alt="close"/>
          </button>
          <p>Go back</p>
        </div>
        <button className="return-btn" onClick={props.click}>
          <img src="/images/back.svg" alt="back" />
        </button>
        {props.children}
      </div>
      <Backdrop click={props.click} />
    </>
  );
}

export default WalletForm;
