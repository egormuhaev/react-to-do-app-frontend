import React from "react";

interface Props {
  id: string | number;
  email: string;
  username: string;
}

const ProfileCard: React.FC<Props> = ({ id, email, username }) => {
  const userFirstSymbol = username ? username[0].toUpperCase() : "U";
  return (
    <div className="h-[400px] min-w-[800px] bg-[#3182B9] flex flex-row justify-start items-center rounded-md">
      <div className="h-[200px] w-[200px] bg-black rounded-full flex flex-row justify-center items-center border-white border-[3px] ml-[30px] mr-auto">
        <p className="text-[100px] text-white font-bold">{userFirstSymbol}</p>
      </div>
      <div className="text-[30px] text-white font-semibold ml-[10px] mr-[auto] h-[200px] min-w-[500px] flex flex-col justify-around items-start">
        <div>Username: {username}</div>
        <div>Email: {email}</div>
        <div>ID: {id}</div>
      </div>
    </div>
  );
};

export default ProfileCard;
