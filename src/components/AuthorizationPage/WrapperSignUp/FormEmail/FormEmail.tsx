import React from "react";
import { useAppDispatch, useAppSelector } from "../../../../hook/redux";
import { autorizationSlice } from "../../../../store/reducers/AutorizationSlice";
import axios from "axios";
import { config } from "../../../../config/config";
import { routes } from "../../../../config/routes";

function FormEmail() {
  const { email } = useAppSelector(
    (state) => state.autorizationReducer.signUp.registration.formEmail
  );
  const { setStatusPasswordSingUp, setEmailValue, setWarringSignUp } =
    autorizationSlice.actions;
  const dispatch = useAppDispatch();

  return (
    <div className="h-[200px] w-[308px] text-center flex flex-col justify-start items-center border-[1px] border-[#dadbdb] rounded-md">
      <div className="text-[14px] text-start h-[25px] w-[270px] flex flex-col justify-center font-semibold mt-[10px]">
        <p>Email</p>
      </div>
      <input
        value={email}
        onChange={(event) => {
          let text = event.target.value;
          dispatch(setEmailValue(text));
        }}
        className="h-[32px] w-[270px] rounded-md border-[1px] border-[#dadbdb] font-semibold text-[14px] pl-[5px] pr-[5px]"
        type="text"
      />
      <div className="text-[10px] text-start h-[25px] w-[270px] mt-[5px]">
        Example email: todo@todo.com
      </div>

      <button
        className="h-[32px] w-[270px] bg-[#3182B9] font-semibold text-white rounded-md hover:bg-[#1c73e8] mt-auto mb-[10px]"
        onClick={() => {
          if (email) {
            axios
              .post(
                `${config.BASE_API}${routes.BASE_RUOTE}${routes.VALIDATION_EMAIL}`,
                {
                  email,
                }
              )
              .then((res) => {
                console.log(res.data.statusValidation);
                if (res.data.statusValidation) {
                  dispatch(setStatusPasswordSingUp());
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
  );
}

export default FormEmail;
