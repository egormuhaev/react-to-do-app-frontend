import React from "react";
import { useAppDispatch, useAppSelector } from "../../../../../hook/redux";
import { mainAppSlice } from "../../../../../store/reducers/MainAppSlice";
import style from "./NewGroupForm.module.scss";

const NewGroupForm = () => {
  const { newGroupName } = useAppSelector(
    (state) => state.mainAppReducer.group.createGroup
  );
  const { setNewGroupName } = mainAppSlice.actions;
  const dispatch = useAppDispatch();

  return (
    <div className={style.newGroupForm}>
      <input
        className={style.font}
        type="text"
        value={newGroupName}
        onChange={(event) => {
          dispatch(setNewGroupName(event.target.value));
        }}
      />
      <button className={style.font}>Save</button>
    </div>
  );
};

export default NewGroupForm;
