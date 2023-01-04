import React from "react";
import { useAppDispatch, useAppSelector } from "../../../../../hook/redux";
import { mainAppSlice } from "../../../../../store/reducers/MainAppSlice";
import style from "./GroupItem.module.scss";
import directory_img_blue from "./img/directory_img_blue.png";
import directory_img_white from "./img/directory_img_white.png";

interface Props {
  id: number | string;
  text: string | undefined;
}

const GroupItem: React.FC<Props> = ({ id, text }) => {
  const { selectGroup } = useAppSelector((state) => state.mainAppReducer.group);
  const dispatch = useAppDispatch();
  const { setSelectGroup } = mainAppSlice.actions;

  return selectGroup !== id ? (
    <div
      className={`${style.item}`}
      onClick={() => {
        dispatch(setSelectGroup(id));
      }}
    >
      <img src={directory_img_white} alt="img" />
      <p>{text}</p>
    </div>
  ) : (
    <div
      className={`${style.item} ${style.active}`}
      onClick={() => {
        dispatch(setSelectGroup(-1));
      }}
    >
      <img src={directory_img_blue} alt="img" />
      <p>{text}</p>
    </div>
  );
};

export default GroupItem;
