import React, { useState, useEffect } from "react";
import url from "./Common/get-url";
import { useAuth } from "./Context/Auth-context";

const HelpersContext = React.createContext();

function ContextProvider(props) {
  const [walletBalance, setWalletBalance] = useState("");

  const { authTokens } = useAuth();
  useEffect(() => {
    fetch(url(`transactions/net`, "?currency=1"), {
      method: "GET",
      headers: {
        Authorization: `Token ${authTokens}`,
      },
    }).then((res) => {
      res.json().then(function (data) {
        setWalletBalance(data);
      });
    });
  }, [authTokens]);


  return (
    <HelpersContext.Provider
      value={{
        walletBalance,
      }}
    >
      {props.children}
    </HelpersContext.Provider>
  );
}

export { ContextProvider, HelpersContext};
