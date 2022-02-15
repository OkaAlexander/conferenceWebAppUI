import { createAsyncThunk } from "@reduxjs/toolkit";

export default createAsyncThunk("api/conference/member/logout", async () => {
  try {
    return null;
  } catch (error) {
    throw error;
  }
});
