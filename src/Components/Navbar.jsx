/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Resume from "../assets/ResumeDhanush.pdf";

const Navbar = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };
  return (
    <nav className="bg-gradient fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600 animated fadeInDown ">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 ">
        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
          Dhanush Iyer
        </span>
        <div className="flex md:order-2">
          <a
            href="https://www.linkedin.com/in/dhanush-iyer"
            target="_blank"
            rel="noreferrer"
          >
            <button
              type="button"
              className="text-white background-button focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              {"LinkedIn"}
            </button>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
