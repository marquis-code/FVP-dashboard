import React from "react";

function TransactionItem(props) {
  let time = props.time;
  function formateDate(time) {
    return new Date(time).toLocaleString();
  }
  formateDate(time); //“10/07/2020, 14:08:36"
  const newTime = formateDate(time);
  var number = Math.abs(props.money);
  const money = new Intl.NumberFormat().format(number);
  return (
    <div className="transaction-item">
      <div className="candleT">
        <div className="credit-item">
          <div
            className="somenew"
            style={{ width: "16px", marginRight: "20px" }}
          >
            <img src={props.candle} alt="candle" />
          </div>
          <div className="trans_type" style={{ width: "86%" }}>
            <p style={{margin:"0"}}>{props.name}</p>
          </div>
        </div>
        <div className="candle">
          <span className="time">{newTime}</span>
        </div>
      </div>
      <div className="candles">
        <p className={props.tclass}>
          <span className="nira"> &#8358;</span>
          {money}
        </p>
      </div>
    </div>
  );
}

export default TransactionItem;
