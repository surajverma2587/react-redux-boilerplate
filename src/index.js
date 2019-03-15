import { AppContainer } from "react-hot-loader";
import { Provider } from "react-redux";
import React from "react";
import ReactDOM from "react-dom";

import configureStore, { history } from "./store";
import App from "./App";

import "./App.css";

const store = configureStore();

const render = () => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <App history={history} />
      </Provider>
    </AppContainer>,
    document.getElementById("root")
  );
};

render();

if (module.hot) {
  module.hot.accept("./App", () => {
    render();
  });
}
