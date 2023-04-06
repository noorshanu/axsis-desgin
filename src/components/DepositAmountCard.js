import React from "react";
import cryptocurrencyConstants from "constants/cryptocurrencyConstants";

const DepositAmountCard = () => {
  return (
    <div className="bg-light-grayish py-3 px-4 rounded-xl">
      <div className="flex items-center justify-between mb-5">
        <p className="text-lg text-black font-extrabold">0</p>

        <div className="bg-black h-[32px] pl-2 pr-4 flex items-center space-x-1 rounded-[60px]">
          <img
            src={cryptocurrencyConstants.BNB.icon}
            className="w-5 invert"
            alt=""
          />
          <p className="text-sm font-moment font-normal text-white">
            {cryptocurrencyConstants.BNB.symbol}
          </p>
        </div>
      </div>

      <p className="text-right text-black opacity-50 font-semibold text-sm">
        Balance: 0
      </p>
    </div>
  );
};
export default DepositAmountCard;
