import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import AppRouter from "./routers/AppRouter";

import "./styles/main.scss";

const root = document.querySelector("#root");

ReactDOM.render(<App />, root);
