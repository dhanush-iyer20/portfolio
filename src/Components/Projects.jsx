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
    <section id="projects" className="bg-transparent animated fadeInUp max-w-screen-xl mx-auto px-4 py-16">
      <h2 className="title text-3xl font-bold sm:text-4xl text-center text-white mb-12 uppercase tracking-widest">
        Key Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="group relative bg-[#111]/50 backdrop-blur-md border border-gray-800 p-8 rounded-2xl shadow-xl transition-all hover:border-[#836FFF]/50 hover:shadow-[0_0_40px_-10px_rgba(131,111,255,0.15)] flex flex-col h-full"
          >
            <div className="flex justify-between items-start mb-6">
              <h3 className="text-2xl font-black text-white group-hover:text-[#836FFF] transition-colors leading-tight">
                {project.name}
              </h3>
              <div className="w-10 h-10 rounded-xl bg-[#836FFF]/10 border border-[#836FFF]/20 flex items-center justify-center grayscale group-hover:grayscale-0 transition-all">
                <span className="text-xl">🚀</span>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6 grow text-sm md:text-base">
              {project.features}
            </p>
            <div className="pt-6 border-t border-gray-800/50">
              <div className="flex flex-wrap gap-2 opacity-50 group-hover:opacity-100 transition-opacity">
                {['React', 'Node.js', 'Finance', 'Automation'].map((tag) => (
                  <span key={tag} className="text-[10px] font-black uppercase tracking-widest text-[#836FFF] bg-[#836FFF]/5 px-2 py-0.5 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
