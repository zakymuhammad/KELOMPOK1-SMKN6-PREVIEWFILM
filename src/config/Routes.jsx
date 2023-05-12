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

// import Signin from "../components/login/Signin";
import Home from "../pages/Home";
import Catalog from "../pages/Catalog";
import Detail from "../pages/detail/Detail";

// import Header from "../components/header/Header";
// import Footer from "../components/footer/Footer";

const Routes = () => {
  return (
    <Switch>
      <Route path="/:category/search/:keyword" component={Catalog} />
      <Route path="/:category/:id" component={Detail} />
      <Route path="/:category" component={Catalog} />
      <Route path="/" exact component={Home} />
    </Switch>
  );
};

export default Routes;
