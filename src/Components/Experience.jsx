/* eslint-disable no-unused-vars */
import React from "react";
import Dash from '../assets/Photos/12+.png';
import Research from '../assets/Photos/12+2.png';
import AppDev from '../assets/Photos/AppDev.png';
import Humind1 from '../assets/Photos/Humind1.png';
import Humind2 from '../assets/Photos/Humind2.png';
import Humind3 from '../assets/Photos/Humind3.png';
import CLXNS1 from '../assets/Photos/CLXNS 1.png';

const Experience = () => {
  const [selectedImage, setSelectedImage] = React.useState(null);

  // Array of objects containing information for each card
  const experiences = [
    {
      company: "Gulf Agency Company",
      position: "Innovation Intern",
      duration: "Apr 2024 – Sep 2024",
      description: [
        "Designed 15+ Power BI dashboards to track operational and shipping KPIs, enabling data-driven decision making for leadership.",
        "Built a Python-based automation tool to process Excel workflows, saving significant manual effort weekly.",
        "Conducted user research with 100+ B2B users, translating feedback into UX and feature recommendations."
      ],
      links: [
        {
          url: "#",
          imgSrc: Dash,
          title: "Dashboards"
        },
        {
          url: "#",
          imgSrc: AppDev,
          title: "Python Desktop App Development"
        },
        {
          url: "#",
          imgSrc: Research,
          title: "Market Research"
        }
      ]
    },
    {
      company: "IgniteXL Ventures",
      position: "VC Deal Sourcing Intern",
      duration: "Mar 2024 – Apr 2024",
      description: [
        "Evaluated 12+ startups across market size, business model, product differentiation, and financials.",
        "Presented structured insights and investment memos to senior VCs.",
        "Used AI tools like Perplexity, Gemini, ChatGPT for market research and due diligence."
      ],
      links: [
        {
          url: "#",
          imgSrc: Humind1,
          title: "Research Thesis"
        }
        , {
          url: "#",
          imgSrc: Humind2,
          title: "Research Thesis"
        }, {
          url: "#",
          imgSrc: Humind3,
          title: "Research Thesis"
        }
      ]
    },
    {
      company: "Citi Bank",
      position: "Information Analyst",
      duration: "Jun 2025 – Present",
      description: [
        "Synthesizing financial data and macroeconomic insights for global Investment Banking & Markets teams.",
        "Developing VBA-based workflow automations to accelerate research turnaround and decision velocity.",
        "Translating complex business questions into structured, data-driven analysis."
      ],
    },
    {
      company: "OLE-Solutions",
      position: "Tech Lead Intern",
      description: [
        "Led two interns and completed over 80 tasks related to Shopify, Liquid Theme development, DevOps, AWS, Web Frontend and backend, and quality testing. E-commerce: Complete E-commerce development with Shopify. Technologies: JS, Liquid, Advanced Github and SCSS"
      ],
    },
    {
      company: "CLXNS - Real Estate Solutions",
      position: "Product Research Intern",
      description: [
        "Worked closely with the CMO of the company to research the real estate market in UAE and developed UI/UX solutions for the same."
      ],
      links: [
        {
          url: "#",
          imgSrc: CLXNS1,
          title: "UI/UX Research"
        }
      ]
    }
  ];

  return (
    <section className="bg-transparent animated fadeInUp max-w-screen-xl mx-auto px-4 py-16">
      <h2 className="title text-3xl font-bold sm:text-4xl text-center text-white mb-12 uppercase tracking-widest">
        Experience
      </h2>
      <div className="space-y-8">
        {experiences.map((experience, index) => (
          <div
            key={index}
            className="group relative bg-[#111]/50 backdrop-blur-md border border-gray-800 p-8 rounded-2xl shadow-xl transition-all hover:border-[#836FFF]/50 hover:shadow-[0_0_40px_-10px_rgba(131,111,255,0.15)]"
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
              <div>
                <div className="inline-flex items-center gap-2 bg-[#836FFF]/10 text-[#836FFF] text-[10px] font-black px-3 py-1 rounded-full border border-[#836FFF]/20 mb-3 tracking-widest uppercase">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#836FFF] animate-pulse"></span>
                  {experience.company}
                </div>
                <h3 className="text-2xl md:text-4xl font-black text-white leading-tight">
                  {experience.position}
                </h3>
              </div>
              {experience.duration && (
                <div className="text-gray-500 font-bold text-xs md:text-sm border-l-2 border-gray-800 pl-4 uppercase tracking-wider">
                  {experience.duration}
                </div>
              )}
            </div>

            <div className="text-gray-400 space-y-4 max-w-4xl">
              {experience.description.map((line, idx) => (
                <div key={idx} className="flex gap-4">
                  <span className="text-[#836FFF] font-black mt-1 text-lg">›</span>
                  <p className="leading-relaxed text-sm md:text-base">{line}</p>
                </div>
              ))}
            </div>

            {experience.links && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 pt-8 border-t border-gray-800/50">
                {experience.links.map((link, idx) => (
                  <div
                    key={idx}
                    onClick={() => setSelectedImage(link)}
                    className="group/img relative overflow-hidden rounded-xl bg-[#080808] border border-gray-800 transition-all hover:border-[#836FFF]/30 cursor-pointer"
                  >
                    <img
                      src={link.imgSrc}
                      alt={link.title}
                      className="w-full h-44 object-cover opacity-50 transition-all duration-700 group-hover/img:opacity-100 group-hover/img:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
                    <div className="absolute bottom-4 left-4">
                      <h4 className="text-white font-black text-[10px] uppercase tracking-[0.2em]">{link.title}</h4>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Modern Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/95 backdrop-blur-sm transition-all animate-fadeIn"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors z-[110]"
            onClick={() => setSelectedImage(null)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div
            className="relative max-w-5xl w-full max-h-[90vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage.imgSrc}
              alt={selectedImage.title}
              className="w-full h-full object-contain rounded-xl shadow-[0_0_50px_rgba(131,111,255,0.2)]"
            />
            <div className="mt-6 text-center">
              <h4 className="text-[#836FFF] font-black text-xs uppercase tracking-[0.3em] mb-2">Work Overview</h4>
              <p className="text-white text-xl font-bold">{selectedImage.title}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Experience;
