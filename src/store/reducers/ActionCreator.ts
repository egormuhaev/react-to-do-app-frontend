import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { config } from "../../config/config";
import { routes } from "../../config/routes";
import { requersJsonSignIn, requestJsonSignUp } from "../../models/IRequests";
import { responseJsonSignIn, responseJsonSignUp } from "../../models/IResponse";

export const fetchSignInUsers = createAsyncThunk(
  "data/fetchSignIn",
  async (req: requersJsonSignIn, thuncAPI) => {
    try {
      const response = await axios.post<requersJsonSignIn>(
        `${config.BASE_API}${routes.BASE_RUOTE}${routes.GET_USER}`,
        req
      );
      return response.data as responseJsonSignIn;
    } catch (e: any) {
      return thuncAPI.rejectWithValue(e.message);
    }
  }
);

export const fetchSignUpNewUsers = createAsyncThunk(
  "data/fetchSignUp",
  async (req: requestJsonSignUp, thuncAPI) => {
    try {
      const response = await axios.post<requestJsonSignUp>(
        `${config.BASE_API}${routes.BASE_RUOTE}${routes.CREATE_NEW_USER}`,
        req
      );
      return response.data as responseJsonSignUp;
    } catch (e: any) {
      return thuncAPI.rejectWithValue(e.message);
    }
  }
);
