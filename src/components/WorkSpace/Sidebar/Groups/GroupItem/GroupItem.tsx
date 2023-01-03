import React from "react";
import style from "./GroupItem.module.scss";

interface Props {
  text: string | undefined;
}

const GroupItem: React.FC<Props> = ({ text }) => {
  return (
    <div className={style.item}>
      <p>{text}</p>
    </div>
  );
};

export default GroupItem;
