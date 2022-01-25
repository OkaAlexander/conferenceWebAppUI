import { createSlice } from "@reduxjs/toolkit";
import { participantState } from "../../data/state";
import { AddParticipantThunk, GetParticipantsThunk } from "../../functions";

const ParticipantsReducer = createSlice({
  name: "ParticipantsReducer",
  initialState: participantState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(GetParticipantsThunk.fulfilled, (state, action) => {
      state.participants = action.payload;
    });
  },
});

export default ParticipantsReducer.reducer;
