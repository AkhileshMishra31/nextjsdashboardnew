import React from "react";
import { RxAvatar } from "react-icons/rx";
import { GoDotFill } from "react-icons/go";
import { IoPieChart } from "react-icons/io5";
import { RiShoppingBag2Line } from "react-icons/ri";
import { CiFolderOn } from "react-icons/ci";
import { IoMdBook } from "react-icons/io";
import { CiUser } from "react-icons/ci";
import { TiGroup } from "react-icons/ti";
import { TbLogin2 } from "react-icons/tb";

const Sidebar = () => {
  return (
    <div className="w-full h-screen overflow-y-auto bg-white text-black">
      <div className="ml-6 p-4 flex items-center">
        <RxAvatar size={23} />
        <h3 className="ml-3 font-bold">ByeWind</h3>
      </div>
      <div className="mt-3">
        <div className="flex items-center justify-evenly">
          <span className="opacity-70">Favourites</span>
          <span className="opacity-50">Recently</span>
        </div>
        <div className="flex flex-col ml-8 justify-between mt-3">
          <p className="mt-2 flex items-center">
            <GoDotFill />
            overview
          </p>
          <p className="mt-4  flex items-center">
            <GoDotFill />
            Projects
          </p>
        </div>
      </div>
      <div className="p-4 pb-2 flex-col">
        <span className="opacity-70 ml-4">Dashboard</span>
        <div className="flex items-center pl-[10px] pr-[10px] pt-[10px] pb-[10px] ml-3 bg-gray-300 rounded-lg mt-1 cursor-pointer">
          <IoPieChart />
          <span className="ml-4">Overview</span>
        </div>
        <div className="flex items-center pl-[10px] pr-[10px] pt-[10px] pb-[10px] ml-3 rounded-lg mt-1 cursor-pointer">
          <RiShoppingBag2Line />
          <span className="ml-4">eCommerce</span>
        </div>
        <div className="flex items-center pl-[10px] pr-[10px] pt-[10px] pb-[10px] ml-3 rounded-lg mt-1 cursor-pointer">
          <CiFolderOn />
          <span className="ml-4">Projects</span>
        </div>
        <div className="flex items-center pl-[10px] pr-[10px] pt-[10px] pb-[10px] ml-3 rounded-lg mt-1 cursor-pointer">
          <IoMdBook />
          <span className="ml-4">Online Courses</span>
        </div>
      </div>
      <div className="p-4 pt-2 flex-col">
        <span className="opacity-70 ml-4 ">pages</span>
        <div className="flex items-center pl-[10px] pr-[10px] pt-[10px] pb-[10px] ml-3">
          <CiUser />
          <span className="ml-4">User Profile</span>
        </div>
        <div className="flex items-center pl-[10px] pr-[10px] pt-[10px] pb-[10px] ml-7 rounded-lg mt-1">
          <span className="ml-4">eCommerce</span>
        </div>
        <div className="flex items-center pl-[10px] pr-[10px] pt-[10px] pb-[10px]  ml-7 rounded-lg mt-1">
          <span className="ml-4">Projects</span>
        </div>
        <div className="flex items-center pl-[10px] pr-[10px] pt-[10px] pb-[10px]  ml-7 rounded-lg mt-1">
          <span className="ml-4">Online Courses</span>
        </div>
        <div className="flex items-center pl-[10px] pr-[10px] pt-[10px] pb-[10px]  ml-7 rounded-lg mt-1">
          <span className="ml-4">follower</span>
        </div>
      </div>
      <div className="flex items-center pl-[10px] pr-[10px] pt-[10px] pb-[10px] ml-3">
        <CiUser />
        <span className="ml-4">Account</span>
      </div>
      <div className="flex items-center pl-[10px] pr-[10px] pt-[10px] pb-[10px] ml-3">
        <TiGroup />
        <span className="ml-4">Corporate</span>
      </div>
      <div className="flex items-center pl-[10px] pr-[10px] pt-[10px] pb-[10px] ml-3">
        <TbLogin2/>
        <span className="ml-4">Blog</span>
      </div>
      <div className="flex items-center pl-[10px] pr-[10px] pt-[10px] pb-[10px] ml-3">
        <CiUser />
        <span className="ml-4">Social</span>
      </div>
    </div>
  );
};

export default Sidebar;
