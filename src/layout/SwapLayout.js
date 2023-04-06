import GasPrice from "components/GasPrice";
import SwapGraphBox from "components/SwapGraphBox";
import React from "react";

function SwapLayout({ children }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-5 w-full gap-1">
      <div className="md:col-span-3 h-auto py-1">

        <SwapGraphBox />
        <div className="grid grid-cols-2 gap-1  ">
          <GasPrice />
          <GasPrice />
        </div>
      </div>
      {children}
    </div>
  );
}

export default SwapLayout;
