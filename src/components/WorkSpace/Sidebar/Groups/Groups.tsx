import React from "react";
import style from "./Groups.module.scss";
import { useAppSelector } from "../../../../hook/redux";
import GroupItem from "./GroupItem/GroupItem";
import NewGroupForm from "./NewGroupForm/NewGroupForm";

const Groups = () => {
  const groups = useAppSelector((state) => state.mainAppReducer.group.groupAll);
  const { status } = useAppSelector(
    (state) => state.mainAppReducer.group.createGroup
  );
  const groupsItems = groups.map((element) => (
    <GroupItem id={element.id} text={element.name} />
  ));
  return (
    <div className={style.wrapper}>
      {status && <NewGroupForm />}
      {groupsItems}
    </div>
  );
};

export default Groups;
