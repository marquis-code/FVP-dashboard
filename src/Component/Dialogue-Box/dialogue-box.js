import React from "react";
import Backdrop from "../../Common/Backdrop"

function Dialoguebox(props) {
  return (
    <div className="dialog_container" style={props.style}>
		<Backdrop/>
      <div className="dialog-box" id={props.id} >
        <div>{props.children}</div>
      </div>
    </div>
  );
}

export default Dialoguebox;
