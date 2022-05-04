import { createSlice } from "@reduxjs/toolkit";
import { participantState } from "../../data/state";
import { AddParticipantThunk, GetParticipantsThunk } from "../../functions";
import { RemoveMemberThunk } from "../../functions/member";
import { PrepareResponseData_Participants } from "../../pages/services/services";

const ParticipantsReducer = createSlice({
  name: "ParticipantsReducer",
  initialState: participantState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(GetParticipantsThunk.fulfilled, (state, action) => {
        state.participants = action.payload;
        console.log(action.payload);
      })
      .addCase(AddParticipantThunk.fulfilled, (state, action) => {
        state.participants = action.payload;
      })
      .addCase(RemoveMemberThunk.fulfilled, (state, action) => {
        state.participants = action.payload.data;
      });
  },
});

export default ParticipantsReducer.reducer;
