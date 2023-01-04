import React from "react";
import style from "./Sidebar.module.scss";
import ProfileCardMini from "./ProfileCardMini/ProfileCardMini";
import Groups from "./Groups/Groups";
import addImg from "./img/add.png";
import delImg from "./img/cross.png";
import { useAppDispatch, useAppSelector } from "../../../hook/redux";
import { mainAppSlice } from "../../../store/reducers/MainAppSlice";

const SideBar = () => {
  const { status } = useAppSelector(
    (state) => state.mainAppReducer.group.createGroup
  );
  const { setCreateNewGroup } = mainAppSlice.actions;
  const dispatch = useAppDispatch();
  return (
    <div className={style.sidebarWrapper}>
      <div className={`${style.sideMenuContainerItem} ${style.center}`}>
        <ProfileCardMini />
      </div>
      <div className={`${style.sideMenuContainerItem} ${style.center}`}>
        <button className={style.font}>Today</button>
        <button className={style.font}>Important</button>
        <button className={style.font}>All</button>
        <button className={style.font}>Planned</button>
        <button className={style.font}>Tasks</button>
      </div>
      <div className={`${style.sideMenuContainerItem} ${style.center}`}>
        <div className={style.groupText}>
          <p>Groups</p>
          <div
            className={style.addNewGroup}
            onClick={() => {
              dispatch(setCreateNewGroup(!status));
            }}
          >
            <img src={status ? delImg : addImg} alt="" />
          </div>
        </div>
      </div>
      <div className={`${style.sideMenuContainerItem} ${style.center}`}>
        <Groups />
      </div>
    </div>
  );
};

export default SideBar;
