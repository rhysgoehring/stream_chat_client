import { combineReducers } from "redux";
import auth from "./auth";
import channels from "./channels";

const rootReducer = combineReducers({
  auth,
  channels
});

export default rootReducer;
