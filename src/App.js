import React, { Component } from "react";
import Dashboard from "../src/pages/dashboard/dashboard";
import DetailView from "../src/pages/detailview/detailview";
import Search from "../src/components/search/search";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Jumbotron } from "reactstrap";

import "./App.css";

class App extends Component {
  render() {
    return (
      <Jumbotron>
        <Dashboard />
        <div>
          <BrowserRouter>
            <div>
              <Switch>
                <Route path='/' component={Search} exact />
                <Route path='/details' component={DetailView} />
              </Switch>
            </div>
          </BrowserRouter>
        </div>
      </Jumbotron>
    );
  }
}

export default App;
