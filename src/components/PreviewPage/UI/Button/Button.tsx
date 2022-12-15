import React from "react";
import { Link } from "react-router-dom";

type typeBtn = "primary-solid" | "text" | "primary-outline";

interface Props {
  pathTo: string;
  text: string;
  type?: typeBtn | undefined;
}

const Button: React.FC<Props> = ({ pathTo, text, type = "text" }) => {
  let mainStyleBtn: string | undefined;

  switch (type) {
    case "primary-solid":
      mainStyleBtn = "text-white bg-[#3182B9] hover:bg-[#0065AA]";
      break;
    case "primary-outline":
      mainStyleBtn = "text-[#3182B9] border-[1px] border-[#3182B9]";
      break;
    case "text":
      mainStyleBtn = "text-black";
  }

  return (
    <div className="">
      <Link to={`${pathTo}`}>
        <button
          className={`${mainStyleBtn} h-[36px] w-[100px] ml-[5px] mr-[5px] font-semibold rounded-md`}
        >
          {text}
        </button>
      </Link>
    </div>
  );
};

export default Button;
