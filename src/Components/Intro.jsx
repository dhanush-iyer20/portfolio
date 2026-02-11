/* eslint-disable no-unused-vars */
import React from "react";
import mainimg from "../assets/mainimg.png";

const Intro = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact-section");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="ml-5 mt-10 pt-0 max-w-[80%]">
      <div className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8 sm:mt-[5rem] mt-[8rem]">
        <div className="grid grid-cols-1 lg:h-screen lg:grid-cols-2 animated fadeInUp">
          <div className="relative z-10 lg:py-16">
            <div className="relative h-64 sm:h-80 lg:h-full">
              <img
                alt="Profile"
                src={mainimg}
                className="absolute image-intro inset-0 h-full w-full object-contain mb-5"
              />
            </div>
          </div>

          <div className="relative flex sm:items-left items-center p-0 bg-transparent">
            <div className="p-8 pb-0 sm:p-16 lg:p-24 sm:items-left items-center">
              <h2 className="text-3xl text-white font-bold sm:text-4xl">
                Master Music Production in 8 Weeks! 🎶🔥
              </h2>

              <p className="mt-4 text-gray-500">
                Unlock your full potential with this intensive live course designed to take you from beginner to pro.
                Learn mixing, mastering, beat-making, and industry secrets—all in a hands-on, interactive way.
              </p>

              <button
                onClick={scrollToContact}
                className="mt-6 rounded-lg bg-[#836FFF] px-6 py-3 text-white font-semibold hover:bg-[#6c5ce7] transition duration-300 ease-in-out"
              >
                Get in Touch 🚀
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
