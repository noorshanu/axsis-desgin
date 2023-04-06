import SwapBox from "components/SwapBox";
import SidebarLayout from "layout/SidebarLayout";
import SwapLayout from "layout/SwapLayout";

export default function GaslessSwapPage() {
  return (
    <SwapLayout>
      <div className="md:col-span-2 space-y-1">
        <SwapBox title={"Gasless Swap"} />
        <div className="p-5 text-[#D8D8D8] font-redHat font-medium space-y-4 text-sm">
          <div className="w-100% flex justify-between">
            <p>Gas Fees Estimated</p>
            <p>
              $0.5620 <span className="text-[#11FF37]">Free</span>
            </p>
          </div>
          <div className="w-100% flex justify-between">
            <p>Liquidity Provider</p>
            <p>Sushi Swap</p>
          </div>
          <div className="w-100% flex justify-between">
            <p>Minimum Received</p>
            <p>1625.03 DAI</p>
          </div>
          <div className="w-100% flex justify-between">
            <p>Slippage Tolerance</p>
            <p>0.5%</p>
          </div>
          <div className="w-100% flex justify-between">
            <p>Price</p>
            <p>0.0150116 BNB per PNS</p>
          </div>
        </div>
      </div>
    </SwapLayout>
  );
}
