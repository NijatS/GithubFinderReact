import React, { Component } from "react";
import Navbar from "./Navbar";
import Users from "./Users";
import axios from "axios";

export class App extends Component {
  constructor(props) {
    super(props);
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
  render() {
    return (
      <>
        <Navbar />
        <Users users={this.state.users} loader={this.state.loader} />
      </>
    );
  }
}

export default App;
