import { createAsyncThunk } from "@reduxjs/toolkit";
import { Endpoints } from "../../constants";
import { RouteController } from "../../controller";
import { IParticipant } from "../../interface/IModel";

export default createAsyncThunk(
  "/api/member/remove",
  async (data: IParticipant) => {
    try {
      return <{ data: IParticipant[]; message: string }>await RouteController({
        route: Endpoints.partipant_remove,
        data,
      });
    } catch (error) {
      throw error;
    }
  }
);
