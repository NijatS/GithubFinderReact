import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./Navbar";
import Alert from "./Alert";
import About from "./About";
import UserDetail from "./UserDetail";
import GithubState from "../context/github/GithubState";
import AlertState from "../context/alert/AlertState";
import Home from "./Home";
import NotFound from "./NotFound";

const App = () => {
  return (
    <GithubState>
      <AlertState>
        <BrowserRouter>
          <Navbar />
          <Alert />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/users/:login" component={UserDetail} />
            <Route component={NotFound} />
          </Switch>
        </BrowserRouter>
      </AlertState>
    </GithubState>
  );
};

export default App;
