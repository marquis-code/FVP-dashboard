import React from "react";

function TdItem(props) {
  return <td className={props.class}>{props.list}</td>;
}

export default TdItem;
