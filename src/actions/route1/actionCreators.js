const getDataStarted = () => ({
  type: "GET_ROUTE1_DATA_STARTED"
});

const getDataSuccess = payload => ({
  type: "GET_ROUTE1_DATA_SUCCESS",
  payload
});

const getDataFailure = error => ({
  type: "GET_ROUTE1_DATA_FAILURE",
  payload: { error }
});

export {
  getDataStarted,
  getDataSuccess,
  getDataFailure
};
