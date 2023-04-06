import React from "react";
import pxToRem from "utils/pxToRem";

const varaints = ["bg-green-gradient text-black", "text-black"];

function BaseButton({
  children,
  variant = 0,
  className,
  borderRadius = 8,
  style,
  ...props
}) {
  return (
    <button
      className={`h-8 px-5 font-bold disabled:opacity-70 ${varaints[variant]} ${className}`}
      style={{ borderRadius: pxToRem(borderRadius), ...style }}
      {...props}
    >
      {children}
    </button>
  );
}

export default BaseButton;
