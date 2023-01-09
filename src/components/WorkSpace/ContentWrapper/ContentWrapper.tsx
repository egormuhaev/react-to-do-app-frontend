import React from "react";
import style from "./ContentWrapper.module.scss";
import TaskByGroup from "./TaskByGroup/TaskByGroup";

const ContentWrapper = () => {
  return (
    <div className={style.wrapper}>
      <TaskByGroup />
    </div>
  );
};

export default ContentWrapper;
