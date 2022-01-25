import { createAsyncThunk } from "@reduxjs/toolkit";
import { Endpoints } from "../../constants";
import { RouteController } from "../../controller";

const GetParticipantsThunk = createAsyncThunk(
  "api/participants/get",
  async () => {
    try {
      const res: any = await RouteController({
        route: Endpoints.participants_get,
      });
      return res;
    } catch (error) {
      throw error;
    }
  }
);

export default GetParticipantsThunk;
