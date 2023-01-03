import React, { useEffect } from "react";
import SideBar from "./Sidebar/SideBar";
import Header from "./Header/Header";
import { useAppDispatch, useAppSelector } from "../../hook/redux";
import { fetchAllGroupsByUser } from "../../store/reducers/ActionCreator";
const WorkSpace = () => {
  const { id } = useAppSelector((state) => state.mainAppReducer.userData);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchAllGroupsByUser(id));
  }, []);

  
  return (
    <div className="h-[100vh] w-[100%]">
      <SideBar />
    </div>
  );
};

export default WorkSpace;
