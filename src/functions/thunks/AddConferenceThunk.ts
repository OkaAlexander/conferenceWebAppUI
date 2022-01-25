import { createAsyncThunk } from "@reduxjs/toolkit";
import { Endpoints } from "../../constants";
import { RouteController } from "../../controller";

const AddConferenceThunk = createAsyncThunk(
  "api/conference/add",
  async (data: any) => {
    try {
      const res: any = await RouteController({
        route: Endpoints.conference_add,
        data,
      });
      return res;
    } catch (error) {
      throw error;
    }
  }
);

export default AddConferenceThunk;
