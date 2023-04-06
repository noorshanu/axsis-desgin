import SwapBox from "components/SwapBox";
import SwapLayout from "layout/SwapLayout";

export default function AxisSwapPage() {
  return (
    <SwapLayout>
      <div className="md:col-span-2 space-y-1">
        <SwapBox title={"Swap"} />

        <div className="p-5 text-[#D8D8D8] font-redHat font-medium space-y-4 text-sm">
          <div className="w-100% flex justify-between">
            <p>Gas Price High (240.00 Gwei)</p>
            <p></p>
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
