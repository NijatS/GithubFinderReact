import React from "react";

const Repo = (repo) => {
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center col-sm-4">
      <div>
        <a href={repo.repo.svn_url} className="fw-bold">
          {repo.repo.full_name}
        </a>
        <div className="text-muted">Watchers: {repo.repo.watchers_count}</div>
      </div>
      <span className="badge rounded-pill badge-success">
        {repo.repo.visibility}
      </span>
    </li>
  );
};

export default Repo;
