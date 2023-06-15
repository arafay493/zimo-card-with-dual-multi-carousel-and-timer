import React from "react";
import Timer from "./Timer";

const CardHeader = ({countDown}) => {
  // console.log(countDown)
  return (
    <div className="absolute top-0 left-0 w-full bg-gradient-to-b from-black to-black/20 shadow-2xl h-[116px]">
      <Timer countDown = {countDown}/>
    </div>
  );
};

export default CardHeader;
