import React from "react";
import { Link } from "react-router-dom";
import Button from "./UI/Button/Button";

const PreviewPage = () => {
  return (
    <div>
      <div className="h-[56px] w-full">
        <Button pathTo="/autorization/signin" text="Sign In"></Button>
        <Button pathTo="/autorization/signup" text="Sign Up"></Button>
      </div>
    </div>
  );
};

export default PreviewPage;
