import React, { useState } from "react";

const Search = ({ setAlert, searchUsers, showClearBtn, clearItems }) => {
  const [keyword, setKeyword] = useState("");

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
      {showClearBtn && (
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
