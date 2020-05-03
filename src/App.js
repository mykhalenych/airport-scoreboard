import React from "react";
import Main from "./components/Main";
import { Route } from "react-router-dom";
import Header from "./components/Header";
import { BrowserRouter, Switch } from "react-router-dom";

const App = () => {
  return (
    <div className="wrap">
    <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/:direction?/:flight?">
            <Main  />
          </Route>
        </Switch>
    </BrowserRouter>
      </div>
  );
};

export default App
