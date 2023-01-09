import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { config } from "../../config/config";
import { routes } from "../../config/routes";
import {
  requersJsonSignIn,
  requestJsonSignUp,
  requestJsonCreateNewGroup,
  requersJsonRenameGroup,
} from "../../models/IRequests";
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

export const fetchAllGroupsByUser = createAsyncThunk(
  "data/fetchGroup",
  async (id: string | number, thuncAPI) => {
    try {
      const response = await axios.get(
        `${config.BASE_API}${routes.BASE_RUOTE}${routes.GROUP_MAIN}/${id}`
      );
      return response.data;
    } catch (e: any) {
      return thuncAPI.rejectWithValue(e.message);
    }
  }
);

export const fetchCreateNewGroup = createAsyncThunk(
  "data/fetchCreateGroup",
  async (req: requestJsonCreateNewGroup, thuncAPI) => {
    try {
      const response = await axios.post<requestJsonCreateNewGroup>(
        `${config.BASE_API}${routes.BASE_RUOTE}${routes.GROUP_MAIN}`,
        req
      );
      console.log(response.data);
      return response.data;
    } catch (e: any) {
      return thuncAPI.rejectWithValue(e.message);
    }
  }
);

export const fetchRenameGroup = createAsyncThunk(
  "data/fetchRenameGroup",
  async (req: requersJsonRenameGroup, thuncAPI) => {
    try {
      const response = await axios.put<requersJsonRenameGroup>(
        `${config.BASE_API}${routes.BASE_RUOTE}${routes.GROUP_MAIN}`,
        req
      );
      console.log(response.data);
      return response.data;
    } catch (e: any) {
      return thuncAPI.rejectWithValue(e.message);
    }
  }
);

export const fetchAllTaskByUser = createAsyncThunk(
  "data/fetchAllTask",
  async (id: string | number, thuncAPI) => {
    try {
      const response = await axios.get<any>(
        `${config.BASE_API}${routes.BASE_RUOTE}${routes.GROUP_MAIN}`
      );
      return response.data;
    } catch (e: any) {
      return thuncAPI.rejectWithValue(e.message);
    }
  }
);
