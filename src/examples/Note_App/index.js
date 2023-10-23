import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
import "../../styles/main.scss";
import NoteApp from "./components/NoteApp";

const root = document.querySelector("#root");

ReactDOM.render(
  <StrictMode>
    <NoteApp />
  </StrictMode>,
  root
);
