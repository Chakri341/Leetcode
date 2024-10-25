import Image from "next/image";
import React, { useState } from "react";

type PreferenceNavProps = {};

const PreferenceNav: React.FC<PreferenceNavProps> = () => {

  const [isDarkMode, setisDarkMode] = useState(false);

  const toggleTheme=()=>{
    setisDarkMode(!isDarkMode);
  }
  
  return (
    <div className="flex items-center justify-between bg-dark-layer-2 h-11 w-full mb-2">
      {/* Left Side (Language Selector) */}
      <div className="flex items-center pt-2 text-black overflow-x-hidden">
        <div
          className="bg-gray-200 rounded-md px-5 py-[10px] text-sm cursor-pointer m-2 font-semibold"
        >
          Javascript
        </div>
      </div>

      {/* Right Side (Settings and Expand) */}
      <div className="flex items-center relative pr-5">
        {/* Color Button */}
        <button className="relative group flex items-center rounded p-[3px] ml-4 text-xs cursor-pointer" onClick={toggleTheme}>
          <Image
            src={"/dark-mode.png"}
            height={23}
            width={23}
            alt="settings icon"
            className="hover-image"
          />
          {/* Hidden name, appears on hover */}
          <span className="absolute top-6 left-1/2 transform -translate-x-1/2 mt-1 text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            Theme
          </span>
        </button>
        {/* Settings Button */}
        <div className="relative group flex items-center rounded p-[3px] ml-4 text-xs cursor-pointer">
          <Image
            src={"/cogwheel.png"}
            height={20}
            width={20}
            alt="settings icon"
            className="hover-image"
          />
          {/* Hidden name, appears on hover */}
          <span className="absolute top-6 left-1/2 transform -translate-x-1/2 mt-1 text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            Settings
          </span>
        </div>

        {/* Expand Button */}
        <div className="relative group flex items-center rounded p-[3px] ml-4 text-lg cursor-pointer">
          <Image
            src={"/expand.png"}
            height={20}
            width={20}
            alt="expand icon"
            className="blue-image"
          />
          {/* Hidden name, appears on hover */}
          <span className="absolute top-6 left-1/2 transform -translate-x-1/2 mt-1 text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            Expand
          </span>
        </div>

      </div>
    </div>
  );
};

export default PreferenceNav;
