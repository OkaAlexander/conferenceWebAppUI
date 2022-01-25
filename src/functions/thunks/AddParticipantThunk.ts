import { createAsyncThunk } from "@reduxjs/toolkit";
import { Endpoints } from "../../constants";
import { RouteController } from "../../controller";

const AddParticipantThunk = createAsyncThunk(
  "api/participant/add",
  async (data: any) => {
    try {
      const res: any = await RouteController({
        route: Endpoints.participant_add,
        data,
        file: true,
      });
      return res;
    } catch (error) {
      throw error;
    }
  }
);

export default AddParticipantThunk;
