import React from "react";
import UserNav from "../../Common/User-nav";
import { Route, Switch } from "react-router-dom";

import Getstarted from "../../Component/User/Get-started";
import Details from "../../Component/User/Details";
import Capital from "../../Component/User/Capital";
// import Joyride from "../../Common/Joyride";
import NotFound from "../../notfound";
import Header from "../../Common/Header";
import FarmPlan from "../../Component/User/FarmingPlan";
import DashboardHome from "../../Component/User/Dashboard-home";
import ApplyForCapital from "../../Component/User/Apply-for-capital";
import Wallet from "../../Component/User/wallet";
import Settings from "../../Component/Profile-settings";
// import BvnForm from "../../Component/User/bvn";
// import Bank from "../../Component/User/bank";

function Dashboard() {
  return (
    <>
      <UserNav />
      <Header />
      <Switch>
        <Route exact={true} path="/dashboard/" component={DashboardHome} />
        <Route exact={true} path="/dashboard/" component={Getstarted} />
        <Route path="/dashboard/details/:detailsId" component={Details} />
        <Route path="/dashboard/capital/plans" component={Capital} />
        <Route path="/dashboard/planning" component={Getstarted} />
        <Route path="/dashboard/wallet" component={Wallet} />
        <Route path="/dashboard/settings" component={Settings} />
        {/* <Route path="/dashboard/insurance/bank" component={Bank} /> */}
        {/* <Route path="/dashboard/bvn" component={BvnForm} /> */}
        <Route path="/dashboard/farm-plan/:detailsId" component={FarmPlan} />
        <Route
          path="/dashboard/capital/apply/:capitalId"
          component={ApplyForCapital}
        />
        <Route component={NotFound} />
      </Switch>
    </>
  );
}

export default Dashboard;
