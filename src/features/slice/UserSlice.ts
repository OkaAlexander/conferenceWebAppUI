import { createSlice } from "@reduxjs/toolkit";
import { userState } from "../../data/state";
import { UserLoginThunk } from "../../functions";

const UserReducer = createSlice({
  name: "UserReducer",
  initialState: userState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(UserLoginThunk.fulfilled, (state, action) => {
      state.user = action.payload;
    });
  },
});

export default UserReducer.reducer;
export const {} = UserReducer.actions;
