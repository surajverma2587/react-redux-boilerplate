const initialState = {
  value: null,
  loading: false,
  error: null
};

const route2Reducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_ROUTE2_DATA_STARTED":
      return {
        ...state,
        loading: true
      };
    case "GET_ROUTE2_DATA_SUCCESS":
      return {
        ...state,
        loading: false,
        value: action.payload
      };
    case "GET_ROUTE2_DATA_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.payload.error
      };
    default:
      return state;
  }
};

export default route2Reducer;
