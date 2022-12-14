import axios from "axios";
import React from "react";
import { config } from "../../../../config/config";
import { useAppDispatch, useAppSelector } from "../../../../hook/redux";
import { autorizationSlice } from "../../../../store/reducers/AutorizationSlice";
import { routes } from "../../../../config/routes";

const FormPassword = () => {
  const { password, confirmPassword } = useAppSelector(
    (state) => state.autorizationReducer.signUp.registration.formPassword
  );
  const {
    setStatusUsernameSingUp,
    setStatusEmailSingUp,
    setPasswordValue,
    setConfirmPasswordValue,
    setWarringSignUp,
  } = autorizationSlice.actions;
  const dispatch = useAppDispatch();

  return (
    <div className="h-[200px] w-[308px] text-center flex flex-col justify-start items-center border-[1px] border-[#dadbdb] rounded-md">
      <div className="text-[14px] text-start h-[25px] w-[270px] flex flex-col justify-center font-semibold mt-[10px]">
        <p>Password</p>
      </div>
      <input
        onChange={(event) => {
          let text = event.target.value;
          dispatch(setPasswordValue(text));
        }}
        className="h-[32px] w-[270px] rounded-md border-[1px] border-[#dadbdb] font-semibold text-[14px] pl-[5px] pr-[5px]"
        type="text"
        value={password}
      />

      <div className="text-[14px] text-start h-[25px] w-[270px] flex flex-col justify-center font-semibold">
        <p>Confirm Password</p>
      </div>
      <input
        onChange={(event) => {
          let text = event.target.value;
          dispatch(setConfirmPasswordValue(text));
        }}
        className="h-[32px] w-[270px] rounded-md border-[1px] border-[#dadbdb] font-semibold text-[14px] pl-[5px] pr-[5px]"
        type="text"
        value={confirmPassword}
      />

      <div className=" h-[32px] w-[270px] flex flex-row justify-center mt-auto mb-[10px]">
        <button
          className="h-[32px] w-[134px] bg-[#3182B9] font-semibold text-white rounded-md hover:bg-[#1c73e8] ml-0 mr-auto"
          onClick={() => {
            dispatch(setStatusEmailSingUp());
          }}
        >
          Back
        </button>
        <button
          className="h-[32px] w-[134px] bg-[#3182B9] font-semibold text-white rounded-md hover:bg-[#1c73e8] ml-auto mr-0"
          onClick={() => {
            if (password && confirmPassword) {
              axios
                .post(
                  `${config.BASE_API}${routes.BASE_RUOTE}${routes.VALIDATION_PASSWORD}`,
                  {
                    password,
                    confirmPassword,
                  }
                )
                .then((res) => {
                  if (res.data.statusValidation) {
                    dispatch(setStatusUsernameSingUp());
                  } else {
                    dispatch(setWarringSignUp(res.data.message));
                  }
                })
                .catch((e) => {
                  dispatch(setWarringSignUp(e.message));
                });
            } else {
              dispatch(setWarringSignUp("Form is free"));
            }
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default FormPassword;
