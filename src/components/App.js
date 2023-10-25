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
  const [loader, setLoader] = useState(false);
  const [alert, setAlert] = useState(null);
  const [repos, setRepos] = useState([]);

  const getUserRepos = (username) => {
    setLoader(true);
    setTimeout(() => {
      axios
        .get(`https://api.github.com/users/${username}/repos`)
        .then((res) => {
          setRepos(res.data);
          setLoader(false);
        });
    }, 1000);
  };
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
          <Route
            path="/users/:login"
            render={(props) => (
              <UserDetail
                {...props}
                repos={repos}
                getUserRepos={getUserRepos}
              />
            )}
          />
        </Switch>
      </BrowserRouter>
    </GithubState>
  );
};

export default App;
