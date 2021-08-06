import React from "react";
import { Redirect,Route } from "react-router-dom";
import { useAuth } from "./Context/Auth-context";

function Middleware({ component: Component, ...rest }) {
  const { authTokens } = useAuth();
  //  Add this line for the public routes
  //  || {authTokens: ''};

  return (
    <Route
      {...rest}
      render={(props) =>
        authTokens ? (
            <Redirect
            to={{
              pathname: "/dashboard",
            }}
          />
          
        ) : (
            <Redirect
            to={{
              pathname: "/login",
            }}
          />
        )
      }
    />
  );
}

export default Middleware;
