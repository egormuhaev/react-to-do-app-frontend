import React from "react";

interface Props {
  text: string;
}

const Avatar: React.FC<Props> = ({ text }) => {
  const userFirstSymbol = text ? text[0].toUpperCase() : "U";

  return (
    <div
      className={`h-[100px] w-[100px] rounded-full flex flex-row flex-wrap justify-center items-center border-white border-[3px] ml-[30px] mr-auto bg-gradient-to-r from-[#FFEB70] to-[#F02262]`}
    >
      <p className="text-[50px] text-white font-bold">{userFirstSymbol}</p>
    </div>
  );
};

export default Avatar;
