/* eslint-disable no-unused-vars */
import React from "react";

const Education = () => {
  return (
    <section className="bg-transparent animated fadeInUp max-w-screen-xl mx-auto px-4 py-16">
      <h2 className="title text-3xl font-bold sm:text-4xl text-center text-white mb-12">
        Education
      </h2>
      <div className="flex justify-center">
        <article className="w-full max-w-2xl rounded-2xl bg-[#111] border border-gray-800 p-8 shadow-2xl transition-all hover:border-[#836FFF]/50 hover:shadow-[0_0_30px_-5px_rgba(131,111,255,0.2)]">
          <div className="flex flex-col md:flex-row gap-6 items-start">
            <div className="shrink-0 rounded-2xl bg-[#836FFF]/10 p-4 border border-[#836FFF]/20">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-[#836FFF]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M12 14l9-5-9-5-9 5 9 5z" />
                <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                />
              </svg>
            </div>

            <div className="flex-1">
              <h3 className="text-2xl font-bold text-white mb-2 leading-tight">
                SVKM's Mithibai College of Arts, Science and Commerce
              </h3>
              <p className="text-[#836FFF] font-semibold text-lg mb-4">
                Bachelor of Management Studies (Finance) | 2022 – 2025
              </p>

              <div className="inline-block bg-[#836FFF]/20 border border-[#836FFF]/30 px-3 py-1 rounded-full mb-6">
                <span className="text-[#836FFF] text-sm font-black whitespace-nowrap">CGPA: 8.45 / 10</span>
              </div>

              <div className="space-y-4">
                <p className="text-gray-400 text-md leading-relaxed">
                  Specialized in Finance with a focus on quantitative research and strategic analysis.
                  Developed a strong foundation in capital markets, financial modelling, and business logic.
                </p>
                <div className="pt-4 border-t border-gray-800">
                  <p className="text-gray-500 text-sm italic">
                    Key Coursework: Production Management, Cost and Financial Accounts, IT in Business Management, Marketing, Financial Markets, PR, and Strategic Management.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Education;
