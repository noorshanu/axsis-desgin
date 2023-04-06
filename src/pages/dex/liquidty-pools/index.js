import BaseButton from "components/BaseButton";
import Paper from "components/Paper";
import TopPoolsTable from "components/TopPoolsTable";
import { useState } from "react";
import { FiArrowUpLeft, FiArrowUpRight, FiChevronDown } from "react-icons/fi";
import { AiFillSetting } from "react-icons/ai";
import SelectPair from "components/SelectPair";
import cryptocurrencyConstants from "constants/cryptocurrencyConstants";
import DepositAmount from "components/DepositAmount";
import StartingPrice from "components/StartingPrice";

const StatCard = ({ title, subtitle }) => {
  return (
    <Paper className="text-[90%]">
      <div>
        <div className="mb-4 flex items-center space-x-3">
          <div className="w-9 h-9 flex items-center justify-center rounded-full bg-green-gradient"></div>
          <p className="font-moment font-normal text-sm text-black">{title}</p>
        </div>
        <p className="font-moment text-3xl font-normal text-center text-black">
          {subtitle}
        </p>
      </div>
    </Paper>
  );
};

const PriceCounter = ({ title, subtitle }) => {
  const [count, setCount] = useState(0);
  return (
    <div className="bg-light-grayish py-4 px-4 rounded-xl">
      <p className="text-center font-bold text-sm mb-3">{title}</p>

      <div className="flex items-center justify-between mb-3">
        <button
          onClick={() => setCount((val) => val - 1)}
          className="text-2xl font-extrabold w-[40px] h-[40px] bg-green-gradient rounded-xl"
        >
          -
        </button>
        <p className="text-center text-lg font-extrabold">{count}</p>
        <button
          onClick={() => setCount((val) => val + 1)}
          className="text-2xl font-extrabold w-[40px] h-[40px] bg-green-gradient rounded-xl"
        >
          +
        </button>
      </div>

      <p className="text-center font-medium text-sm">{subtitle}</p>
    </div>
  );
};

export default function LiquidtyPools() {
  const [liquidtyTab, setLiquidityTab] = useState(1);

  return (
    <div className="grid grid-cols-[1fr_.8fr] gap-1 text-black pr-1">
      <div className="grid gap-1 content-start">
        <div className="grid grid-cols-3 gap-1">
          <StatCard title="Total TVL" subtitle="$5M" />
          <StatCard title="Volume 24H" subtitle="$280M" />
          <StatCard title="Volume 7D" subtitle="$7.2B" />
        </div>
        <Paper>
          <h1 className="font-moment font-normal text-3xl mb-4 text-black">
            Top Pools
          </h1>

          <TopPoolsTable />

          <div className="flex items-center justify-between mb-0 mt-4">
            <button className="text-black text-2xl">
              <FiArrowUpLeft />
            </button>

            <p className="text-center text-xs font-extrabold text-black">
              Page 1 of 5
            </p>

            <button className="text-black text-2xl">
              <FiArrowUpRight />
            </button>
          </div>
        </Paper>
      </div>

      <div className="grid gap-1 content-start">
        <Paper>
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-normal font-moment text-black">
              Add Liquidity
            </h1>

            <div className="flex space-x-2">
              <div className="flex rounded-lg p-[3px] bg-light-grayish">
                <BaseButton
                  variant={liquidtyTab === 1 ? 0 : 1}
                  onClick={() => setLiquidityTab(1)}
                >
                  ETH
                </BaseButton>
                <BaseButton
                  variant={liquidtyTab === 2 ? 0 : 1}
                  onClick={() => setLiquidityTab(2)}
                >
                  DNT
                </BaseButton>
              </div>

              <BaseButton
                variant={1}
                className="bg-light-grayish text-xl h-auto px-[.7rem] text-[rgba(0,0,0,.6)]"
              >
                <AiFillSetting />
              </BaseButton>
            </div>
          </div>
        </Paper>

        <SelectPair />
        <DepositAmount />
        <StartingPrice />

        <Paper>
          <p className="text-lg font-extrabold mb-3">Set Price Range</p>

          <div className="grid grid-cols-2 gap-1">
            <PriceCounter title="Min Price" subtitle="BNB per ETH" />
            <PriceCounter title="Max Price" subtitle="BNB per ETH" />
          </div>
        </Paper>

        <BaseButton
          className="font-moment text-lg font-normal h-[50px]"
          borderRadius={12}
        >
          Enter an amount
        </BaseButton>
      </div>
    </div>
  );
}
