import React from "react";

function WalletIconItem(props) {
  return (
    <div
      style={{ cursor: "pointer" }}
      className={props.iconStyle}
      onClick={props.click}
    >
      <img src={props.icon} alt="icon" />
      <p>{props.name}</p>
    </div>
  );
}
export default WalletIconItem;