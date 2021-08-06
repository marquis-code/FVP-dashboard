import React from "react";
import TdItem from "./Td-Item";

function ProduceListItem(props) {
  return (
    <tr className="admin-tr td-block">
      <TdItem list={props.producelist1} />
      <TdItem list={props.producelist2} />
      <TdItem list={props.producelist3} />
      <TdItem list={props.producelist4} />
      <TdItem list={props.producelist5} />
      <TdItem list={props.producelist6} />
      <TdItem list={props.producelist7} />
      <TdItem list={props.producelist8} />
      <TdItem list={props.producelist9} />
      <TdItem list={props.producelist10} />
      <td>
        <button className="edit">Edit</button>
        <button className="delete">Delete</button>
      </td>
    </tr>
  );
}

export default ProduceListItem;
