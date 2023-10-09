import React, { Component } from "react";
import { PropTypes } from "prop-types";

export class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-dark bg-primary">
        <div className="container">
          <a className="navbar-brand" href="#">
            <i className={this.props.icon}></i>
            {this.props.title}
          </a>
        </div>
      </nav>
    );
  }
}
Navbar.defaultProps = {
  title: "Github Finder",
  icon: "fab fa-github mx-2",
};
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};
export default Navbar;
