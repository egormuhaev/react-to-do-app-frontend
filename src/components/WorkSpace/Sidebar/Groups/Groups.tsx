import React from "react";
import style from "./Groups.module.scss";
import { useAppSelector } from "../../../../hook/redux";
import GroupItem from "./GroupItem/GroupItem";

const Groups = () => {
  const groups = useAppSelector((state) => state.mainAppReducer.group.groupAll);
  const groupsItems = groups.map((element) => (
    <GroupItem key={element.id} id={element.id} text={element.name} />
  ));
  return <div className={style.wrapper}>{groupsItems}</div>;
};

export default Groups;
