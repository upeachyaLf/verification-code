import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import './App.css';
import routes from './constants/routes';
import Success from './components/success/success';
import Verification from './components/verification/verification';

const App = () => (
  <Router>
    <Switch>
      <Route path = {routes.HOME} exact>
        <Verification/>
      </Route>
      <Route path = {routes.SUCCESS} exact>
        <Success/>
      </Route>
    </Switch>
  </Router>
);

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

export default App;
