import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createStore } from "redux";
import { carReducer } from "./reducers/carReducer";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import "bulma/css/bulma.css";
import "./styles.scss";

let store = createStore(carReducer);

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,
  rootElement
);
