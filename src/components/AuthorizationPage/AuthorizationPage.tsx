import React from "react";
import WrapperSignIn from "./WrapperSignIn/WrapperSignIn";
import WraperSignUp from "./WrapperSignUp/WrapperSignUp";
import { Route, Routes } from "react-router-dom";

const AuthorizationPage = () => {
  return (
    <div className="h-[100vh] w-full">
      <Routes>
        <Route path="/signin" element={<WrapperSignIn />} />
        <Route path="/signup" element={<WraperSignUp />} />
      </Routes>
    </div>
  );
};

export default AuthorizationPage;
