import React, { Component } from "react";

export class User extends Component {
  render() {
    const { login, id, avatar_url, html_url, type } = this.props.user;
    return (
      <div className="card col-md-3 m-10">
        <img className="card-img-top " src={avatar_url} alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">{login}</h5>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">ID: {id}</li>
          <li className="list-group-item">Type: {type}</li>
        </ul>
        <div className="card-body">
          <a href={html_url} className="card-link btn btn-primary">
            Go Profile
          </a>
        </div>
      </div>
    );
  }
}

export default User;
