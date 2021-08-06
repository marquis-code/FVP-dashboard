import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";

import UserDashboard from "./Container/User/Dashboard";
import Register from "./Component/Authentication/register";
import Login from "./Component/Authentication/login";
import Invalidpath from "./404.js";
import Emailverification from "./Component/Emailverification";
import Authentication from "./Authentication";
import PrivateRoute from "./PrivateRoute";
import Middleware from "./middleware";
import AuthCheck from "./AuthCheck";
import HomeRedirect from "./HomeRedirect";
import Home from "./home";
import AuthChecker from "./AuthChecker";
import ResetLink from "./Component/Authentication/Reset-link";
import PasswordReset from "./Component/Authentication/Reset-password";
import VerifiedEmail from "./Component/Authentication/verifiedEmail";
import { ContextProvider } from "./helpers";

function Routes() {
  return (
    <>
      <Authentication>
        <ContextProvider>
          <Router>
            <Switch>
              <HomeRedirect exact path="/" component={Home} />
              <AuthCheck
                path="/register"
                component={Register}
                title="register"
              />
              {/* <AuthCheck
                path="/register"
                component={Register}
                title="register"
              /> */}
              <AuthCheck exact path="/login" component={Login} title="login" />
              <AuthCheck
                exact
                path="/forgot-password"
                component={ResetLink}
                title="forgot-password"
              />

              <AuthChecker
                path="/verify-email/:UserId/:Token"
                component={VerifiedEmail}
                title="verified-email"
              />
              <AuthCheck
                path="/password-reset/:userId/:token"
                component={PasswordReset}
                title="reset-password"
              />
              <PrivateRoute
                path="/dashboard"
                component={UserDashboard}
                title="dashboard"
              />
              
              {/* <PrivateRoute path="/password-reset" component={PasswordReset} /> */}
              <AuthChecker
                path="/email-verification"
                component={Emailverification}
                title="email-verification"
              />
              <Middleware component={Invalidpath} />
            </Switch>
          </Router>
        </ContextProvider>
      </Authentication>
    </>
  );
}

export default Routes;
