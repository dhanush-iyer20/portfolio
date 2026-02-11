/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React from "react";

const skills = [
  // Frontend
  {
    name: "Frontend: Next.js, React, Tailwind, Figma",
    desc: "Building responsive and modern UIs with the latest frameworks and design tools.",
    img: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
  },
  // Backend
  {
    name: "Backend: Supabase, PostgreSQL, Docker, REST APIs",
    desc: "Designing scalable database schemas and managing containerized services.",
    img: "https://www.svgrepo.com/show/303251/mysql-logo.svg",
  },
  // Automation
  {
    name: "Automation: Python, VBA, Power Automate",
    desc: "Automating complex workflows and data processing tasks for efficiency.",
    img: "https://i0.wp.com/junilearning.com/wp-content/uploads/2020/06/python-programming-language.webp?fit=1920%2C1920&ssl=1",
  },
  // Data & Analytics
  {
    name: "Data & Analytics: SQL, Power BI, Tableau",
    desc: "Extracting insights from data and creating interactive dashboards for decision makers.",
    img: "https://its.ucr.edu/sites/default/files/styles/form_preview/public/powerbi%20logo%201.png?itok=yYXO-S-V",
  },
  // Other
  {
    name: "Other: Linux, Git, Product Thinking, User Research",
    desc: "Strong foundation in DevOps, version control, and user-centric design principles.",
    img: "https://upload.wikimedia.org/wikipedia/commons/3/35/Tux.svg",
  }
];

const Skills = () => {
  return (
    <section className="bg-transparent animated fadeInUp max-w-screen-xl mx-auto px-4 py-16">
      <h2 className="title text-3xl font-bold sm:text-4xl text-center text-white mb-12 uppercase tracking-widest">
        Skills & Expertise
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((item, index) => (
          <div
            key={index}
            className="group relative bg-[#111]/50 backdrop-blur-md border border-gray-800 p-8 rounded-2xl transition-all hover:border-[#836FFF]/50 hover:shadow-[0_0_40px_-10px_rgba(131,111,255,0.15)] flex flex-col items-center text-center"
          >
            <div className="w-20 h-20 mb-6 rounded-2xl bg-[#080808] border border-gray-800 flex items-center justify-center p-4 grayscale group-hover:grayscale-0 group-hover:border-[#836FFF]/30 transition-all duration-500">
              <img className="max-h-full max-w-full object-contain" src={item.img} alt={item.name} />
            </div>

            <h3 className="text-white font-black text-xs uppercase tracking-[0.2em] mb-3">
              {item.name.split(':')[0]}
            </h3>
            <h4 className="text-gray-100 font-bold text-lg mb-3 leading-tight">
              {item.name.split(':')[1]?.trim() || item.name}
            </h4>
            <p className="text-gray-400 text-sm leading-relaxed">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
