import React from "react";

const variants = [
  "bg-transparent hover:bg-gradient-to-b hover:from-[#ACFFB9] hover:to-[#11FF37]",
  "bg-gradient-to-b from-[#ACFFB9] to-[#11FF37]",
];

function SidebarButton({ children, className, as = "button", variant = 0 }) {
  const As = as;

  return (
    <As
      className={`flex items-center rounded-lg hover:text-black px-3 h-[40px] text-left ${variants[variant]} ${className}`}
    >
      {children}
    </As>
  );
}

export default SidebarButton;
