import React from "react";
import { useAppSelector } from "../../../hook/redux";
import style from "./Header.module.scss";

const Header = () => {
  const { text } = useAppSelector((state) => state.mainAppReducer.header);
  return (
    <div className={style.wrapper}>
      <p>{text}</p>

      <div className={style.defaultDiv}></div>
    </div>
  );
};

export default Header;
