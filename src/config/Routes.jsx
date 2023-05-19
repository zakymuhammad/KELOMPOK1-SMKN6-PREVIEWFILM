import React from "react";

import { Route, Switch } from "react-router-dom";

import Home from "../pages/Home";
import Catalog from "../pages/Catalog";
import Signin from "../components/login/Signin";
import Signup from "../components/login/Signup";
import Detail from "../pages/detail/Detail";

const Routes = () => {
  return (
    <Switch>
      <Route path="/signup" component={Signup} />
      <Route path="/home" component={Home} />
      <Route path="/:category/search/:keyword" component={Catalog} />
      <Route path="/:category/:id" component={Detail} />
      <Route path="/:category" component={Catalog} />
      <Route path="/" exact component={Signin} />
    </Switch>
  );
};

export default Routes;
