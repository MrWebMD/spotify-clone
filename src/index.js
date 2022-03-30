import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./assets/css/Theme.css";
import { BrowserRouter, HashRouter } from "react-router-dom";
import App from "./App";
import detectElectron from "./helpers/detectElectron";

const isElectronClient = detectElectron();

var ClientRouter = BrowserRouter;

if(isElectronClient) {
  ClientRouter = HashRouter;
}
ReactDOM.render(
  <React.StrictMode>
    <ClientRouter>
      <App />
    </ClientRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
