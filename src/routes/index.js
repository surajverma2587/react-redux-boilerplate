import React from "react";
import { Route, Switch } from "react-router";

import Route1 from "../containers/Route1";
import Route2 from "../containers/Route2";
import NoMatch from "../components/NoMatch";

const routes = (
  <div>
    <Switch>
      <Route exact path="/" component={Route1} />
      <Route path="/route1" component={Route1} />
      <Route path="/route2" component={Route2} />
      <Route component={NoMatch} />
    </Switch>
  </div>
);

export default routes;
