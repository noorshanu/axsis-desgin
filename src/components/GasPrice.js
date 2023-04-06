import React from "react";

const GasPrice = () => {
  return (
    <div className="bg-white rounded-xl px-4 py-5 text-[#B6B6B6]">
      {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((e, i) => (
        <p className="py-2 border-b border-[#F0F1F2]" key={i}>
          Gas Price High (240.00 Gwei)
        </p>
      ))}
    </div>
  );
};

export default GasPrice;
