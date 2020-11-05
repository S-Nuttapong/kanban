import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { App } from "./App";
import { Wrapper } from "./testHelper";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <React.Fragment>
    <BrowserRouter>
      <Wrapper>
        <App />
      </Wrapper>
    </BrowserRouter>
  </React.Fragment>,
  document.getElementById("root")
);
