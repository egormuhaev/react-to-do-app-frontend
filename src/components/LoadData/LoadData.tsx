import axios from "axios";
import React, { useState } from "react";
import { config } from "../../config/config";
import { routes } from "../../config/routes";
import { useAppDispatch, useAppSelector } from "../../hook/redux";
import { IMainUserData } from "../../models/IMainUserData";
import { mainAppSlice } from "../../store/reducers/MainAppSlice";
import ProfileCard from "./ProfileCard/ProfileCard";

interface IUD {
  id: string | number;
  username: string;
  email: string;
  password: string;
}

const LoadData = () => {
  const [loadDataStatus, setLoadDataStatus] = useState(false);
  const [ud, setUD] = useState<IUD>({
    id: "",
    username: "",
    email: "",
    password: "",
  });
  const dispatch = useAppDispatch();
  const { setUserData } = mainAppSlice.actions;
  const { id } = useAppSelector<IMainUserData>(
    (state) => state.autorizationReducer.successUserData
  );

  if (!loadDataStatus) {
    try {
      axios
        .get(
          `${config.BASE_API}${routes.BASE_RUOTE}/user/${
            id ? id : sessionStorage.setItem("id_to_do_app", ud.id as string)
          }`
        )
        .then((res) => {
          setUD({
            id: res.data.id,
            email: res.data.email,
            username: res.data.username,
            password: res.data.password,
          });
          if (ud.email !== "" && ud.password !== "" && ud.username !== "") {
            dispatch(
              setUserData({
                id,
                email: ud.email,
                username: ud.username,
                password: ud.password,
              })
            );
            localStorage.setItem("id_to_do_app", ud.id as string);
            localStorage.setItem("email_to_do_app", ud.email);
            localStorage.setItem("username_to_do_app", ud.username);
            localStorage.setItem("password_to_do_app", ud.password);
            setLoadDataStatus(true);
          }
        });
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div className="h-[100vh] w-full flex flex-row justify-center items-center">
      {loadDataStatus ? (
        <ProfileCard id={ud.id} email={ud.email} username={ud.username} />
      ) : (
        <div className="">Loading...</div>
      )}
    </div>
  );
};

export default LoadData;
