import React, { useEffect, useState } from "react";
import TransactionItem from "../../Common/transaction-item";
import { useAuth } from "../../Context/Auth-context";
import url from "../../Common/get-url";
import TransactionItemDummy from "../../Common/TransactionItemDUmmy";
import Notransactions from "../../Common/NoTransaction";

const Trasnsactions = ({ setLoading }) => {
  const { authTokens, setAuthTokens } = useAuth();
  // const allTransactions = [
  //   {
  //     id: 1,
  //     transaction_type: "Deposit",
  //     total: "900",
  //     time: "12/11/2020",
  //   },
  //   {
  //     id: 2,
  //     transaction_type: "Withdrawal",
  //     total: "3000",
  //     time: "12/11/2020",
  //   },
  //   {
  //     id: 3,
  //     transaction_type: "Deposit",
  //     total: "400",
  //     time: "12/11/2020",
  //   },
  //   {
  //     id: 4,
  //     transaction_type: "Sent",
  //     total: "700",
  //     time: "12/11/2020",
  //   },
  //   {
  //     id: 5,
  //     transaction_type: "Deposit",
  //     total: "2000",
  //     time: "12/11/2020",
  //   },
  //   {
  //     id: 6,
  //     transaction_type: "Received",
  //     total: "1000",
  //     time: "12/11/2020",
  //   },
  //   {
  //     id: 7,
  //     transaction_type: "Deposit",
  //     total: "800",
  //     time: "12/11/2020",
  //   },
  // ];

  const [allTransactions, setAllTransactions] = useState([]);
  const [status, setStatus] = useState(false);
  const [noTransactions, setNotransactions] = useState(false);
  const [isLoading, setIsloading] = useState(true);
  useEffect(() => {
    fetch(url(`transactions`), {
      method: "GET",
      headers: {
        Authorization: `Token ${authTokens}`,
      },
    }).then((res) => {
      if (res.status === 401) {
        setAuthTokens(localStorage.removeItem("tokens"));
      } else if (res.status === 200) {
        setStatus(true);
        setLoading(false);
      }

      res.json().then(function (data) {
        setAllTransactions(data);
      });
    });
  }, [authTokens, setAuthTokens, setLoading]);

  useEffect(() => {
    if (status) {
      if (allTransactions.length > 0) {
        setIsloading(false);

        setNotransactions(false);
      } else if (allTransactions.length === 0) {
        setIsloading(false);

        setNotransactions(true);
      }
    }
  }, [allTransactions, status]);

  return (
    <>
      <div className="transactions">
        <h3>Transaction History</h3>

        {isLoading ? (
          <TransactionItemDummy />
        ) : (
          <>
            {noTransactions ? (
              <Notransactions />
            ) : (
              <div className="transaction-list">
                {allTransactions.map((item, index) => {
                  return (
                    <TransactionItem
                      key={`property-${index}`}
                      name={item.transaction_type}
                      money={Math.abs(item.total)}
                      time={item.time}
                      tclass={
                        item.transaction_type.toLowerCase() === "deposit" ||
                        item.transaction_type.toLowerCase() === "received"
                          ? "green"
                          : "red"
                      }
                      candle={
                        item.transaction_type.toLowerCase() === "deposit" ||
                        item.transaction_type.toLowerCase() === "received"
                          ? "/images/credit.svg"
                          : "/images/debit.svg"
                      }
                    />
                  );
                })}
              </div>
            )}{" "}
          </>
        )}
      </div>
    </>
  );
};

export default Trasnsactions;
