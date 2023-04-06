import Image from "next/image";
import React from "react";


const SwapGraphBox = () => {
  return (
    <>
      <div className="bg-white mb-1 rounded-xl  font-moment  h-auto p-5">
        <div className="flex justify-between">
          <div className="flex">
            <div className="flex items-center text-2xl font-moment text-black">
              <div className="h-[22px] w-[22px] mr-1 mx-auto relative flex">
                <Image src="/images/swap-page-icons/axiscoin.png" fill alt="" />
              </div>
              AXIS /{" "}
              <div className="h-[22px] w-[22px] ml-2 mr-1 mx-auto relative flex">
                <Image src="/images/swap-page-icons/bnbcoin.png" fill  alt=""/>
              </div>
              BNB
            </div>
            <div className=" ml-2 h-9 w-9 flex justify-center items-center bg-gradient-to-tr from-[#ACFFB9]  to-[#11FF37] rotate-158.2 rounded-full">
              <div className="h-[15px] w-[16px] mx-auto relative flex">
                <Image
                  src="/images/swap-page-icons/swap-arrow-hortz.png"
                  fill
                />
              </div>
            </div>
          </div>
          <div className="flex">
            <div className="h-8 w-8 flex justify-center items-center rounded-md bg-[#F3F3F3] cursor-pointer">
              <div className="h-[13px] w-[13px] mx-auto relative flex">
                <Image src="/images/swap-page-icons/expand.png" fill />
              </div>
            </div>
            <div className="ml-1 h-8 w-8 flex justify-center items-center rounded-md bg-[#F3F3F3] cursor-pointer">
              <div className="h-[13px] w-[2px] mx-auto relative flex">
                <Image src="/images/swap-page-icons/3dots-vert.png" fill />
              </div>
            </div>
          </div>
        </div>
        <div className="text-5xl font-medium flex items-center mt-8 font-moment text text-black">
          0.0015{" "}
          <span className="ml-3 text-xl text-[#11FF37] font-redHat font-bold">
            +0.001 (2.12%)
          </span>
        </div>
        <div className="font-normal text-lg text-[#707776] my-2 font-moment">
          AXIS / BNB
        </div>
        <div className="flex items-center justify-between">
          <div className="text-[#BFC0C8] text-[15px] font-medium font-redHat">
            Feb 12, 2022, 03:08 AM
          </div>
          <div className="flex space-x-1">
            <div className="h-8 px-3 flex justify-center items-center rounded-md bg-[#F3F3F3] cursor-pointer">
              <div className="h-[12px] w-[12px] mx-0 relative flex">
                <Image src="/images/swap-page-icons/box.png" fill />
              </div>
              <span className="text-[#6F7675] text-sm font-medium ml-3 mr-1">
                24h
              </span>{" "}
              <div className="h-[7px] w-[10px] mx-0 relative flex">
                <Image src="/images/swap-page-icons/arrow-down.png" fill />
              </div>
            </div>
            <div className="h-8 w-8 flex justify-center items-center rounded-md bg-gradient-to-b text-black from-[#ACFFB9] to-[#11FF37] cursor-pointer">
              <div className="h-[20px] w-[20px] mx-0 relative flex">
                <Image src="/images/swap-page-icons/filter.png" fill />
              </div>
            </div>
            <div className="h-8 w-8 flex justify-center items-center rounded-md bg-[#F3F3F3] cursor-pointer">
              <div className="h-[17px] w-[19px] mx-0 relative flex">
                <Image src="/images/swap-page-icons/graph.png" fill />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10 space-y-3 text-sm relative">
          <Image
            src="/images/swap-page-icons/graphs.svg"
            className="h-[118%] w-auto "
            fill
          />
          <div className="flex items-center text-[#BFC0C8] font-redHat">
            <div className="h-[2px] w-[100%] bg-[#F0F1F2] mr-3" />
            <div className="w-14 text-center">0.0027</div>
          </div>
          <div className="flex items-center text-[#BFC0C8] font-redHat">
            <div className="h-[2px] w-[100%] bg-[#F0F1F2] mr-3" />
            <div className="w-14 text-center">0.0027</div>
          </div>
          <div className="flex items-center text-[#BFC0C8] font-redHat">
            <div className="h-[2px] w-[100%] bg-[#F0F1F2] mr-3" />
            <div className="w-14 text-center">0.0027</div>
          </div>
          <div className="flex items-center text-[#BFC0C8] font-redHat">
            <div className="h-[2px] w-[100%] bg-[#F0F1F2] mr-3" />
            <div className="w-14 text-center">0.0027</div>
          </div>
          <div className="flex items-center text-[#BFC0C8] font-redHat">
            <div className="h-[2px] w-[100%] bg-[#F0F1F2] mr-3" />
            <div className="w-14 text-center">0</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SwapGraphBox;
