import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";

import experience from "./experience";

class routes extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/Experience" component={experience} />
        </Switch>
      </Router>
    );
  }
}

export default routes;
