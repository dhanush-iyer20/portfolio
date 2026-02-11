import React from "react";

const projects = [
  {
    name: "Full-Stack Collection: Job Tracker, Workout Tracker, LifeOS",
    features: "Built and deployed 3 full-stack applications with Next.js frontend and Supabase + PostgreSQL backend. Implemented secure authentication, real-time sync, and complex database schemas.",
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2426&q=80",
    link: "#",
  },
  {
    name: "Home Lab: Old Laptop to Linux Server",
    features: "Converted legacy hardware into a high-performance Linux server. Deployed Docker containers to host internal services, managed PostgreSQL instances, and enabled secure remote access.",
    img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc51?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
    link: "#",
  },
  {
    name: "Python Automation Tools",
    features: "Developed custom tools for DCF valuation, M&A due diligence, and financial analysis. Integrated with APIs to automate data ingestion for Investment Banking research.",
    img: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=1770&q=80",
    link: "#",
  },
  {
    name: "Data Science & Research",
    features: "Authored 4+ research papers on financial literacy and SME IPOs using advanced statistical tools. Built Power BI dashboards tracking operational KPIs for global logistics.",
    img: "https://images.unsplash.com/photo-1551288049-bbbda536ad89?ixlib=rb-4.0.3&auto=format&fit=crop&w=1770&q=80",
    link: "#",
  },
];

const Projects = () => {
  return (
    <>
      <h2 className="title text-3xl font-bold sm:text-4xl text-center text-white mb-[5rem]">
        Projects
      </h2>
      <div id="projects" className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-[5rem] px-4">
        {projects.map((project, index) => (
          <div key={index} className="group relative bg-[#111] border border-gray-800 p-8 rounded-2xl transition-all hover:border-[#836FFF] hover:shadow-[0_0_30px_-10px_rgba(131,111,255,0.3)]">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-2xl font-bold text-white group-hover:text-[#836FFF] transition-colors">
                {project.name}
              </h3>
              <span className="text-2xl">🚀</span>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6">
              {project.features}
            </p>
            <div className="mt-auto flex items-center justify-between">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#836FFF] font-semibold text-sm hover:underline flex items-center gap-2"
              >
                Explore Repo <span className="text-lg">→</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Projects;
