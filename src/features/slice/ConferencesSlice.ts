import { createSlice } from "@reduxjs/toolkit";
import { conferencesState } from "../../data/state";
import { AddConferenceThunk, GetConferencesThunk } from "../../functions";

const ConferencesReducer = createSlice({
  name: "ConferencesReducer",
  initialState: conferencesState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(GetConferencesThunk.fulfilled, (state, action) => {
        state.conferences = action.payload;
      })
      .addCase(AddConferenceThunk.fulfilled, (state, action) => {
        state.conferences = action.payload;
      });
  },
});

export default ConferencesReducer.reducer;
