import { createSlice } from "@reduxjs/toolkit";
import { responseState } from "../../data/state";
import {
  AddParticipantThunk,
  GetParticipantsThunk,
  RegisterUserThunk,
  UserLoginThunk,
} from "../../functions";
import GetConferencesThunk from "./../../functions/thunks/GetConferencesThunk";
import AddConferenceThunk from "./../../functions/thunks/AddConferenceThunk";

const ResponseReducer = createSlice({
  name: "ResponseReducer",
  initialState: responseState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(GetParticipantsThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.message = null;
      })
      .addCase(GetParticipantsThunk.fulfilled, (state) => {
        state.loading = false;
        state.error = null;
        state.message = null;
      })
      .addCase(GetParticipantsThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
        state.message = null;
      })
      .addCase(GetConferencesThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.message = null;
      })
      .addCase(GetConferencesThunk.fulfilled, (state) => {
        state.loading = false;
        state.error = null;
        state.message = null;
      })
      .addCase(GetConferencesThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
        state.message = null;
      })
      .addCase(AddConferenceThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.message = null;
      })
      .addCase(AddConferenceThunk.fulfilled, (state) => {
        state.loading = false;
        state.error = null;
        state.message = null;
      })
      .addCase(AddConferenceThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
        state.message = null;
      })
      .addCase(AddParticipantThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.message = null;
      })
      .addCase(AddParticipantThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.message = action.payload;
      })
      .addCase(AddParticipantThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
        state.message = null;
      })
      .addCase(UserLoginThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.message = null;
      })
      .addCase(UserLoginThunk.fulfilled, (state) => {
        state.loading = false;
        state.error = null;
        state.message = null;
      })
      .addCase(UserLoginThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
        state.message = null;
      })
      .addCase(RegisterUserThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.message = null;
      })
      .addCase(RegisterUserThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.message = action.payload;
      })
      .addCase(RegisterUserThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
        state.message = null;
      });
  },
});

export default ResponseReducer.reducer;
export const {} = ResponseReducer.actions;
