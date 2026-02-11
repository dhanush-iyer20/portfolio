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
    <section className="bg-transparent animated fadeInUp max-w-screen-xl mx-auto px-6 py-16 sm:py-24 lg:py-32">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div className="relative order-2 lg:order-1">
          <div className="inline-flex items-center gap-2 bg-[#836FFF]/10 text-[#836FFF] text-[10px] font-black px-3 py-1 rounded-full border border-[#836FFF]/20 mb-6 tracking-widest uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-[#836FFF] animate-pulse"></span>
            Front-End × Finance × Automation
          </div>

          <h1 className="text-5xl sm:text-7xl font-black text-white leading-[1.1] mb-8 tracking-tighter">
            To live is to <br />
            <span className="text-[#836FFF]">build.</span>
          </h1>

          <p className="text-gray-400 text-lg sm:text-xl leading-relaxed mb-10 max-w-xl">
            Currently optimizing global insights at Citi, but my heart lies in the 0-to-1 journey.
            I build systems that bridge complex finance with clean code.
          </p>

          <div className="flex flex-wrap gap-6 items-center">
            <button
              onClick={scrollToContact}
              className="group relative inline-flex items-center gap-3 bg-[#836FFF] hover:bg-[#6c5ce7] text-white font-black text-xs uppercase tracking-[0.2em] px-10 py-5 rounded-full shadow-[0_0_30px_-5px_rgba(131,111,255,0.4)] transition-all transform hover:scale-105"
            >
              Start Building 🚀
            </button>
          </div>
        </div>

        <div className="relative order-1 lg:order-2">
          <div className="relative aspect-square max-w-[500px] mx-auto">
            <div className="absolute inset-0 bg-gradient-to-tr from-[#836FFF]/20 to-transparent rounded-3xl rotate-6 -z-10 blur-2xl"></div>
            <img
              alt="Profile"
              src={mainimg}
              className="w-full h-full object-contain filter drop-shadow-[0_0_30px_rgba(131,111,255,0.2)] transition-transform duration-700 hover:scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
