import React, { Component, useContext } from "react";
import User from "./User";
import Loader from "./Loader";
import GithubContext from "../context/GithubContext";

const Users = () => {
  const githubContext = useContext(GithubContext);
  const { users, loader } = githubContext;
  if (loader) {
    return <Loader />;
  } else {
    return (
      <div className="container">
        <div className="d-flex flex-wrap justify-content-center">
          {users.map((user) => (
            <User user={user} key={user.id} />
          ))}
        </div>
      </div>
    );
  }
};

export default Users;
