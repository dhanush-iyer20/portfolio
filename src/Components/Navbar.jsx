/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Resume from "../assets/ResumeDhanush.pdf";

const Navbar = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };
  return (
    <nav className="fixed w-full z-50 top-0 left-0 bg-[#070709]/80 backdrop-blur-xl border-b border-gray-800 animated fadeInDown">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-6 py-4">
        <span className="self-center text-xl font-black whitespace-nowrap text-white uppercase tracking-widest">
          Dhanush<span className="text-[#836FFF]">.</span>
        </span>
        <div className="flex md:order-2">
          <a
            href="https://www.linkedin.com/in/dhanush-iyer"
            target="_blank"
            rel="noreferrer"
          >
            <button
              type="button"
              className="text-white bg-[#836FFF] hover:bg-[#6c5ce7] focus:ring-4 focus:outline-none focus:ring-[#836FFF]/50 font-black rounded-full text-[10px] px-6 py-2.5 text-center uppercase tracking-widest transition-all transform hover:scale-105"
            >
              Get In Touch
            </button>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
