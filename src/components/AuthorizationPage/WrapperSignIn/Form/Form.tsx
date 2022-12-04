import React from "react";
import { useAppDispatch, useAppSelector } from "../../../../hook/redux";
import { autorizationSlice } from "../../../../store/reducers/AutorizationSlice";
import { fetchSignInUsers } from "../../../../store/reducers/ActionCreator";
import { requersJsonSignIn } from "../../../../models/IRequests";

function Form() {
  const { inputForm, isLoading } = useAppSelector(
    (state) => state.autorizationReducer.signIn
  );
  const dispatch = useAppDispatch();
  const { setUsernameOrEmailValueSignIn, setPasswordSignIn } =
    autorizationSlice.actions;

  return (
    <div className="h-[200px] w-[308px] text-center flex flex-col justify-center items-center border-[1px] border-[#dadbdb] rounded-md">
      <div className="text-[14px] text-start h-[25px] w-[270px] flex flex-col justify-center font-semibold">
        <p>Username or email address</p>
      </div>
      <input
        onChange={(event) => {
          let text: string = event.target.value;
          dispatch(setUsernameOrEmailValueSignIn(text));
        }}
        value={inputForm.usernameOrEmailValue}
        className="h-[32px] w-[270px] rounded-md border-[1px] border-[#dadbdb] font-semibold text-[14px] pl-[5px] pr-[5px]"
        type="text"
      />

      <div className="text-[14px] text-start h-[25px] w-[270px] mt-[20px] flex flex-col justify-center font-semibold">
        <p>Password</p>
      </div>
      <input
        onChange={(event) => {
          if (!isLoading.status) {
            let text: string = event.target.value;
            dispatch(setPasswordSignIn(text));
          }
        }}
        value={inputForm.password}
        className="h-[32px] w-[270px] rounded-md border-[1px] border-[#dadbdb] text-[14px] font-semibold pl-[5px] pr-[5px]"
        type="password"
      />

      <button
        className="h-[32px] w-[270px] bg-[#1c4fe8] font-semibold text-white mt-[15px] rounded-md hover:bg-[#1c73e8]"
        onClick={() => {
          if (
            !isLoading.status &&
            inputForm.usernameOrEmailValue !== "" &&
            inputForm.password !== ""
          ) {
            const reqData: requersJsonSignIn = {
              username: inputForm.usernameOrEmailValue,
              password: inputForm.password,
            };
            dispatch(fetchSignInUsers(reqData));
          }
        }}
      >
        {isLoading.textBtn}
      </button>
    </div>
  );
}

export default Form;
