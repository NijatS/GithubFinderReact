import React, { Component } from "react";

export class Search extends Component {
  constructor(props) {
    super(props);
    this.SearchUser = this.SearchUser.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      keyword: "",
    };
  }
  SearchUser(e) {
    this.setState({
      keyword: e.target.value,
    });
  }
  onSubmit(e) {
    e.preventDefault();
    this.props.searchUsers(this.state.keyword);
    this.setState({
      keyword: "",
    });
  }
  render() {
    return (
      <div className="container my-3">
        <form onSubmit={this.onSubmit}>
          <div className="input-group">
            <input
              type="search"
              value={this.state.keyword}
              onChange={this.SearchUser}
              className="form-control"
            />
            <div className="input-group-append">
              <button type="submit" className="btn btn-primary">
                Search
              </button>
            </div>
          </div>
        </form>
        {this.props.showClearBtn && (
          <button
            onClick={this.props.clearItems}
            className="btn btn-danger btn-m w-100 py-2 mt-2"
          >
            Clear items
          </button>
        )}
      </div>
    );
  }
}

export default Search;
