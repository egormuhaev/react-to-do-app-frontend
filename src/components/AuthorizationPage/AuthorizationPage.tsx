import React from "react";
import WrapperSignIn from "./WrapperSignIn/WrapperSignIn";
import WraperSignUp from "./WrapperSignUp/WrapperSignUp";
import { Route, Routes } from "react-router-dom";
import ModalBack from "./ModalBack/ModalBack";

const AuthorizationPage = () => {
  return (
    <div className="h-[100vh] w-full">
      <ModalBack />
      <Routes>
        <Route path="/signin" element={<WrapperSignIn />} />
        <Route path="/signup" element={<WraperSignUp />} />
      </Routes>
    </div>
  );
};

export default AuthorizationPage;
