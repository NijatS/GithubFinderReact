import React, { useEffect, useContext } from "react";
import Loader from "./Loader";
import Repos from "./Repos";
import GithubContext from "../context/github/GithubContext";

const UserDetail = ({ match }) => {
  const { getUser, getUserRepos, user, loader } = useContext(GithubContext);

  useEffect(() => {
    getUser(match.params.login);
    getUserRepos(match.params.login);
  }, []);
  const { name, avatar_url, location, followers, following, public_repos } =
    user;
  if (loader) {
    return <Loader />;
  } else {
    return (
      <section className="profile">
        <header className="header">
          <div className="details">
            <img src={avatar_url} alt={name} className="profile-pic" />
            <h1 className="heading">{name}</h1>
            <div className="location">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5M12,2A7,7 0 0,0 5,9C5,14.25 12,22 12,22C12,22 19,14.25 19,9A7,7 0 0,0 12 ,2Z"></path>
              </svg>
              <p>{location}</p>
            </div>
            <div className="stats">
              <div className="col-4">
                <h4>{followers}</h4>
                <p>Followers</p>
              </div>
              <div className="col-4">
                <h4>{following}</h4>
                <p>Following</p>
              </div>
              <div className="col-4">
                <h4>{public_repos}</h4>
                <p>Repositories</p>
              </div>
            </div>
          </div>
        </header>
        <Repos />
      </section>
    );
  }
};

export default UserDetail;
