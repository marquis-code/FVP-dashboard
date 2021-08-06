import React, { useState } from "react";
import { AuthContext } from "./Context/Auth-context";

function Authentication(props) {
  const existingTokens = () => {
    return localStorage.getItem("tokens");
  };

  const prevAuth = existingTokens();
  const [authTokens, setAuthTokens] = useState(prevAuth);
  
  return (
    <AuthContext.Provider value={{ authTokens, setAuthTokens }}>
      {props.children}
    </AuthContext.Provider>
  );
}

export default Authentication;
