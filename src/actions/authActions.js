import {
  LOG_IN,
  LOG_OUT,
  SET_USER_NAME,
  LOADING_CURRENT_SESSION
} from "./types";

export const logIn = () => {
  return {
    type: LOG_IN
  };
};

export const logOut = () => {
  return {
    type: LOG_OUT
  };
};

export const setUserName = username => {
  return {
    type: SET_USER_NAME,
    payload: username
  };
};

export const loadingCurrentSession = () => {
  return {
    type: LOADING_CURRENT_SESSION
  };
};
