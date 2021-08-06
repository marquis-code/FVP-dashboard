import React from "react";
import { Redirect } from "react-router-dom";
import Page from "./Common/Page";

function PrivateRoute({ component: Component, ...rest }) {
const authTokens = localStorage.getItem("tokens")
  //  Add this line for the public routes
  //  || {authTokens: ''};

  return (
    <Page
      {...rest}
      render={(props) =>
        authTokens ? (
          <Component {...props} authTokens={authTokens} />
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: props.location },
            }}
          />
        )
      }
    />
  );
}

export default PrivateRoute;