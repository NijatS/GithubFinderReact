import React, { Component } from "react";

class UserDetail extends Component {
  componentDidMount() {
    this.props.getUser(this.props.match.params.login);
  }
  render() {
    return <div>User Detail</div>;
  }
}

export default UserDetail;
