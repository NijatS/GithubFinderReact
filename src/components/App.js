import React, { Component } from "react";
import Navbar from "./Navbar";
import User from "./User";

export class App extends Component {
  render() {
    return (
      <>
        <Navbar />
        <div className="card-group">
          <User />
          <User />
        </div>
      </>
    );
  }
}

export default App;
