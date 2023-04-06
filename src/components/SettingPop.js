"use client";

import React from "react";
import { MdKeyboardArrowLeft } from "react-icons/md";
import {AiFillInfoCircle} from 'react-icons/ai'

function SettingPop({ setShowPop }) {
  return (
    <div className="popup" style={{ zIndex: "10000" }}>
      <div className="popContainer w-[550px] h-[460px] bg-white rounded-[18px] p-6">
        <div className="flex justify-between">
          <div className="">
            <h2 className="text-[#000] font-moment font-[400] text-xl ">
              Settings
            </h2>
          </div>

          <div className="CloseBtn bg-[#F3F3F3] rounded-lg pt-[1px] pb-[3px] px-[10px]">
            <button
              className="text-[#000] text-[13px] font-[800]"
              onClick={() => setShowPop(false)}
            >
              X
            </button>
          </div>
        </div>

        <div className="mt-5">
          <div className="formWrapper">
            <form className="">
              <div className="py-[12] px-5 flex justify-between align-middle items-center mb-4">
                <div className="flex align-middle items-center">
                  <input type="radio" id="1" name="fav_language" />

                  <h2 className="text-[#707776] font-[400] text-lg ml-4 font-moment">
                    Instant
                  </h2>
                  <MdKeyboardArrowLeft className="text-[#707776] text-[15px] ml-2 " />
                  <p className="text-[#707776] text-[15px]"> 10 sec</p>
                </div>

                <div className="text-ls text-[#707776] ">290.00 Gwei</div>
              </div>

              <div className="active flex justify-between align-middle items-center mb-4">
                <div className="flex align-middle items-center">
                  <input type="radio" id="2" name="fav_language"/>

                  <h2 className="text-[#fff] font-[400] text-lg ml-4 font-moment">
                    High
                  </h2>
                 
                  <p className="text-[#fff] text-[15px] ml-2"> ~ 12 sec </p>
                </div>

                <div className="text-ls text-[#fff] ">290.00 Gwei</div>
              </div>

              <div className="py-[12] px-5 flex justify-between align-middle items-center mb-4">
                <div className="flex align-middle items-center">
                  <input type="radio" id="3" name="fav_language" />

                  <h2 className="text-[#707776] font-[400] text-lg ml-4 font-moment">
                    Medium
                  </h2>

                  <p className="text-[#707776] text-[15px] ml-2"> ~ 30 sec</p>
                </div>

                <div className="text-ls text-[#707776] ">290.00 Gwei</div>
              </div>

              <div className="py-[12] px-5 flex justify-between align-middle items-center mb-4">
                <div className="flex align-middle items-center">
                  <input type="radio" id="4" name="fav_language"/>

                  <h2 className="text-[#707776] font-[400] text-lg ml-4 font-moment">
                    Low
                  </h2>
                 
                  <p className="text-[#707776] text-[15px] ml-2"> ~ 1 min</p>
                </div>

                <div className="text-ls text-[#707776] ">290.00 Gwei</div>
              </div>

              <div className="py-[12] px-5 flex justify-between align-middle items-center mb-4">
                <div className="flex align-middle items-center">
                  <input type="radio" id="5" name="fav_language" />

                  <h2 className="text-[#707776] font-[400] text-lg ml-4 font-moment">
                    Manual time{" "}
                  </h2>
                </div>

                <div className="text-ls text-[#707776] ">290.00 Gwei</div>
              </div>
            </form>

            <p className="text-[#707776] text-[14px] font-redHat font-[600] mt-8">Slippage tolerance</p>
            <div className="flex justify-between items-center my-2">
              <h1 className="text-[#000] font-moment font-[400] text-2xl  ">0.5% </h1>
              <a href="/" className="text-[#000] green-grad px-14 py-3 font-[800] text-[17px]">
                Auto
              </a>
            </div>
            <p className="text-[#000] font-redHat font-[600] flex items-center gap-2 text-sm"><span><AiFillInfoCircle/></span> Your transaction may be front-run</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SettingPop;
