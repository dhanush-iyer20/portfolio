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
              <h2 className="text-4xl text-white font-extrabold sm:text-6xl text-left leading-tight">
                I build systems that <span className="text-[#836FFF]">scale.</span> �️
              </h2>

              <p className="mt-6 text-gray-300 text-xl font-medium">
                Full-stack dev by night, finance strategist by day.
              </p>

              <p className="mt-4 text-gray-500 text-lg leading-relaxed">
                Currently optimizing global insights at Citi, but my heart lies in the 0-to-1 journey.
                I've shipped 3+ full-stack apps, automated workflows for shipping giants, and
                converted trash hardware into personal cloud infrastructure.
              </p>

              <div className="flex gap-4 mt-8">
                <button
                  onClick={scrollToContact}
                  className="rounded-full bg-[#836FFF] px-8 py-4 text-white font-bold hover:bg-[#6c5ce7] transition-all transform hover:scale-105"
                >
                  Let's Build 🚀
                </button>
                <a
                  href="#projects"
                  className="rounded-full border border-gray-700 px-8 py-4 text-white font-bold hover:bg-gray-800 transition-all"
                >
                  View Work
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
