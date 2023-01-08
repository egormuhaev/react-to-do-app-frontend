import React from "react";
import { useAppSelector } from "../../../hook/redux";
import style from "./Header.module.scss";
import HeaderByGroup from "./HeaderByGroup/HeaderByGroup";

const Header = () => {
  const { text } = useAppSelector((state) => state.mainAppReducer.header);
  const { group } = useAppSelector(
    (state) => state.mainAppReducer.activeSection
  );
  return (
    <div className={style.wrapper}>
      <p>{text}</p>
      {group && <HeaderByGroup />}
      <div className={style.defaultDiv}></div>
    </div>
  );
};

export default Header;
