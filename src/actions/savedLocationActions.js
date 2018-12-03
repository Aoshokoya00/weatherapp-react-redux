import {
  GET_SAVED_LOCATIONS,
  ADD_SAVED_LOCATION,
  DELETE_SAVED_LOCATION
} from "./types";

export const getSavedLocations = () => {
  return {
    type: GET_SAVED_LOCATIONS
  };
};

export const addSavedLocation = location => {
  return {
    type: ADD_SAVED_LOCATION,
    payload: location
  };
};

export const deleteSavedLocation = location => {
  return {
    type: DELETE_SAVED_LOCATION,
    payload: location
  };
};
