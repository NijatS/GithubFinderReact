import React, { Component } from "react";
import User from "./User";
import Loader from "./Loader";

export class Users extends Component {
  render() {
    if (this.props.loader) {
      return <Loader />;
    } else {
      return (
        <div className="container">
          <div className="d-flex flex-wrap justify-content-center">
            {this.props.users.map((user) => (
              <User user={user} key={user.id} />
            ))}
          </div>
        </div>
      );
    }
  }
}

export default Users;
