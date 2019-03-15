const initialState = {
  value: null,
  loading: false,
  error: null
};

const route1Reducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_ROUTE1_DATA_STARTED":
      return {
        ...state,
        loading: true
      };
    case "GET_ROUTE1_DATA_SUCCESS":
      return {
        ...state,
        loading: false,
        value: action.payload
      };
    case "GET_ROUTE1_DATA_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.payload.error
      };
    default:
      return state;
  }
};

export default route1Reducer;
