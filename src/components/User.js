import React, { Component } from "react";

export class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: "NijatS",
      id: 125345265,
      avatar_url: "https://avatars.githubusercontent.com/u/125345265?v=4",
      html_url: "https://github.com/NijatS",
      name: "Nijat Soltanov",
      followers: 4,
    };
  }
  render() {
    const { login, id, avatar_url, html_url, name, followers } = this.state;
    return (
      <div className="card">
        <img className="card-img-top" src={avatar_url} alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">UserName: {login}</li>
          <li className="list-group-item">ID: {id}</li>
          <li className="list-group-item">Followers: {followers}</li>
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
