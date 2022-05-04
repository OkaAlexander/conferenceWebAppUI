import { createSlice } from "@reduxjs/toolkit";
import { responseState } from "../../data/state";
import {
  AddConferenceMemberThunk,
  AddGuestThunk,
  AddParticipantThunk,
  GetGuestThunk,
  GetParticipantsThunk,
  RegisterUserThunk,
  UserLoginThunk,
  UserLogoutThunk,
} from "../../functions";
import GetConferencesThunk from "./../../functions/thunks/GetConferencesThunk";
import AddConferenceThunk from "./../../functions/thunks/AddConferenceThunk";
import {
  LoginThunk,
  RemoveMemberThunk,
  UpdateInfoThunk,
} from "../../functions/member";

const ResponseReducer = createSlice({
  name: "ResponseReducer",
  initialState: responseState,
  reducers: {
    ResponseFail: (state, action) => {
      state.error = action.payload;
    },
    ResetResponse: (state) => {
      state.loading = false;
      state.error = null;
      state.message = null;
    },
  },
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
      .addCase(AddParticipantThunk.fulfilled, (state) => {
        state.loading = false;
        state.error = null;
        state.message = "Participant Added Successfully";
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
      })
      .addCase(UserLogoutThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.message = null;
      })
      .addCase(UserLogoutThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
      })
      .addCase(UserLogoutThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
        state.message = null;
      })
      .addCase(AddConferenceMemberThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.message = null;
      })
      .addCase(AddConferenceMemberThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.message = "Registration Successfull";
      })
      .addCase(AddConferenceMemberThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
        state.message = null;
      })
      .addCase(AddGuestThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.message = null;
      })
      .addCase(AddGuestThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.message = null;
      })
      .addCase(AddGuestThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
        state.message = null;
      })
      .addCase(GetGuestThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.message = null;
      })
      .addCase(GetGuestThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.message = null;
      })
      .addCase(GetGuestThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
        state.message = null;
      })
      .addCase(UpdateInfoThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.message = null;
      })
      .addCase(UpdateInfoThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.message = action.payload;
      })
      .addCase(UpdateInfoThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
        state.message = null;
      })
      .addCase(LoginThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.message = null;
      })
      .addCase(LoginThunk.fulfilled, (state) => {
        state.loading = false;
        state.error = null;
        state.message = null;
      })
      .addCase(LoginThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
        state.message = null;
      })
      .addCase(RemoveMemberThunk.pending, (state, action) => {
        state.loading = true;
        state.error = null;
        state.message = null;
      })
      .addCase(RemoveMemberThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.message = action.payload.message;
      })
      .addCase(RemoveMemberThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
        state.message = null;
      });
  },
});

export default ResponseReducer.reducer;
export const { ResponseFail, ResetResponse } = ResponseReducer.actions;
