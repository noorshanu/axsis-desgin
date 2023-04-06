import React, { useState } from "react";
import Paper from "./Paper";
import CoinSelector from "./CoinSelector";
import BaseButton from "./BaseButton";
import TierCard from "./TierCard";

function SelectPair() {
  const [tier, setTier] = useState(3);

  return (
    <Paper>
      <p className="text-lg font-extrabold mb-3">Select Pair</p>

      <div className="grid grid-cols-2 gap-1 mb-3">
        <CoinSelector />
        <CoinSelector />
      </div>

      <div className="flex items-center justify-between h-12 px-5 bg-light-grayish rounded-xl mb-3">
        <p className="text-base font-extrabold">1% fee tier</p>
        <BaseButton>Hide</BaseButton>
      </div>

      <div className="grid grid-cols-4 gap-1">
        <TierCard active={tier === 1} onClick={() => setTier(1)} />
        <TierCard active={tier === 2} onClick={() => setTier(2)} />
        <TierCard active={tier === 3} onClick={() => setTier(3)} />
        <TierCard active={tier === 4} onClick={() => setTier(4)} />
      </div>
    </Paper>
  );
}

export default SelectPair;
