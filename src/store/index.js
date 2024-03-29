import { createBrowserHistory } from "history";
import { compose, createStore, applyMiddleware } from "redux";
import { routerMiddleware } from "connected-react-router";
import thunk from "redux-thunk";

import rootReducer from "../reducers/rootReducer";

export const history = createBrowserHistory();

export default function configureStore(preloadedState = {}) {
  const store = createStore(
    rootReducer(history),
    preloadedState,
    compose(applyMiddleware(routerMiddleware(history), thunk))
  );

  return store;
}
