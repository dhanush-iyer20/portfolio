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
    <div>
      <h2 className="title text-3xl font-bold sm:text-4xl text-center text-white mb-4">
        Certifications
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 max-w-screen-xl mx-auto">
        {/* NISM */}
        <div className="bg-[#1a1a1a] border border-gray-800 p-6 rounded-xl hover:border-[#836FFF] transition-colors">
          <div className="flex items-center gap-4 mb-4">
            <span className="bg-[#836FFF]/10 text-[#836FFF] p-2 rounded-lg font-bold text-xs">NISM</span>
            <h3 className="text-white font-bold">Research Analyst</h3>
          </div>
          <p className="text-gray-400 text-sm">Equity market research, financial modelling, and valuation analysis.</p>
        </div>

        {/* Google */}
        <div className="bg-[#1a1a1a] border border-gray-800 p-6 rounded-xl hover:border-[#836FFF] transition-colors">
          <div className="flex items-center gap-4 mb-4">
            <span className="bg-blue-500/10 text-blue-500 p-2 rounded-lg font-bold text-xs">GOOGLE</span>
            <h3 className="text-white font-bold">Data Analytics</h3>
          </div>
          <p className="text-gray-400 text-sm">Advanced Excel, SQL, Tableau, R, and data-driven decision making.</p>
        </div>

        {/* CFI */}
        <div className="bg-[#1a1a1a] border border-gray-800 p-6 rounded-xl hover:border-[#836FFF] transition-colors">
          <div className="flex items-center gap-4 mb-4">
            <span className="bg-yellow-500/10 text-yellow-500 p-2 rounded-lg font-bold text-xs">CFI</span>
            <h3 className="text-white font-bold">Business Analytics</h3>
          </div>
          <p className="text-gray-400 text-sm">Mastering business intelligence tools and predictive modelling.</p>
        </div>

        {/* Map through the rest of the certs array */}
        {certs.map((item, index) => (
          <div key={index} className="bg-[#1a1a1a] border border-gray-800 p-6 rounded-xl hover:border-[#836FFF] transition-colors">
            <div className="flex items-center gap-4 mb-4">
              <span className="bg-gray-700/50 text-gray-300 p-2 rounded-lg font-bold text-xs uppercase">{item.by}</span>
              <h3 className="text-white font-bold">{item.name.split(' - ')[1] || item.name}</h3>
            </div>
            <p className="text-gray-400 text-sm">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certs;
