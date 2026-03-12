import React from "react";
import { menu } from "../../utils/Helper";
import Icons from "./Icons";


const Sidebar = () => {
 
  return (
    <div className="max-w-61.5 max-h-220 w-full  rounded-[10px] bg-linear-to-b from-[#01254F] to-[#001B3A] text-white flex flex-col justify-between p-5 shadow-[4px_4px_15px_rgba(0,0,0,0.05)]">
      <div>
        <div className="mb-10 ">
            <div className="flex items-center justify-center gap-1.75">
            <Icons icon={"react"}/>
          <h1 className="text-lg font-semibold leading-tight">
            THREAT <br /><span className="text-[#1A9BFF]">QUANTUM</span><br/>AI
          </h1>
          </div>
          <p className="text-xs text-gray-300 mt-2">
            Real-Time Risk. AI-Powered Defense.
          </p>
        </div>

        <div className="space-y-3">
          {menu.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-3 px-4 py-2 rounded-lg cursor-pointer transition"> 
              <span className="text-lg"><Icons icon={item.icon}/></span>
              <span className="text-sm font-medium leading-[100%]">{item.name}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="text-xs text-gray-300 flex items-center gap-1">
        <span className="text-lg font-bold">S</span>
        Powered by Cyber Security Speed
      </div>
    </div>
  );
};

export default Sidebar;
