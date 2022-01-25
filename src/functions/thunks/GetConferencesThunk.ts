import { createAsyncThunk } from "@reduxjs/toolkit";
import { Endpoints } from "../../constants";
import { RouteController } from "../../controller";

const GetConferencesThunk = createAsyncThunk(
  "api/conferences/get",
  async () => {
    try {
      const res: any = await RouteController({
        route: Endpoints.conference_get,
      });
      return res;
    } catch (error) {
      throw error;
    }
  }
);

export default GetConferencesThunk;
