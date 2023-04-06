"use client";
import React, { useState } from "react";
import { FaCheckDouble, FaCoins, FaSave } from "react-icons/fa";
import SettingPop from "./SettingPop";
import SwapPop from "./SwapPop";
import SidebarLayout from "layout/SidebarLayout";
import Image from "next/image";

const SwapBox = ({ title }) => {
  const [showPop, setShowPop] = useState(false);
  const [swapShow, setSwapShow] = useState(false);
  return (
    <>
      <div className="bg-white rounded-lg px-3 py-4 my-1 relative">
        <div className="absolute right-[46%] -bottom-[20px] ml-2 h-10 w-10 flex justify-center items-center bg-gradient-to-tr from-[#ACFFB9]  to-[#11FF37] rotate-158.2 rounded-full">
        <div className="h-[15px] w-[16px] mx-auto relative flex">
              <Image src="/images/swap-page-icons/swap-arrow-vert.png" fill />
            </div >
        </div>
        <div className="flex justify-between mb-11">
          <div className="text-3xl font-moment text-black ">{title}</div>
          <div className="flex">
            {title == "Gasless Swap" && (
              <div className="h-8 w-14 flex text-[#727575] items-center text-sm font-medium justify-center rounded-md bg-[#F3F3F3] cursor-pointer">
                <FaCoins className=" mr-2" /> <span className="text-[#727575]">61</span> 
              </div>
            )}
            <div
              className="ml-1 h-8 w-8 flex justify-center items-center rounded-md bg-[#F3F3F3] cursor-pointer"
              onClick={() => setShowPop(true)}
            >
              <div className="h-[18px] w-[18px] mx-0 relative flex">
              <Image src="/images/swap-page-icons/settings.png" fill />
            </div>
          
            </div>
          </div>
        </div>
        <div className="flex justify-between mb-3">
          <div className="flex font-bold font-moment text-black">
            <div className="p-2 text-base rounded-full bg-[#F3F3F3] flex items-center font-moment font-normal">
            <div className="h-[22px] w-[22px] mr-1 mx-auto relative flex">
              <Image src="/images/swap-page-icons/bnbcoin.png" fill />
            </div >
              BNB
            </div>
            <div className="p-2 text-base rounded-full ml-2">You Pay</div>
          </div>
          <div className="flex font-redHat font-bold text-[#00000095]">
            <div className="ml-1 h-8 w-12 flex justify-center items-center rounded-md  text-sm bg-[#F3F3F3] cursor-pointer">
              25%
            </div>
            <div className="ml-1 h-8 w-12 bg-gradient-to-b from-[#ACFFB9] to-[#11FF37] text-[#000000] flex justify-center items-center rounded-md  text-sm bg-[#F3F3F3] cursor-pointer">
              50%
            </div>
            <div className="ml-1 h-8 w-12 flex justify-center items-center rounded-md  text-sm bg-[#F3F3F3] cursor-pointer">
              75%
            </div>
            <div className="ml-1 h-8 w-12 flex justify-center items-center rounded-md  text-sm bg-[#F3F3F3] cursor-pointer">
              100%
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div className="text-2xl ">
            <span className="text-black font-moment">499</span>
            <span className="text-[#B3B4BD] font-moment">.92949414</span>
          </div>
          <div className="text-base text-[#BFC0C8] font-redHat">
            Balance: 999.855d86311 BNB
          </div>
        </div>
      </div>
      <div className="bg-white rounded-lg px-3 py-4 my-1">
        <div className="flex font-bold font-moment text-black">
          <div className="p-2 text-base rounded-full bg-[#F3F3F3] font-moment font-normal flex items-center">
          <div className="h-[22px] w-[22px] mr-1 mx-auto relative flex">
              <Image src="/images/swap-page-icons/bnbcoin.png" fill  alt=""/>
            </div >
            BNB
          </div>
          <div className="p-2 text-base rounded-full ml-2">You Receive</div>
        </div>
        <div className="flex justify-between items-center mt-4">
          <div className="text-2xl">
            <span className="text-[#B3B4BD] font-moment">33,302.8</span>
          </div>
          <div className="text-base text-[#BFC0C8]">
            Balance: 999.855d86311 AXIS
          </div>
        </div>
      </div>
      <div className="bg-gradient-to-b text-black from-[#ACFFB9] to-[#11FF37] text-[22px] font-extrabold cursor-pointer py-3 rounded-lg font-moment text-center" onClick={() => setSwapShow(true)}>
        Swap
      </div>
      {showPop ? <SettingPop setShowPop={setShowPop} /> : null}
      {swapShow ? <SwapPop setSwapShow={setSwapShow} /> : null}
    </>
  );
};

export default SwapBox;
