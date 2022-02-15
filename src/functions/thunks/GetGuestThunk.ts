import { createAsyncThunk } from "@reduxjs/toolkit";
import { Endpoints } from "../../constants";
import { RouteController } from "../../controller";

const GetGuestThunk = createAsyncThunk("api/guest/get", async () => {
  try {
    const res: any = await RouteController({ route: Endpoints.guest_get });
    return res;
  } catch (error) {
    throw error;
  }
});

export default GetGuestThunk;
