import {
  LOG_IN,
  LOG_OUT,
  SET_USER_NAME,
  LOADING_CURRENT_SESSION
} from "../actions/types";

const initialState = {
  isAuthenticated: false,
  isSessionLoading: true,
  username: ""
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
    case SET_USER_NAME:
      return {
        ...state,
        username: action.payload
      };
    case LOADING_CURRENT_SESSION:
      return {
        ...state,
        isSessionLoading: false
      };
    default:
      return state;
  }
}
