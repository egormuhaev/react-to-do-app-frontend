import React from "react";
import style from "../Task.module.scss";

interface Props {
  name: string | number;
}

const TaskItem: React.FC<Props> = ({ name }) => {
  return (
    <div className={style.task}>
      <p>{name}</p>
    </div>
  );
};

export default TaskItem;
