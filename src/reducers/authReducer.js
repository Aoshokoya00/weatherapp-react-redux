import { LOG_IN, LOG_OUT } from "../actions/types";

const initialState = {
  isAuthenticated: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case LOG_IN:
      return {
        ...state,
        isAuthenticated: true
      };
    case LOG_OUT:
      return {
        ...state,
        isAuthenticated: false
      };
    default:
      return state;
  }
}
