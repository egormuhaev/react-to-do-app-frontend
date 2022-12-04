import Form from "./Form/Form";
import Logo from "../UI/Logo/Logo";
import Title from "../UI/Title/Title";
import Warring from "../UI/Warring/Warring";
import { useAppDispatch, useAppSelector } from "../../../hook/redux";
import { autorizationSlice } from "../../../store/reducers/AutorizationSlice";
import { Link } from "react-router-dom";

const WrapperSignIn = () => {
  const dispatch = useAppDispatch();
  const { title, warring } = useAppSelector(
    (state) => state.autorizationReducer.signIn
  );
  const { setStatusEmailSingUp } = autorizationSlice.actions;

  return (
    <div className="h-auto w-full ml-auto mr-auto">
      <Logo />
      <div className="h-auto w-full flex flex-col justify-center items-center">
        <Title text={title} />
        {warring.status && <Warring text={warring.message} />}
        <Form />
        <div
          className="h-[55px] w-[308px] mt-[20px] border-[1px]
        border-[#dadbdb] rounded-md flex flex-col justify-center 
          items-center text-[14px] font-semibold"
          onClick={() => {
            dispatch(setStatusEmailSingUp());
          }}
        >
          <Link to="/autorization/signup">Link create new profile</Link>
        </div>
      </div>
    </div>
  );
};

export default WrapperSignIn;
