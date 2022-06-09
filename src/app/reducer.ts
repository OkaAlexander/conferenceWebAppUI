import { combineReducers } from "@reduxjs/toolkit";
import {
  UserReducer,
  ResponseReducer,
  ParticipantsReducer,
  ConferencesReducer,
  GuestReducer,
  MemberReducer,
  PrintReducer,
  ConferencePackagesReducer,
} from "../features";

const reducer = combineReducers({
  UserReducer,
  ResponseReducer,
  ConferencesReducer,
  ParticipantsReducer,
  GuestReducer,
  MemberReducer,
  PrintReducer,
  ConferencePackagesReducer,
});

export default reducer;
