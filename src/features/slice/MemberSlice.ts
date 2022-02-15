import { createSlice } from "@reduxjs/toolkit";
import { memberState } from "../../data/state";
import { AddConferenceMemberThunk } from "../../functions";
import { LoginThunk, LogoutThunk } from "../../functions/member";

export default createSlice({
  name: "MemberReducer",
  initialState: memberState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(LoginThunk.fulfilled, (state, action) => {
        state.info = action.payload;
      })
      .addCase(LogoutThunk.fulfilled, (state) => {
        state.info = null;
      })
      .addCase(AddConferenceMemberThunk.fulfilled, (state, action) => {
        state.info = action.payload;
      });
  },
}).reducer;
