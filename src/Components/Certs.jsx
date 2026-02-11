/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React from "react";
import GD from "./CourseraCert.pdf";
import EX from "./Excel.pdf";
import NISM from './NISM.pdf'
import WD from '../assets/WD.pdf'
import PY from '../assets/PY.pdf'
const certs = [
  {
    name: "Udemy - Advanced Agentic AI",
    certlink: "#",
    img: "https://upload.wikimedia.org/wikipedia/commons/e/e8/Udemy_logo.svg",
    by: "Udemy",
    desc: "Comprehensive course on building autonomous AI agents and complex agentic workflows.",
  },
  {
    name: "CFI - Financial Modelling & Valuation Analyst (FMVA)",
    certlink: "#",
    img: "https://corporatefinanceinstitute.com/wp-content/themes/cfi/assets/img/cfi-logo.png",
    by: "CFI",
    desc: "Advanced training in financial modeling, valuation, and investment analysis.",
  },
  {
    name: "CFI - Business Analytics Certificate",
    certlink: "#",
    img: "https://corporatefinanceinstitute.com/wp-content/themes/cfi/assets/img/cfi-logo.png",
    by: "CFI",
    desc: "Mastering data-driven decision making and business intelligence tools.",
  },
  {
    name: "Accenture - Data Analysis Specialist",
    certlink:
      "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/Accenture%20North%20America/hzmoNKtzvAzXsEqx8_Accenture%20North%20America_J82cdHtinaEtqsvZi_1686398607335_completion_certificate.pdf",
    img: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/Accenture%20North%20America/hzmoNKtzvAzXsEqx8_Accenture%20North%20America_J82cdHtinaEtqsvZi_1686398607335_completion_certificate.pdf",
    by: "Accenture",
    desc: "Learned about Data cleaning, Modelling, Visualization and communication to the clients.",
  },
];
const Certs = () => {
  return (
    <section className="bg-transparent animated fadeInUp max-w-screen-xl mx-auto px-4 py-16">
      <h2 className="title text-3xl font-bold sm:text-4xl text-center text-white mb-12 uppercase tracking-widest">
        Certifications
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* NISM */}
        <div className="group relative bg-[#111]/50 backdrop-blur-md border border-gray-800 p-8 rounded-2xl transition-all hover:border-[#836FFF]/50 hover:shadow-[0_0_40px_-10px_rgba(131,111,255,0.15)] flex flex-col items-start">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-1.5 h-1.5 rounded-full bg-[#836FFF] animate-pulse"></div>
            <span className="bg-[#836FFF]/10 text-[#836FFF] px-3 py-1 rounded-full font-black text-[10px] border border-[#836FFF]/20 tracking-widest uppercase">NISM</span>
          </div>
          <h3 className="text-white font-black text-xl mb-3 leading-tight group-hover:text-[#836FFF] transition-colors">Research Analyst</h3>
          <p className="text-gray-400 text-sm leading-relaxed">Equity market research, financial modelling, and valuation analysis.</p>
        </div>

        {/* Google */}
        <div className="group relative bg-[#111]/50 backdrop-blur-md border border-gray-800 p-8 rounded-2xl transition-all hover:border-blue-500/50 hover:shadow-[0_0_40px_-10px_rgba(59,130,246,0.15)] flex flex-col items-start">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></div>
            <span className="bg-blue-500/10 text-blue-500 px-3 py-1 rounded-full font-black text-[10px] border border-blue-500/20 tracking-widest uppercase">GOOGLE</span>
          </div>
          <h3 className="text-white font-black text-xl mb-3 leading-tight group-hover:text-blue-500 transition-colors">Data Analytics</h3>
          <p className="text-gray-400 text-sm leading-relaxed">Advanced Excel, SQL, Tableau, R, and data-driven decision making.</p>
        </div>

        {/* CFI */}
        <div className="group relative bg-[#111]/50 backdrop-blur-md border border-gray-800 p-8 rounded-2xl transition-all hover:border-yellow-500/50 hover:shadow-[0_0_40px_-10px_rgba(234,179,8,0.15)] flex flex-col items-start">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-1.5 h-1.5 rounded-full bg-yellow-500 animate-pulse"></div>
            <span className="bg-yellow-500/10 text-yellow-500 px-3 py-1 rounded-full font-black text-[10px] border border-yellow-500/20 tracking-widest uppercase">CFI</span>
          </div>
          <h3 className="text-white font-black text-xl mb-3 leading-tight group-hover:text-yellow-500 transition-colors">Business Analytics</h3>
          <p className="text-gray-400 text-sm leading-relaxed">Mastering business intelligence tools and predictive modelling.</p>
        </div>

        {/* Map through the rest of the certs array */}
        {certs.map((item, index) => (
          <div key={index} className="group relative bg-[#111]/50 backdrop-blur-md border border-gray-800 p-8 rounded-2xl transition-all hover:border-[#836FFF]/50 hover:shadow-[0_0_40px_-10px_rgba(131,111,255,0.15)] flex flex-col items-start">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-1.5 h-1.5 rounded-full bg-gray-600 animate-pulse"></div>
              <span className="bg-gray-700/10 text-gray-500 px-3 py-1 rounded-full font-black text-[10px] border border-gray-700/20 tracking-widest uppercase">{item.by}</span>
            </div>
            <h3 className="text-white font-black text-xl mb-3 leading-tight group-hover:text-[#836FFF] transition-colors">{item.name.split(' - ')[1] || item.name}</h3>
            <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certs;
