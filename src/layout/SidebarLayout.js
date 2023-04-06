import SideBar from "components/SideBar";
import React from "react";

function SidebarLayout({ children }) {
  return (
    <div>
      <SideBar />

      <div className="w-full pl-[220px]">
        <main>{children}</main>
      </div>
    </div>
  );
}

export default SidebarLayout;
