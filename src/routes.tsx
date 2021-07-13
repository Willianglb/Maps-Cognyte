import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Context from "./helpers/Store/Context";

import Home from "./pages/Home/Home";
import NewHouse from "./pages/NewHouse/NewHouse";

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Context>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/new" component={NewHouse} />
        </Switch>
      </Context>
    </BrowserRouter>
  );
}

export default Routes;
