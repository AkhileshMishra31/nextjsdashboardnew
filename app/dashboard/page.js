import Navbar from "@/components/Navbar";
import Notification from "@/components/Notification";
import Overview from "@/components/Overview";
import Sidebar from "@/components/Sidebar";
import React from "react";

const dashboard = () => {
  return (
    <div className="flex h-screen bg-blue-500 w-full">
      {/* sidebar */}
      <div className="w-[15%] bg-white border-r-2">
        <Sidebar />
      </div>
      {/* middle section */}
      <div
        className="w-[68%] h-screen no-scrollbar bg-white border-r-2"
        style={{
          overflowY: "auto",
          scrollbarWidth: "thin",
          scrollbarColor: "transparent transparent",
        }}
      >
        <Navbar />
        {/* overview */}
        <Overview />
      </div>
      {/* notification */}
      <div className="w-[17%] bg-white border-r-2">
        <Notification />
      </div>
    </div>
  );
};

export default dashboard;
