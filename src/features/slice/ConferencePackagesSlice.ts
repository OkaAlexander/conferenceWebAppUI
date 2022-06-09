import { conferencePackageReducerState } from "./../../data/state";
import { createSlice } from "@reduxjs/toolkit";
import { GetConferencePackagesThunk } from "../../functions";

export default createSlice({
  name: "ConferencePackageReducer",
  reducers: {},
  initialState: conferencePackageReducerState,
  extraReducers: (builder) => {
    builder.addCase(GetConferencePackagesThunk.fulfilled, (state, action) => {
      state.conference_packages = action.payload;
    });
  },
}).reducer;
