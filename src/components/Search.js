import React, { useContext, useState } from "react";
import GithubContext from "../context/github/GithubContext";
import AlertContext from "../context/alert/AlertContext";

const Search = () => {
  const [keyword, setKeyword] = useState("");
  const { searchUsers, clearItems, users } = useContext(GithubContext);
  const { setAlert } = useContext(AlertContext);
  const SearchUser = (e) => {
    setKeyword(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if (keyword === "") {
      setAlert("Please add text to search input", "danger");
    } else {
      searchUsers(keyword);
      setKeyword("");
    }
  };
  return (
    <div className="container my-3 search">
      <form onSubmit={onSubmit}>
        <div className="input-group">
          <input
            type="search"
            value={keyword}
            onChange={SearchUser}
            className="form-control"
          />
          <div className="input-group-append">
            <button type="submit" className="btn btn-primary">
              Search
            </button>
          </div>
        </div>
      </form>
      {users.length > 0 && (
        <button
          onClick={clearItems}
          className="btn btn-danger btn-m w-100 py-2 mt-2"
        >
          Clear items
        </button>
      )}
    </div>
  );
};

export default Search;
