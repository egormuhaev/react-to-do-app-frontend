import React from "react";
import { useAppDispatch, useAppSelector } from "../../../../hook/redux";
import { mainAppSlice } from "../../../../store/reducers/MainAppSlice";
import style from "./HeaderByGroup.module.scss";

const HeaderByGroup = () => {
  const { renameGroup, selectGroup } = useAppSelector(
    (state) => state.mainAppReducer.group
  );
  const { setRenameGroupStatus, setRenameGroupId } = mainAppSlice.actions;
  const dispatch = useAppDispatch();

  return (
    <div className={style.wrapper}>
      <button>Delete</button>
      <button
        onClick={() => {
          if (!renameGroup.status && selectGroup !== -1) {
            dispatch(setRenameGroupStatus(!renameGroup.status));
            dispatch(setRenameGroupId(selectGroup));
          }
        }}
      >
        Rename
      </button>
      <button>Add task</button>
    </div>
  );
};

export default HeaderByGroup;
