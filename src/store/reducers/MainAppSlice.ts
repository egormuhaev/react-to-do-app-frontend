import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
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
  reducers: {},
});



export default mainAppSlice.reducer;
