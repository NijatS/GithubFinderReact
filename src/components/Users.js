import React, { Component } from "react";
import User from "./User";
import Loader from "./Loader";

export class Users extends Component {
  render() {
    if (this.props.loader) {
      return <Loader />;
    } else {
      return (
        <div className=" d-flex flex-wrap">
          {this.props.users.map((user) => (
            <User user={user} />
          ))}
        </div>
      );
    }
  }
}

export default Users;
