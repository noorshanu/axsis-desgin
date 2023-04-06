import React from "react";
import cryptocurrencyConstants from "constants/cryptocurrencyConstants";

const Pool = () => {
  return (
    <div className="flex items-center space-x-5">
      <div className="flex items-center space-x-3">
        <div className="flex items-center">
          <img src={cryptocurrencyConstants.ETH.icon} className="w-6" alt="" />
          <img src={cryptocurrencyConstants.BNB.icon} className="w-6" alt="" />
        </div>
        <p className="text-sm font-extrabold text-black">ETH/BNB</p>
      </div>

      <div className="h-7 w-[70px] flex items-center justify-center text-center bg-green-gradient rounded-[60px] text-black text-sm font-bold">
        0.05%
      </div>
    </div>
  );
};

function TopPoolsTable() {
  return (
    <table className="text-black w-full border-collapse">
      <thead>
        <tr className="border-b-2 border-[rgba(0,0,0,.2)] h-10">
          <td className="text-sm font-bold text-black opacity-60"></td>
          <td className="text-sm font-bold text-black opacity-60">Pools</td>
          <td className="text-sm font-bold text-black opacity-60">TVL</td>
          <td className="text-sm font-bold text-black opacity-60">
            Volume 24H
          </td>
          <td className="text-sm font-bold text-black opacity-60">Volume 7D</td>
        </tr>
      </thead>
      <tbody>
        {new Array(10).fill("").map((_, i) => (
          <tr key={i} className="h-14">
            <td className="text-base font-extrabold text-center pl-1 pr-4">
              {i + 1}
            </td>
            <td>
              <Pool />
            </td>
            <td className="font-extrabold text-sm">$264.97M</td>
            <td className="font-extrabold text-sm">$270.39M</td>
            <td className="font-extrabold text-sm">$270.39M</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default TopPoolsTable;
