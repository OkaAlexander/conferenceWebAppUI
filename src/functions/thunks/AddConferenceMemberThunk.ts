import { createAsyncThunk } from "@reduxjs/toolkit";
import { Endpoints } from "../../constants";
import { RouteController } from "../../controller";

const AddConferenceMemberThunk = createAsyncThunk(
  "api/member/add",
  async (data: any) => {
    try {
      const res: any = await RouteController({
        route: Endpoints.member_add,
        data,
        file: true,
      });
      return res;
    } catch (error) {
      throw error;
    }
  }
);

export default AddConferenceMemberThunk;
