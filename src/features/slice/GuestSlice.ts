import { createSlice } from "@reduxjs/toolkit";
import { guetsState } from "../../data/state";
import { AddGuestThunk, GetGuestThunk } from "../../functions";

const GuestReducer = createSlice({
  name: "GuestReducer",
  initialState: guetsState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(AddGuestThunk.fulfilled, (state, action) => {
        state.guest = action.payload;
      })
      .addCase(GetGuestThunk.fulfilled, (state, action) => {
        state.guest = action.payload;
      });
  },
});

export default GuestReducer.reducer;
