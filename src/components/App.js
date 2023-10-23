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
  const [users, setUsers] = useState([]);
  const [loader, setLoader] = useState(false);
  const [user, setUser] = useState({});
  const [alert, setAlert] = useState(null);
  const [repos, setRepos] = useState([]);

  const clearItems = () => {
    setUsers([]);
  };

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
  const getUser = (username) => {
    setLoader(true);
    setTimeout(() => {
      axios.get(`https://api.github.com/users/${username}`).then((res) => {
        setUser(res.data);
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
            render={(props) => (
              <>
                <Search
                  clearItems={clearItems}
                  showClearBtn={users.length > 0 ? true : false}
                  setAlert={showAlert}
                />
                <Users users={users} loader={loader} />
              </>
            )}
          />
          <Route path="/about" component={About} />
          <Route
            path="/users/:login"
            render={(props) => (
              <UserDetail
                {...props}
                getUser={getUser}
                user={user}
                repos={repos}
                loader={loader}
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
