import React, { useEffect } from "react";
import SideBar from "./Sidebar/SideBar";
import Header from "./Header/Header";
import { useAppDispatch, useAppSelector } from "../../hook/redux";
import { fetchAllGroupsByUser } from "../../store/reducers/ActionCreator";
import { mainAppSlice } from "../../store/reducers/MainAppSlice";
import ModalRenameGroup from "./Header/HeaderByGroup/ModalRenameGroup/ModalRenameGroup";
import ContentWrapper from "./ContentWrapper/ContentWrapper";

const WorkSpace = () => {
  const { id } = useAppSelector((state) => state.mainAppReducer.userData);
  const { renameGroup } = useAppSelector((state) => state.mainAppReducer.group);
  const { group } = useAppSelector(
    (state) => state.mainAppReducer.activeSection
  );
  const dispatch = useAppDispatch();
  const { setUserData } = mainAppSlice.actions;

  useEffect(() => {
    if (id === "") {
      dispatch(
        setUserData({
          id: localStorage.getItem("id_to_do_app") as string | number,
          email: localStorage.getItem("email_to_do_app") as string,
          username: localStorage.getItem("username_to_do_app") as string,
          password: localStorage.getItem("password_to_do_app") as string,
        })
      );
      dispatch(
        fetchAllGroupsByUser(
          localStorage.getItem("id_to_do_app") as string | number
        )
      );
    } else {
      dispatch(fetchAllGroupsByUser(id));
    }
  });

  return (
    <div className="h-[100vh] w-[100%] flex flex-row justify-center bg-[#e4e4e4]">
      <SideBar />
      <div className="w-[95%] m-[10px] flex flex-col justify-start">
        <Header />
        <ContentWrapper />
      </div>
      {renameGroup.status && group && <ModalRenameGroup />}
    </div>
  );
};

export default WorkSpace;
