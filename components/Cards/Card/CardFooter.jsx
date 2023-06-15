import React from "react";

const CardFooter = ({ address, price, company }) => {
  return (
    <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black to-black/20 shadow-2xl h-[116px] pt-[20px]">
      <div className="px-3 flex flex-col h-full">
        <p className="text-[10px] tracking-[3px] text-center">{address}</p>
        <div className="flex-1 flex justify-between items-center mb-5">
          <div>
            <img src="/images/A.png" alt="" />
          </div>
          <div className="flex flex-col items-center relative">
            <h1 className="text-[12px] tracking-[1px]">£{price} GBP</h1>
            <p className="text-[8px] tracking-[1px]">#ZM7861234567</p>
            {/* <div className="absolute top-0 right-0 flex justify-center items-center">
              <img src="/images/loading.png" alt="" />
              <div className="text-[8px] tracking-[1px] ">53%</div>
            </div> */}
          </div>
          <div>
            <img src={company} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardFooter;
