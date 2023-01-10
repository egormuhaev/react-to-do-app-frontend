import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IMainUserData } from "../../models/IMainUserData";
import { IStateMainApp } from "../../models/IStateMainApp";
import {
  fetchCreateNewGroup,
  fetchRenameGroup,
  fetchAllDataByUser,
} from "./ActionCreator";
import { IGroup, ITask } from "../../models/IStateMainApp";
import { responseJsonCreateNewGroup } from "../../models/IResponse";

const initialState: IStateMainApp = {
  userData: {
    id: "",
    username: "",
    email: "",
    password: "",
  },

  header: {
    text: "Dashboard",
  },

  activeSection: {
    today: false,
    important: false,
    all: false,
    planned: false,
    tasks: false,
    group: false,
    dashboard: true,
  },

  task: {
    taskAll: [],
  },

  group: {
    renameGroup: {
      status: false,
      name: "",
      id: -1,
    },
    createGroup: {
      newGroupName: "",
      status: false,
      errorStatus: false,
      errorMessage: "",
    },
    selectGroup: -1,
    groupAll: [],
  },
};

export const mainAppSlice = createSlice({
  name: "mainAppSlice",
  initialState,
  reducers: {
    setNewGroupName(state, action: PayloadAction<string>) {
      if (!(state.group.createGroup.newGroupName.length === 17)) {
        state.group.createGroup.newGroupName = action.payload;
      }
    },
    setCreateNewGroup(state, action: PayloadAction<boolean>) {
      state.group.createGroup.status = action.payload;
      if (!action.payload) {
        state.group.createGroup.newGroupName = "";
        state.group.createGroup.errorStatus = false;
        state.group.createGroup.errorMessage = "";
      }
    },
    setSelectGroup(state, action: PayloadAction<string | number>) {
      state.group.selectGroup = action.payload;
      if (action.payload !== -1) {
        state.activeSection.group = true;
        state.header.text = state.group.groupAll.filter(
          (element) => element.id === action.payload
        )[0].name as string;
      } else {
        state.activeSection.group = false;
        state.header.text = "Dashboard";
        state.activeSection.dashboard = true;
      }
      state.group.selectGroup = action.payload;
    },
    setUserData(state, action: PayloadAction<IMainUserData>) {
      state.userData = action.payload;
    },

    setRenameGroupStatus(state, action: PayloadAction<boolean>) {
      state.group.renameGroup.status = action.payload;
    },

    setRenameGroupName(state, action: PayloadAction<string>) {
      if (!(state.group.renameGroup.name.length === 17)) {
        state.group.renameGroup.name = action.payload;
      }
    },

    setRenameGroupId(state, action: PayloadAction<string | number>) {
      if (!(state.group.renameGroup.name.length === 17)) {
        state.group.renameGroup.id = action.payload;
      }
    },
  },
  extraReducers: {
    [fetchCreateNewGroup.fulfilled.type]: (
      state,
      action: PayloadAction<responseJsonCreateNewGroup>
    ) => {
      const newGroup: responseJsonCreateNewGroup = action.payload;
      state.group.groupAll.unshift({
        id: newGroup.id,
        name: newGroup.name as string | undefined,
        user_id: newGroup.userId,
      });
      state.group.selectGroup = newGroup.id;
      state.header.text = newGroup.name as string;
      state.activeSection = {
        today: false,
        important: false,
        all: false,
        planned: false,
        tasks: false,
        group: true,
        dashboard: false,
      };
      state.group.createGroup.status = false;
      state.group.createGroup.newGroupName = "";
    },
    [fetchCreateNewGroup.pending.type]: () => {},
    [fetchCreateNewGroup.rejected.type]: (
      state,
      action: PayloadAction<string>
    ) => {
      state.group.createGroup.errorMessage = action.payload;
      state.group.createGroup.errorStatus = true;
    },

    [fetchRenameGroup.fulfilled.type]: (state, action: PayloadAction<any>) => {
      state.group.groupAll = [
        ...state.group.groupAll.map((element) => {
          if (element.id === action.payload[0].id) {
            element.name = action.payload[0].name as string | undefined;
          }
          return element;
        }),
      ];

      state.group.renameGroup = { id: -1, name: "", status: false };
    },
    [fetchRenameGroup.pending.type]: (state) => {},
    [fetchRenameGroup.rejected.type]: (
      state,
      action: PayloadAction<string>
    ) => {},

    [fetchAllDataByUser.fulfilled.type]: (
      state,
      action: PayloadAction<{ task: ITask[]; group: IGroup[] }>
    ) => {
      state.group.groupAll = [...action.payload.group];
      state.task.taskAll = [...action.payload.task];
    },
    [fetchAllDataByUser.pending.type]: (state) => {},
    [fetchAllDataByUser.rejected.type]: (state) => {},
  },
});

export default mainAppSlice.reducer;
