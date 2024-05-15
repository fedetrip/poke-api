import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App.jsx";
import "./css/index.css";
import "./css/variables.css";
import "./css/normalize.css";
import "./css/types.css";
import "./css/tema.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
