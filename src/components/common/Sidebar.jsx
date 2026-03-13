import React, { useState, useEffect } from "react";
import { menu } from "../../utils/Helper";
import Icons from "./Icons";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  // Auto hide below lg
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024) {
        setIsOpen(false);
      } else {
        setIsOpen(true);
      }
    };

    handleResize(); // run once on load
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      className={`fixed lg:relative z-50 h-screen lg:h-auto
      rounded-[10px] bg-linear-to-b from-[#01254F] to-[#001B3A] text-white
      flex flex-col justify-between p-2 py-5 shadow-[4px_4px_15px_rgba(0,0,0,0.05)]
      transition-all duration-300
      
      ${isOpen ? "w-61.5 left-0" : "w-16 -left-16 lg:left-0"}
      `}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="absolute -right-3 top-8 bg-white text-black rounded-full w-6 h-6 flex items-center justify-center shadow"
      >
        {isOpen ? "◀" : "▶"}
      </button>

      <div>
        <div className="mb-10">
          <div
            className={`flex items-center ${
              isOpen ? "justify-center gap-1.75" : "justify-center"
            }`}
          >
            <Icons icon={"react"} />

            {isOpen && (
              <h1 className="text-lg font-semibold leading-tight">
                THREAT <br />
                <span className="text-[#1A9BFF]">QUANTUM</span>
                <br />
                AI
              </h1>
            )}
          </div>

          {isOpen && (
            <p className="text-xs font-normal text-white leading-[100%] mt-2 text-center">
              Real-Time Risk. AI-Powered Defense.
            </p>
          )}
        </div>

        <div className="space-y-3">
          {menu.map((item, index) => (
            <Link
              to={item.path}
              key={index}
              className={`flex items-center px-4 py-2 rounded-lg cursor-pointer transition
              ${isOpen ? "gap-3" : "justify-center"}`}
            >
              <span className="text-lg">
                <Icons icon={item.icon} />
              </span>

              {isOpen && (
                <span className="text-sm font-medium leading-[100%]">
                  {item.name}
                </span>
              )}
            </Link>
          ))}
        </div>
      </div>

      {isOpen && (
        <div className="text-xs text-gray-300 flex items-center gap-1">
          <span className="text-lg font-bold">
            <Icons icon={"powered"} />
          </span>
          Powered by Cyber Security Speed
        </div>
      )}
    </div>
  );
};

export default Sidebar;
