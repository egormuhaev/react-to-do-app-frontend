import React from "react";
import { useNavigate } from "react-router-dom";
import Avatar from "./Avatar/Avatar";

interface Props {
  id: string | number;
  email: string;
  username: string;
}

const ProfileCard: React.FC<Props> = ({ email, username }) => {
  const navigation = useNavigate();
  return (
    <div
      className="h-[150px] w-[400px] bg-[#3182B9] flex flex-row flex-wrap justify-start items-center rounded-md"
      onClick={() => {
        navigation("/workspace");
      }}
    >
      <Avatar text={username} />
      <div className="text-[15px] text-white font-semibold ml-[10px] mr-[auto] h-[100px] min-w-[250px] flex flex-col justify-around items-start">
        <div className="text-[25px]">{username}</div>
        <div>{email}</div>
      </div>
    </div>
  );
};

export default ProfileCard;
