import { createAsyncThunk } from "@reduxjs/toolkit";
import { Endpoints } from "../../constants";
import { RouteController } from "../../controller";

const UserLoginThunk = createAsyncThunk("api/user/login", async (data: any) => {
  try {
    const res: any = await RouteController({
      route: Endpoints.user_login,
      data,
    });
    return res;
  } catch (error) {
    throw error;
  }
});

export default UserLoginThunk;
