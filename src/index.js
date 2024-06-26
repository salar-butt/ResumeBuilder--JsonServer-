import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import store from "./Store";
import { BrowserRouter, 
  // HashRouter
 } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <HashRouter basename="/"> */}
    <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
    {/* </HashRouter> */}
    </BrowserRouter>
  </React.StrictMode>
);
