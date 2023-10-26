import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./Navbar";
import Users from "./Users";
import Search from "./Search";
import Alert from "./Alert";
import About from "./About";
import UserDetail from "./UserDetail";
import GithubState from "../context/github/GithubState";
import AlertState from "../context/alert/AlertState";

const App = () => {
  return (
    <GithubState>
      <AlertState>
        <BrowserRouter>
          <Navbar />
          <Alert />
          <Switch>
            <Route
              path="/"
              exact
              render={() => (
                <>
                  <Search />
                  <Users />
                </>
              )}
            />
            <Route path="/about" component={About} />
            <Route path="/users/:login" component={UserDetail} />
          </Switch>
        </BrowserRouter>
      </AlertState>
    </GithubState>
  );
};

export default App;
