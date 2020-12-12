import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from "./Pages/Home/Home";

export default function AppRouter() {
  return (
    <Router>
      <Switch>
        <Route path="/about">
          <Home />
        </Route>
        <Route path="/users">
          <Home />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  )
}