import { LOG_IN, LOG_OUT, LOADING_CURRENT_SESSION } from "./types";

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

export const loadingCurrentSession = () => {
  return {
    type: LOADING_CURRENT_SESSION
  };
};
