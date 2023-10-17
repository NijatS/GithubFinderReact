import React from "react";
import { StrictMode } from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import AppRouter from "./routers/AppRouter";

import "./styles/main.scss";

const root = document.querySelector("#root");

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  root
);
$(function () {
  $(".collapse").on("show.bs.collapse", function () {
    var toggle = $('[data-target="#' + this.id + '"]');
    if (toggle) {
      var parent = toggle.attr("data-parent");
      if (parent) {
        $(parent).find(".collapse.in").collapse("hide");
      }
    }
  });
});
