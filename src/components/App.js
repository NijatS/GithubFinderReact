import React, { Component } from "react";
import Navbar from "./Navbar";
import Users from "./Users";
import Search from "./Search";
import axios from "axios";

export class App extends Component {
  constructor(props) {
    super(props);
    this.searchUsers = this.searchUsers.bind(this);
    this.clearItems = this.clearItems.bind(this);
    this.state = {
      users: [],
      loader: false,
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
  searchUsers(keyword) {
    this.setState({ loader: true });
    axios
      .get(`https://api.github.com/search/users?q=${keyword}`)
      .then((res) => this.setState({ users: res.data.items, loader: false }));
  }
  render() {
    return (
      <>
        <Navbar />
        <Search
          searchUsers={this.searchUsers}
          clearItems={this.clearItems}
          showClearBtn={this.state.users.length > 0 ? true : false}
        />
        <Users users={this.state.users} loader={this.state.loader} />
      </>
    );
  }
}

export default App;
