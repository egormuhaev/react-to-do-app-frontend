import React from "react";
import style from "./ModalRenameGroup.module.scss";
import { useAppDispatch, useAppSelector } from "../../../../../hook/redux";
import { mainAppSlice } from "../../../../../store/reducers/MainAppSlice";
import { fetchRenameGroup } from "../../../../../store/reducers/ActionCreator";

const ModalRenameGroup = () => {
  const { renameGroup, groupAll } = useAppSelector(
    (state) => state.mainAppReducer.group
  );
  const { setRenameGroupStatus, setRenameGroupName, setRenameGroupId } =
    mainAppSlice.actions;
  const dispatch = useAppDispatch();

  const oldNameGroup = groupAll.filter((el) => el.id === renameGroup.id);

  return (
    <div className={style.modalWrapper}>
      <div className={style.nameAction}>
        <p>Rename Group</p>
      </div>
      <div className={style.inputModal}>
        <p>{`Active name: ${oldNameGroup[0].name} `}</p>
        <input
          type="text"
          placeholder="New name"
          value={renameGroup.name}
          onChange={(event) => {
            dispatch(setRenameGroupName(event.target.value));
          }}
        />
      </div>
      <div className={style.btnModal}>
        <button
          onClick={() => {
            dispatch(
              fetchRenameGroup({
                newGroupName: renameGroup.name,
                id: renameGroup.id,
              })
            );
          }}
        >
          Rename
        </button>
        <button
          onClick={() => {
            dispatch(setRenameGroupStatus(false));
            dispatch(setRenameGroupId(-1));
            dispatch(setRenameGroupName(""));
          }}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default ModalRenameGroup;
