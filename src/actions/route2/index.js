import axios from "axios";
import {
  getDataStarted,
  getDataSuccess,
  getDataFailure
} from "./actionCreators";

const getData = () => dispatch => {
  dispatch(getDataStarted());

  axios
    .get("http://localhost:4000/api/route2")
    .then(({ data }) => {
      dispatch(getDataSuccess(data.data.value));
    })
    .catch(err => {
      dispatch(getDataFailure(err.message));
    });
};

export { getData };
