import React from "react";
import { Link } from "react-router-dom";

interface Props {
  pathTo: string;
  text: string;
}

const Button: React.FC<Props> = ({ pathTo, text }) => {
  return <div>
    <Link to={`${pathTo}`}>
        <button>{text}</button>
    </Link>
  </div>;
};

export default Button;
