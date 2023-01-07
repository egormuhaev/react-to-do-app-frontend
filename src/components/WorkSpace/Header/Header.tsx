import React from "react";
import { useAppSelector } from "../../../hook/redux";
import style from "./Header.module.scss";
import HeaderByGroup from "./HeaderByGroup/HeaderByGroup";

const Header = () => {
  const { text } = useAppSelector((state) => state.mainAppReducer.header);
  return (
    <div className={style.wrapper}>
      <p>{text}</p>
      <HeaderByGroup />
    </div>
  );
};

export default Header;