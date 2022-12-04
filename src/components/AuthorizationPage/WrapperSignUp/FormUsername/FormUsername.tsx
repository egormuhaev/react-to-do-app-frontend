import React from "react";
import { useAppDispatch, useAppSelector } from "../../../../hook/redux";
import { autorizationSlice } from "../../../../store/reducers/AutorizationSlice";
import { config } from "../../../../config/config";
import { fetchSignUpNewUsers } from "../../../../store/reducers/ActionCreator";
import { requestJsonSignUp } from "../../../../models/IRequests";
import axios from "axios";

const FormUsername = () => {
  const { username } = useAppSelector(
    (state) => state.autorizationReducer.signUp.registration.formUsername
  );
  const { status, textBtn } = useAppSelector(
    (state) => state.autorizationReducer.signUp.isLoading
  );
  const { email } = useAppSelector(
    (state) => state.autorizationReducer.signUp.registration.formEmail
  );
  const { password } = useAppSelector(
    (state) => state.autorizationReducer.signUp.registration.formPassword
  );
  const { setUsernameValue, setStatusPasswordSingUp, setWarringSignUp } =
    autorizationSlice.actions;
  const dispatch = useAppDispatch();

  return (
    <div className="h-[200px] w-[308px] text-center flex flex-col justify-start items-center border-[1px] border-[#dadbdb] rounded-md">
      <div className="text-[14px] text-start h-[25px] w-[270px] flex flex-col justify-center font-semibold mt-[10px]">
        <p>Username</p>
      </div>
      <input
        value={username}
        onChange={(event) => {
          let text = event.target.value;
          dispatch(setUsernameValue(text));
        }}
        className="h-[32px] w-[270px] rounded-md border-[1px] border-[#dadbdb] font-semibold text-[14px] pl-[5px] pr-[5px]"
        type="text"
      />
      <div className="text-[10px] text-start h-[25px] w-[270px] mt-[5px]">
        Example email: @egormuhaev
      </div>

      <div className=" h-[32px] w-[270px] flex flex-row justify-center mt-auto mb-[10px]">
        <button
          className="h-[32px] w-[134px] bg-[#1c4fe8] font-semibold text-white rounded-md hover:bg-[#1c73e8] ml-0 mr-auto"
          onClick={() => {
            dispatch(setStatusPasswordSingUp());
          }}
        >
          Back
        </button>
        <button
          className="h-[32px] w-[134px] bg-[#1c4fe8] font-semibold text-white rounded-md hover:bg-[#1c73e8] ml-auto mr-0"
          onClick={() => {
            if (!status) {
              axios
                .post(`${config.BASE_API}/api_2/validation/username/sign_up`, {
                  username,
                })
                .then((res) => {
                  if (res.data.statusValidation) {
                    let newUserData: requestJsonSignUp = {
                      email: email,
                      username: username,
                      password: password,
                    };
                    dispatch(fetchSignUpNewUsers(newUserData));
                  } else {
                    dispatch(setWarringSignUp(res.data.message));
                  }
                })
                .catch((e) => {
                  dispatch(setWarringSignUp(e.message));
                });
            }
          }}
        >
          {textBtn}
        </button>
      </div>
    </div>
  );
};

export default FormUsername;
