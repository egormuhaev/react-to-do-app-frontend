import React from "react";

interface Props {
  text: string
}

const Title: React.FC<Props> = ({text}) => {
  return (
    <div className="h-[36px]  w-[300px] text-center mt-[10px] mb-[20px] text-[24px] font-semibold">
      {text}
    </div>
  );
}

export default Title;
