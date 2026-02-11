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
    <div className="m-8 ml-10 mr-10 mb-[6rem] max-w-[80%]">
      <h2 className="title text-3xl font-bold sm:text-4xl text-center text-white mb-4">
        My Skills
      </h2>
      <div className="mt-8 grid grid-cols-1 gap-8 md:mt-16 md:grid-cols-2 md:gap-12 lg:grid-cols-3">
        {skills.map((item) => (
          <div
            className="flex items-start gap-4 m-6 p-6  rounded-lg transition-transform duration-300 transform hover:scale-105 hover:shadow-[0_0_15px_5px_rgba(255,255,255,0.4)]"
          >
            <span className="shrink-0 rounded-full bg-gray-700 p-4">
              <img className="h-10 w-10 rounded-full" src={item.img} alt={item.name} />
            </span>
            <div>
              <h2 className="text-lg font-bold text-white">{item.name}</h2>
              <p className="mt-1 text-sm text-gray-300">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
