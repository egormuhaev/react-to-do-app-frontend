import React from "react";
import { useAppDispatch, useAppSelector } from "../../../../hook/redux";
import { autorizationSlice } from "../../../../store/reducers/AutorizationSlice";
import x from "../../img/x.png";

interface Props {
  text: string;
}

const Warring: React.FC<Props> = ({ text }) => {
  const dispatch = useAppDispatch();
  const { setFalseStatusWarring } = autorizationSlice.actions;

  const closeWarringWindow = () => {
    dispatch(setFalseStatusWarring());
  };

  return (
    <div
      className="h-[55px] w-[308px] mt-[20px] mb-[20px] border-[1px]
        border-[#ff2929] rounded-md flex flex-row justify-center 
        items-center text-[14px] font-semibold bg-red-300"
    >
      <div className="ml-[10px] mr-auto w-full text-center">{text}</div>
      <div className="ml-auto mr-[10px]" onClick={closeWarringWindow}>
        <img className="h-[10px] w-[10px]" src={x} alt="" />
      </div>
    </div>
  );
};

export default Warring;
