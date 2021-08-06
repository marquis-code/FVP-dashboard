import React from "react";

function Notransactions() {
  return (
    <div className=" noTransactionHolder">
      <img src="/images/no-recent-transaction.svg" alt="" />
      <p style={{ color: "#979494", marginTop: "2rem" }}>
        No recent Transactions
      </p>
    </div>
  );
}
export default Notransactions;
