import React from "react";
import { Redirect } from "react-router-dom";
import { useAuth } from "./Context/Auth-context";
import Page from "./Common/Page"

function AuthCheck({ component: Component, ...rest }) {
  const { authTokens } = useAuth();
  //  Add this line for the public routes
  //  || {authTokens: ''};

  return (
    <Page
      {...rest}
      render={(props) =>
        !authTokens ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/dashboard",
              state: {from: props.location}
            }}
          />
        )
      }
    />
  );
}

export default AuthCheck;
