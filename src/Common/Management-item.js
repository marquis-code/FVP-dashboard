import React from "react";
import TdItem from "./Td-Item";

function ManagementItem(props) {
  return (
    <tr className="management-details td-block admin-tr">
      <TdItem class={props.producelist1} />
      <TdItem list={props.producelist2} />
      <TdItem list={props.producelist3} />
      <TdItem list={props.producelist4} />
      <TdItem list={props.producelist5} />
      <TdItem list={props.producelist6} />

      <td>
        <button className={props.btnClass}>{props.status}</button>
      </td>
    </tr>
  );
}

export default ManagementItem;
