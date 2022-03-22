import { combineReducers } from "@reduxjs/toolkit";
import {
  UserReducer,
  ResponseReducer,
  ParticipantsReducer,
  ConferencesReducer,
  GuestReducer,
  MemberReducer,
  PrintReducer
} from "../features";

const reducer = combineReducers({
  UserReducer,
  ResponseReducer,
  ConferencesReducer,
  ParticipantsReducer,
  GuestReducer,
  MemberReducer,
  PrintReducer
});

export default reducer;
