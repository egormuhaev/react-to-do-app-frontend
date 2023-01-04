import React from "react";
import { useAppDispatch, useAppSelector } from "../../../../../hook/redux";
import { mainAppSlice } from "../../../../../store/reducers/MainAppSlice";
import style from "./NewGroupForm.module.scss";
import { fetchCreateNewGroup } from "../../../../../store/reducers/ActionCreator";

const NewGroupForm = () => {
  const { id } = useAppSelector((state) => state.mainAppReducer.userData);
  const { newGroupName, errorStatus, errorMessage } = useAppSelector(
    (state) => state.mainAppReducer.group.createGroup
  );
  const { setNewGroupName } = mainAppSlice.actions;
  const dispatch = useAppDispatch();

  const saveBtn = (
    <button
      className={style.font}
      onClick={() => {
        if (newGroupName) {
          dispatch(
            fetchCreateNewGroup({
              userId: id as string,
              nameGroup: newGroupName,
            })
          );
        }
      }}
    >
      Save
    </button>
  );

  const messageErr = (
    <div className={`${style.error} ${style.font}`}>{errorMessage}</div>
  );

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
      {errorStatus ? messageErr : saveBtn}
    </div>
  );
};

export default NewGroupForm;
