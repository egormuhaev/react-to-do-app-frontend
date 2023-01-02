import React from "react";
import style from "./Sidebar.module.scss";
import ProfileCardMini from "./ProfileCardMini/ProfileCardMini";

const SideBar = () => {
  return (
    <div className={style.sidebarWrapper}>
      <div className={`${style.sideMenuContainerItem} ${style.center}`}>
        <ProfileCardMini />
      </div>
      <div className={`${style.sideMenuContainerItem} ${style.center}`}>
        <button></button>
        <button></button>
        <button></button>
        <button></button>
        <button></button>
      </div>
    </div>
  );
};

export default SideBar;
