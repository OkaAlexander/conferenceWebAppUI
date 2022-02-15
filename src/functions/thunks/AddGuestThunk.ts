import { createAsyncThunk } from "@reduxjs/toolkit";
import { Endpoints } from "../../constants";
import { RouteController } from "../../controller";

const AddGuestThunk = createAsyncThunk("api/guest/add", async (data: any) => {
  try {
    const res: any = await RouteController({
      route: Endpoints.guest_add,
      data,
      file: true,
    });
    return res;
  } catch (error) {
    throw error;
  }
});

export default AddGuestThunk;
