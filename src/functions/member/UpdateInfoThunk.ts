import { createAsyncThunk } from "@reduxjs/toolkit";
import { Endpoints } from "../../constants";
import { RouteController } from "../../controller";

export default createAsyncThunk(
  "api/conference/participant",
  async (data: any) => {
    try {
      const res: any = await RouteController({
        route: Endpoints.participant_update,
        data,
      });
      return res;
    } catch (error) {
      throw error;
    }
  }
);
