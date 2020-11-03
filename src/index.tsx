import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { App } from "./App";
import { Wrapper } from "./testHelper";

ReactDOM.render(
  <Wrapper>
    <App />
  </Wrapper>,
  document.getElementById("root")
);
