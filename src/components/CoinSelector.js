import React from "react";
import { FiChevronDown } from "react-icons/fi";
import cryptocurrencyConstants from "constants/cryptocurrencyConstants";

const CoinSelector = () => {
  return (
    <button className="h-11 pl-3 pr-5 rounded-[60px] bg-light-grayish flex items-center justify-between w-full">
      <span className="flex items-center space-x-2">
        <img src={cryptocurrencyConstants.BNB.icon} className="w-7" alt="" />
        <span className="text-base font-moment text-black font-normal">
          BNB
        </span>
      </span>

      <FiChevronDown className="text-xl" />
    </button>
  );
};

export default CoinSelector;
