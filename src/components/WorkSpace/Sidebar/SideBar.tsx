import React from "react";
import style from "./Sidebar.module.scss";
import ProfileCardMini from "./ProfileCardMini/ProfileCardMini";
import Groups from "./Groups/Groups";

const SideBar = () => {
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
        </div>
      </div>
      <div className={`${style.sideMenuContainerItem} ${style.center}`}>
        <Groups />
      </div>
    </div>
  );
};

export default SideBar;
