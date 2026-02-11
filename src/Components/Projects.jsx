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
      <div className="grid grid-cols-1 gap-8 mb-[5rem]">
        {projects.map((project, index) => {
          if (index % 2 === 0) {
            // Design 1
            return (
              <section key={index}>
                <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-4 md:items-center md:gap-8">
                    {/* Text Section */}
                    <div className="md:col-span-1">
                      <div className="max-w-lg md:max-w-none">
                        <h2 className="text-2xl font-semibold text-white sm:text-3xl">
                          {project.name}
                        </h2>
                        <p className="mt-4 text-gray-300">{project.features}</p>
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-2 inline-block text-indigo-400 hover:underline"
                        >
                          View More
                        </a>
                      </div>
                    </div>

                    {/* Image Section */}
                    <div className="md:col-span-3">
                      <img
                        src={project.img}
                        className="rounded"
                        alt={project.name}
                      />
                    </div>
                  </div>
                </div>
              </section>
            );
          } else {
            // Design 2
            return (
              <section key={index}>
                <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-4 md:items-center md:gap-8">
                    {/* Image Section */}
                    <div className="md:col-span-3">
                      <img
                        src={project.img}
                        className="rounded"
                        alt={project.name}
                      />
                    </div>

                    {/* Text Section */}
                    <div className="md:col-span-1">
                      <div className="max-w-lg md:max-w-none">
                        <h2 className="text-2xl font-semibold text-white sm:text-3xl">
                          {project.name}
                        </h2>
                        <p className="mt-4 text-gray-300">{project.features}</p>
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-2 inline-block text-indigo-400 hover:underline"
                        >
                          View More
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            );
          }
        })}
      </div>
    </>
  );
};

export default Projects;
