import React from "react";
import style from "../CatComponent/CatComponent.module.css";
import { Link } from "react-router-dom";

const GetStartConponent = () => {
  return (
    <div className={style.wrapper}>
      <Link to="/autorization/signup">
        <div>
          <button className="h-[80px] w-[250px] rounded-md bg-[#3182b9] text-[30px] text-white font-bold">
            Get Start
          </button>
        </div>
      </Link>
    </div>
  );
};

export default GetStartConponent;
