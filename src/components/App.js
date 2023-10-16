import React, { Component } from "react";
import { BrowserRouter, Route, Switch, NavLink } from "react-router-dom";
import Navbar from "./Navbar";
import Users from "./Users";
import Search from "./Search";
import Alert from "./Alert";
import About from "./About";
import axios from "axios";
import UserDetail from "./UserDetail";
import Loader from "./Loader";

export class App extends Component {
  constructor(props) {
    super(props);
    this.searchUsers = this.searchUsers.bind(this);
    this.clearItems = this.clearItems.bind(this);
    this.setAlert = this.setAlert.bind(this);
    this.clearAlert = this.clearAlert.bind(this);
    this.getUser = this.getUser.bind(this);
    this.state = {
      users: [],
      loader: false,
      alert: null,
      user: {},
    };
  }
  componentDidMount() {
    this.setState({ loader: true });
    axios
      .get("https://api.github.com/users")
      .then((res) => this.setState({ users: res.data, loader: false }));
  }
  clearItems() {
    this.setState({ users: [] });
  }
  getUser(username) {
    this.setState({ loader: true });
    axios
      .get(`https://api.github.com/users/${username}`)
      .then((res) => this.setState({ user: res.data, loader: false }));
  }
  searchUsers(keyword) {
    this.setState({ loader: true });
    axios
      .get(`https://api.github.com/search/users?q=${keyword}`)
      .then((res) => this.setState({ users: res.data.items, loader: false }));
  }
  setAlert(msg, type) {
    this.setState({ alert: { msg, type } });
  }
  clearAlert() {
    this.setState({ alert: null });
  }
  render() {
    return (
      <BrowserRouter>
        <Navbar />
        <Alert alert={this.state.alert} clearAlert={this.clearAlert} />
        <Switch>
          <Route
            path="/"
            exact
            render={(props) => (
              <>
                <Search
                  searchUsers={this.searchUsers}
                  clearItems={this.clearItems}
                  showClearBtn={this.state.users.length > 0 ? true : false}
                  setAlert={this.setAlert}
                />
                <Users users={this.state.users} loader={this.state.loader} />
              </>
            )}
          />
          <Route path="/about" component={About} />
          <Route
            path="/users/:login"
            render={(props) => (
              <UserDetail
                {...props}
                getUser={this.getUser}
                user={this.state.user}
                loader={this.state.loader}
              />
            )}
          />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
