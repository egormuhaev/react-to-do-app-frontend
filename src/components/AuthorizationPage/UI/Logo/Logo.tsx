import React from "react";
import calendar from '../../img/calendar.png'

const Logo = () => {
  return (
    <div className="h-[100px] w-full flex flex-row justify-center items-center">
      <img className="h-[50px] w-[50px]" src={calendar} alt="Logo" />
      <div className="text-[40px] font-semibold ">
        ToDo
      </div>
    </div>
  );
}

export default Logo;
