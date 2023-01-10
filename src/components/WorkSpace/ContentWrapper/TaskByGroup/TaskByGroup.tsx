import React from "react";
import { useAppSelector } from "../../../../hook/redux";
import styleTask from "../Task.module.scss";
import TaskItem from "../TaskItem/TaskItem";
// import style from "./TaskByGroup.module.scss";

const TaskByGroup = () => {
  const { taskAll } = useAppSelector((state) => state.mainAppReducer.task);
  const { selectGroup } = useAppSelector((state) => state.mainAppReducer.group);

  const taskItem = taskAll
    .filter((element) => element.group_id === selectGroup)
    .map((element) => <TaskItem name={element.name} />);

  return <div className={styleTask.wrapper}>{taskItem}</div>;
};

export default TaskByGroup;
