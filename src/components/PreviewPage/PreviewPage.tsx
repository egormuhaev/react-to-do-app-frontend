import React from "react";
import Button from "./UI/Button/Button";
import CatComponent from "./CatComponent/CatComponent";

const PreviewPage = () => {
  return (
    <div>
      <header className="h-[100px] w-full  flex flex-row justify-start shadow-xl">
        <div className="h-auto w-auto flex flex-row flex-0wrap justify-center items-center mr-[10px] ml-auto">
          <Button
            pathTo="/autorization/signin"
            text="Sign In"
            type="primary-solid"
          />
          <Button
            pathTo="/autorization/signup"
            text="Sign Up"
            type="primary-outline"
          />
        </div>
      </header>
      <div className="h-auto w-full">
        <CatComponent />
      </div>
    </div>
  );
};

export default PreviewPage;
