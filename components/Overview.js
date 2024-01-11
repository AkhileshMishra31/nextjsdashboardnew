"use client";
import React, { useState } from "react";
import { FaArrowUp } from "react-icons/fa";
// import { Line } from "react-chartjs-2";
import { IoIosArrowUp } from "react-icons/io";

import { BsGraphUpArrow } from "react-icons/bs";

import { GoDotFill } from "react-icons/go";

import Linechart from "./Linechart";
import Barcharts from "./Barcharts";
import PieChart from "./PieChart";
import SocialChart from "./SocialChart";

const Overview = () => {
  return (
    <div
      className={`p-5 h-screen overflow-y-auto no-scrollbar`}
      style={{ height: `calc(100vh - ${60}px)` }}
    >
      <div className="flex justify-between items-center">
        <span className="font-bold">overview</span>
        <span>today</span>
      </div>
      <div className="grid grid-cols-4 gap-[20px] mt-3 h-[140px]">
        <div className="p-7 px-[45px] border-2 rounded-lg flex flex-col justify-between bg-[#87CEFA]">
          <p className="font-bold">Views</p>
          <div className="flex justify-between items-center">
            <p className="text-[500] font-bold text-2xl ">7,265</p>
            <div className="flex items-center">
              <p className="mr-2">+11.02</p>
              <BsGraphUpArrow />
            </div>
          </div>
        </div>
        <div className="p-7 px-[45px] border-2 rounded-lg flex flex-col justify-between bg-[#b0a9cd]">
          <p className="font-bold">Visits</p>
          <div className="flex justify-between items-center">
            <p className="text-[500] font-bold text-2xl ">3,671</p>
            <div className="flex items-center">
              <p className="mr-2">+11.02</p>
              <BsGraphUpArrow />
            </div>
          </div>
        </div>
        <div className="p-7 px-[45px] border-2 rounded-lg flex flex-col justify-between bg-[#87CEFA]">
          <p className="font-bold">New Users</p>
          <div className="flex justify-between items-center">
            <p className="text-[500] font-bold text-2xl ">156</p>
            <div className="flex items-center">
              <p className="mr-2">+11.02</p>
              <BsGraphUpArrow />
            </div>
          </div>
        </div>
        <div className="p-7 px-[45px] border-2 rounded-lg flex flex-col justify-between bg-[#b0a9cd]">
          <p className="font-bold">Active Users</p>
          <div className="flex justify-between items-center">
            <p className="text-[500] font-bold text-2xl ">3,671</p>
            <div className="flex items-center">
              <p className="mr-2">+11.02</p>
              <BsGraphUpArrow />
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-[20px] h-[350px] mt-2 overflow-hidden">
        <div className="col-span-3 p-4 rounded-lg bg-gray-100">
          <div className="flex w-[70%] p-[10px] justify-between items-center ml-2">
            <p className="font-bold">Total Users</p>
            <p className="opacity-[70%]">Total Projects</p>
            <p className="opacity-[70%]">Operating Status</p>
            <span>|</span>
            <p className="flex items-center">
              <GoDotFill />
              This year
            </p>
            <p className="flex items-center">
              <GoDotFill className="opacity-[70%]" />
              Last year
            </p>
          </div>
          <Linechart />
        </div>
        <div className="col-span-1 bg-gray-100 p-4 rounded-lg">
          <SocialChart/>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-[20px] h-[350px] mt-[20px]">
        <div className="col-span-1 bg-gray-100 rounded-lg">
          <Barcharts/>
        </div>
        <div className="col-span-1  bg-gray-100">
          <PieChart/>
        </div>
      </div>
    </div>
  );
};

export default Overview;
