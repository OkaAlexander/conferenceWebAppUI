import { combineReducers } from "@reduxjs/toolkit";
import {
  UserReducer,
  ResponseReducer,
  ParticipantsReducer,
  ConferencesReducer,
} from "../features";

const reducer = combineReducers({
  UserReducer,
  ResponseReducer,
  ConferencesReducer,
  ParticipantsReducer,
});

export default reducer;
