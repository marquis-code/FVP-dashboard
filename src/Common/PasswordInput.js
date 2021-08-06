import React, { useState } from "react";

function PasswordInput(props) {
  const [showEye, setShowEye] = useState(false);
  const toggleEye = () => {
    setShowEye(!showEye);
  };
  return (
    <div className="flex">
      <input
        type={showEye ? "text" : "password"}
        name={props.name}
        placeholder={props.placeholder}
        className={props.class}
        id={props.id}
        checked={props.checked}
        onChange={(e) => props.onChange(e)}
        required="require"
        disabled={props.disabled}
        value={props.value}
      />
      <img
        src={showEye ? "/images/eye.svg" : "/images/eye-off.svg"}
        alt="logo"
        className="plan-img user-svg the-eye opacity-50 hover:opacity-100 cursor-pointer"
        data-test="button-icon"
        onClick={toggleEye}
      />
    </div>
  );
}

export default PasswordInput;
