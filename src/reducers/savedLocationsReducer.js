import { ADD_SAVED_LOCATION, DELETE_SAVED_LOCATION } from "../actions/types";

const initialState = {
  savedlocations: ["Seattle", "San Francisco"]
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_SAVED_LOCATION:
      return {
        ...state,
        savedlocations: [...state.savedlocations, action.payload]
      };
    case DELETE_SAVED_LOCATION:
      return {
        ...state,
        savedlocations: state.savedlocations.filter(
          location => location !== action.payload
        )
      };
    default:
      return state;
  }
}
