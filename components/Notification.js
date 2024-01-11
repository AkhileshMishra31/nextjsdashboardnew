import React from "react";
import { IoBugOutline } from "react-icons/io5";
import { FaRegUserCircle } from "react-icons/fa";

const Notification = () => {
  return (
    <div className="h-screen p-[10px] overflow-y-auto">
      {/* notification */}
      <div>
        <h1>Notificatiom</h1>
        <div>
          <div className="flex justify-between items-center">
            <div className="w-[10%] p-[20px]">
              <IoBugOutline />
            </div>
            <div className="w-[90%] ml-2">
              <p>You fixed a bug.</p>
              <span className="opacity-[30%]">just now</span>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <div className="w-[10%] p-[20px]">
              <FaRegUserCircle />
            </div>
            <div className="w-[90%] ml-2">
              <p>New user Registered</p>
              <span className="opacity-[30%]">59 mins ago</span>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <div className="w-[10%] p-[20px]">
              <IoBugOutline />
            </div>
            <div className="w-[90%] ml-2">
              <p>You fixed a bug.</p>
              <span className="opacity-[30%]">12 hours ago</span>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <div className="w-[10%] p-[20px]">
              <IoBugOutline />
            </div>
            <div className="w-[90%] ml-2">
              <p>Andilane subscibed to you</p>
              <span className="opacity-[30%]">just now</span>
            </div>
          </div>
        </div>
      </div>

      {/* Activities */}
      <div className="mt-5">
        <h1>Activities</h1>
        <div>
          <div className="flex justify-between items-center">
            <div className="w-[10%] p-[20px]">
              <FaRegUserCircle />
            </div>
            <div className="w-[90%] ml-2">
              <p>Changed the style.</p>
              <span className="opacity-[30%]">just now</span>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <div className="w-[10%] p-[20px]">
              <FaRegUserCircle />
            </div>
            <div className="w-[90%] ml-2">
              <p>Relaesed a new version</p>
              <span className="opacity-[30%]">59 mins ago</span>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <div className="w-[10%] p-[20px]">
              <IoBugOutline />
            </div>
            <div className="w-[90%] ml-2">
              <p>Submitted a bug.</p>
              <span className="opacity-[30%]">12 hours ago</span>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <div className="w-[10%] p-[20px]">
              <IoBugOutline />
            </div>
            <div className="w-[90%] ml-2">
              <p>Deleted a page in project x</p>
              <span className="opacity-[30%]">just now</span>
            </div>
          </div>
        </div>
      </div>

      {/* Contacts */}

      <div className="mt-7">
        <h1>Contacts</h1>
        <div>
          <div className="flex justify-between items-center">
            <div className="w-[10%] p-[20px]">
              <FaRegUserCircle />
            </div>
            <div className="w-[90%] ml-2">
              <p>Natali Craig</p>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <div className="w-[10%] p-[20px]">
              <FaRegUserCircle />
            </div>
            <div className="w-[90%] ml-2">
              <p>Natali Craig</p>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <div className="w-[10%] p-[20px]">
              <FaRegUserCircle />
            </div>
            <div className="w-[90%] ml-2">
              <p>Drew Cano</p>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <div className="w-[10%] p-[20px]">
              <FaRegUserCircle />
            </div>
            <div className="w-[90%] ml-2">
              <p>Andi lane</p>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <div className="w-[10%] p-[20px]">
              <FaRegUserCircle />
            </div>
            <div className="w-[90%] ml-2">
              <p>Karay okumas</p>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <div className="w-[10%] p-[20px]">
              <FaRegUserCircle />
            </div>
            <div className="w-[90%] ml-2">
              <p>Kate Morrsion</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notification;
