import {
  SET_SEARCHED_WEATHER,
  DELETE_SEARCHED_WEATHER,
  SET_SAVED_WEATHER,
  DELETE_SAVED_WEATHER,
  SAVE_WEATHER_LOCATION
} from "../actions/types";

const initialState = {
  searchedweather: {},
  savedweather: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_SEARCHED_WEATHER:
      return {
        ...state,
        searchedweather: action.payload
      };
    case DELETE_SEARCHED_WEATHER:
      return {
        ...state,
        searchedweather: {}
      };
    case SET_SAVED_WEATHER:
      return {
        ...state,
        savedweather: [...state.savedweather, action.payload]
      };
    case DELETE_SAVED_WEATHER:
      return {
        ...state,
        savedweather: [
          ...state.savedweather.filter(
            weather => weather.name !== action.payload
          )
        ]
      };
    case SAVE_WEATHER_LOCATION:
      return {
        ...state,
        searchedweather: {},
        savedweather: [...state.savedweather, state.searchedweather]
      };
    default:
      return state;
  }
}
