import React, { useEffect } from "react";
import SideBar from "./Sidebar/SideBar";
import Header from "./Header/Header";
import { useAppDispatch, useAppSelector } from "../../hook/redux";
import { fetchAllGroupsByUser } from "../../store/reducers/ActionCreator";
import { mainAppSlice } from "../../store/reducers/MainAppSlice";
const WorkSpace = () => {
  const { id } = useAppSelector((state) => state.mainAppReducer.userData);
  const dispatch = useAppDispatch();
  const { setUserData } = mainAppSlice.actions;

  useEffect(() => {
    if (id === "") {
      dispatch(
        setUserData({
          id: sessionStorage.getItem("id_to_do_app") as string | number,
          email: sessionStorage.getItem("email_to_do_app") as string,
          username: sessionStorage.getItem("username_to_do_app") as string,
          password: sessionStorage.getItem("password_to_do_app") as string,
        })
      );
      dispatch(
        fetchAllGroupsByUser(
          sessionStorage.getItem("id_to_do_app") as string | number
        )
      );
    } else {
      dispatch(fetchAllGroupsByUser(id));
    }
  }, []);

  return (
    <div className="h-[100vh] w-[100%]">
      <SideBar />
    </div>
  );
};

export default WorkSpace;
