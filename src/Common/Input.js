import React from "react";

function Input(props) {
  return (
    <input
      type={props.type}
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
  );
}

export default Input;
