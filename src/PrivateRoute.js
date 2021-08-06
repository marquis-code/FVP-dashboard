import React from "react";
import { Redirect } from "react-router-dom";
import { useAuth } from "./Context/Auth-context";
import Page from "./Common/Page";

function PrivateRoute({ component: Component, ...rest }) {
  const { authTokens } = useAuth();
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
