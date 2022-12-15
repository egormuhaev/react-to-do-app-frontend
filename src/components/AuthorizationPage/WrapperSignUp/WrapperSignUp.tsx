import React from "react";
import Logo from "../UI/Logo/Logo";
import Title from "../UI/Title/Title";
import Warring from "../UI/Warring/Warring";
import FormEmail from "./FormEmail/FormEmail";
import FormPassword from "./FormPassword/FormPassword";
import FormUsername from "./FormUsername/FormUsername";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../../hook/redux";

const WraperSignUp = () => {
  const { formEmail, formUsername, formPassword } = useAppSelector(
    (state) => state.autorizationReducer.signUp.registration
  );
  const { title, warring } = useAppSelector(
    (state) => state.autorizationReducer.signUp
  );

  return (
    <div className="h-auto w-full ml-auto mr-auto">
      <Logo />
      <div className="h-auto w-full flex flex-col justify-center items-center">
        <Title text={title} />
        {warring.status && <Warring text={warring.message} />}
        {formEmail.status && <FormEmail />}
        {formPassword.status && <FormPassword />}
        {formUsername.status && <FormUsername />}
        <div
          className="h-[55px] w-[308px] mt-[20px] border-[1px] border-[#dadbdb] rounded-md flex flex-col justify-center 
          items-center text-[14px] font-semibold"
        >
          <Link to="/autorization/signin">Link to Sign In</Link>
        </div>
      </div>
    </div>
  );
};

export default WraperSignUp;
