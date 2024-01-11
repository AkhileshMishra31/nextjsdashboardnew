import React from "react";
import { PiFilmSlateFill } from "react-icons/pi";
import { CiStar } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import { AiOutlineSearch } from "react-icons/ai";
import { IoSunnyOutline } from "react-icons/io5";
import { IoIosTimer } from "react-icons/io";
import { IoIosNotifications } from "react-icons/io";
const Navbar = () => {
  return (
    <div className="h-[60px] w-full border-b-2">
      <div className="h-full pr-5 pl-5 flex justify-between items-center">
        {/* left */}
        <div className="flex items-center justify-between w-[20%]">
          <PiFilmSlateFill size={26} />
          <CiStar size={26} />
          <p>dashboard</p>
          <p>/</p>
          <p>Default</p>
        </div>
        {/* right */}
        <div className="w-[40%] flex items-center justify-evenly">
          <form className="relative bg-gray-200 p-1 rounded-lg flex items-center">
            <AiOutlineSearch className="text-gray-500 ml-2" size={20} />
            <input
              type="text"
              className="rounded-md py-1 px-4 focus:outline-none focus:border-blue-50 bg-gray-200"
              placeholder="Search"
            />
          </form>
      
          <IoSunnyOutline size={26}/>
          <IoIosTimer size={26}/>
          <IoIosNotifications size={26}/>

        </div>
      </div>
    </div>
  );
};

export default Navbar;
