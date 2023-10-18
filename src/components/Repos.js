import React from "react";
import Repo from "./Repo";
const Repos = ({ repos }) => {
  return (
    <>
      <h1>Repositories</h1>
      <div className="list-group list-group-flush col-sm-12 d-flex flex-row flex-wrap">
        {repos.map((repo) => (
          <Repo repo={repo} key={repo.id} />
        ))}
      </div>
    </>
  );
};

export default Repos;
/*
    
   
    */
