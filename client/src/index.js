import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "antd/dist/antd.min.css";
import App from "./App";
// 1. import from react-redux and redux
import { createStore } from "redux";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./reducers";

// 2. create user reducer function
// 3. combine multiple reducers
// 4. create redux store
const store = createStore(rootReducer, composeWithDevTools());

// 5.  provice redux store to the entire app

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

