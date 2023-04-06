"use client";
import Image from "next/image";
import React from "react";

import {AiFillInfoCircle} from 'react-icons/ai'

function SwapPop({ setSwapShow }) {
  return (
    <div className="swappopup" style={{ zIndex: "10000" }}>
      <div className="popContainer w-[550px] h-[460px] bg-[#17191E] rounded-[18px] p-6">
        <div className="flex justify-between">
          <div className="">
            <h2 className="text-[#fff] font-moment font-[400] text-xl ">
            Confirm Swap
            </h2>
          </div>

          <div className="CloseBtn bg-[#F3F3F3] rounded-lg pt-[1px] pb-[3px] px-[10px]">
            <button
              className="text-[#000] text-[13px] font-[800]"
              onClick={() => setSwapShow(false)}
            >
              X
            </button>
          </div>
        </div>

        <div className="mt-5">
          <div className="formWrapper">
          <div>
            <div>
              <input type="number" className=""/>
              <p>$0.181</p>
            </div>

            <div>
            <div className="p-2 text-base rounded-full bg-[#F3F3F3] flex items-center font-moment font-normal">
            <div className="h-[22px] w-[22px] mr-1 mx-auto relative flex">
              <Image src="/images/swap-page-icons/bnbcoin.png" fill alt="" />
            </div >
              BNB
            </div>
            </div>
          </div>

          <div>
            <div>
              <input type="number" className=""/>
              <p>$0.181</p>
            </div>

            <div>
            <div className="p-2 text-base rounded-full bg-[#F3F3F3] flex items-center font-moment font-normal">
            <div className="h-[22px] w-[22px] mr-1 mx-auto relative flex">
              <Image src="/images/swap-page-icons/bnbcoin.png" fill alt="" />
            </div >
              BNB
            </div>
            </div>
          </div>

            <p className="text-[#707776] text-[14px] font-redHat font-[600] mt-3 mb-3">1 EHT = 0.000232 BNB ($1.24)</p>
            <div>
              
            </div>
          
           <button className="green-grad">Confirm Swap</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SwapPop;
