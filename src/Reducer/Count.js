const initialState = {
  count: 0,
  isIncRequest: false,
  isDecRequest: false
};
export const Count = (state = initialState, action) => {
  switch (action.type) {
    case "ON_CHANGE":
      console.log("in change");
      return {...state,
        count:action.payload};

    case "INCREMENT_REQ":
      return {
        ...state,
        isIncRequest: true
      };

    case "DECREMENT_REQ":
      return {
        ...state,
        isDecRequest: true
      };

    case "ON_INCREMENT":
      console.log("in incr");

      return {
        ...state,
        count: state.count + 1,
        isIncRequest: !state.isIncRequest
      };

    case "ON_DECREMENT":
      console.log("in decr");
      return {
        ...state,
        count: state.count - 1,
        isDecRequest: !state.isIncRequest
      };

    default:
      return state;
  }
};
