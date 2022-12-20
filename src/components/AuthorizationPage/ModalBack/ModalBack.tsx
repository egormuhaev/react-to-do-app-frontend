import React from "react";
import { Link } from "react-router-dom";

const ModalBack = () => {
  return (
    <Link to="/">
      <button className="h-[35px] w-[80px] bg-[#3182B9] text-white font-semibold rounded-md absolute top-[10px] left-[10px]">
        Back
      </button>
    </Link>
  );
};

export default ModalBack;
