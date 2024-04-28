import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { KFooter } from "./components";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.Fragment>
    <App />
    <KFooter />
  </React.Fragment>,
);
