import { combineReducers } from "@reduxjs/toolkit";
import {
  UserReducer,
  ResponseReducer,
  ParticipantsReducer,
  ConferencesReducer,
  GuestReducer,
  MemberReducer,
} from "../features";

const reducer = combineReducers({
  UserReducer,
  ResponseReducer,
  ConferencesReducer,
  ParticipantsReducer,
  GuestReducer,
  MemberReducer,
});

export default reducer;
