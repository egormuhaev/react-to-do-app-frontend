import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IMainUserData } from "../../models/IMainUserData";
import { IStateMainApp } from "../../models/IStateMainApp";

const initialState: IStateMainApp = {
  userData: {
    id: "",
    username: "",
    email: "",
    password: "",
  },
};

export const mainAppSlice = createSlice({
  name: "mainAppSlice",
  initialState,
  reducers: {
    setUserData(state, action: PayloadAction<IMainUserData>) {
      state.userData = action.payload;
    },
  },
});

export default mainAppSlice.reducer;
