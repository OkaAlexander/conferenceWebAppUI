import { IConferencePackage } from "./../../interface/IConferencePackage";

import { createAsyncThunk } from "@reduxjs/toolkit";
import { RouteController } from "../../controller";
import { Endpoints } from "../../constants";

export default createAsyncThunk("api/conference/packages/get", async () => {
  try {
    return <IConferencePackage[]>(
      await RouteController({ route: Endpoints.packages_get })
    );
  } catch (error) {
    throw error;
  }
});
