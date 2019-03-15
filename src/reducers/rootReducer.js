import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

import route1 from "./route1";
import route2 from "./route2";

export default history =>
  combineReducers({
    router: connectRouter(history),
    route1,
    route2
  });
