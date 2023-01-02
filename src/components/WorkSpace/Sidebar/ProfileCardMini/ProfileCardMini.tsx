import React from "react";
import { useAppSelector } from "../../../../hook/redux";
import { mainAppSlice } from "../../../../store/reducers/MainAppSlice";
import style from "./ProfileCardMini.module.scss";

const ProfileCardMini = () => {
  const { username } = useAppSelector((state) => state.mainAppReducer.userData);
  const firstSymbol = username ? username[0].toUpperCase() : "U";

  return (
    <div className={style.wrapper}>
      <div className={`${style.avatar} ${style.leftSide}`}>
        <p className={style.font}>{firstSymbol}</p>
      </div>
      <div className={`${style.prifileInfo} ${style.rightSide}`}>
        <p className={style.font}>{username}</p>
      </div>
    </div>
  );
};

export default ProfileCardMini;
