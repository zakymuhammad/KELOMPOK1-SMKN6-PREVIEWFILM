// import React from "react";

// import { Route, Switch } from "react-router-dom";

// import Home from "../pages/Home";
// import Detail from "../pages/Detail";
// import Catalog from "../pages/Catalog";

// const Routes = () => {
//   return (
//     <Switch>
//       <Route path="/:category/search/:keyword" component={Catalog} />

//       <Route path="/:category/:id" component={Detail} />

//       <Route path="/:category" component={Catalog} />

//       <Route path="/" exact component={Home} />
//     </Switch>
//   );
// };

// export default Routes;

import React from "react";

import { Route, Switch } from "react-router-dom";

import Home from "../pages/Home";
import Catalog from "../pages/Catalog";
import Detail from "../pages/detail/Detail";
import Singin from "../components/login/Signin";
import Singup from "../components/login/Signup";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Singin} />
      <Route path="/signup" component={Singup} />
      <Route path="/home" component={Home} />
      <Route path="/:category" component={Catalog} />
      <Route path="/:category/:id" component={Detail} />
      <Route path="/:category/search/:keyword" component={Catalog} />
    </Switch>
  );
};

export default Routes;
