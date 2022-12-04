import { combineReducers, configureStore } from "@reduxjs/toolkit";
import autorizationReducer from "./reducers/AutorizationSlice";
import mainAppReducer from "./reducers/MainAppSlice";

const rootReducer = combineReducers({
  autorizationReducer,
  mainAppReducer,
});

export const setupStore = () =>
  configureStore({
    reducer: rootReducer,
  });

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
