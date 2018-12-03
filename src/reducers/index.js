import { combineReducers } from "redux";
import savedLocationsReducer from "./savedLocationsReducer";
import weatherReducer from "./weatherReducer";

export default combineReducers({
  savedlocations: savedLocationsReducer,
  weather: weatherReducer
});
