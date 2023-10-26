import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./Navbar";
import Users from "./Users";
import Search from "./Search";
import Alert from "./Alert";
import About from "./About";
import axios from "axios";
import UserDetail from "./UserDetail";
import Loader from "./Loader";
import GithubState from "../context/GithubState";

const App = () => {
  const [alert, setAlert] = useState(null);
  const showAlert = (msg, type) => {
    setAlert({ msg, type });
  };
  const clearAlert = () => {
    this.setState({ alert: null });
    setAlert(null);
  };

  return (
    <GithubState>
      <BrowserRouter>
        <Navbar />
        <Alert alert={alert} clearAlert={clearAlert} />
        <Switch>
          <Route
            path="/"
            exact
            render={() => (
              <>
                <Search setAlert={showAlert} />
                <Users />
              </>
            )}
          />
          <Route path="/about" component={About} />
          <Route path="/users/:login" component={UserDetail} />
        </Switch>
      </BrowserRouter>
    </GithubState>
  );
};

export default App;
