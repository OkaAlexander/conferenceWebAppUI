import { createAsyncThunk } from "@reduxjs/toolkit";
import { Endpoints } from "../../constants";
import { RouteController } from "../../controller";

const RegisterUserThunk = createAsyncThunk(
  "api/users/register",
  async (data: any) => {
    try {
      const res: any = await RouteController({
        route: Endpoints.user_add,
        data,
      });
      return res;
    } catch (error) {
      throw error;
    }
  }
);

export default RegisterUserThunk;
