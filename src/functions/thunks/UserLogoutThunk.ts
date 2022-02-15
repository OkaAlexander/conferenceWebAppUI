import { createAsyncThunk } from "@reduxjs/toolkit";
const UserLogoutThunk = createAsyncThunk("api/user/logout", async () => {
  try {
    return null;
  } catch (error) {
    throw error;
  }
});

export default UserLogoutThunk;
