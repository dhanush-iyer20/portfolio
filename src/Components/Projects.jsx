import React from "react";

const projects = [
  {
    name: "Academic Projects",
    features:
      "Worked on over 20 projects such as Netflix business study, German Economy, Dmart Business study, Indian Digital Currency, Paper tube industr.",
    img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1784&q=80",
    link: "https://taplink.cc/dhanushiyer",
  },
  {
    name: "Python Projects",
    features:
      "Made advanced python apps about DCF valuation, currency exchange, budgeting, stock analyzer, Monte carlo simulator",
    img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    link: "https://super-semolina-2ec5d2.netlify.app/",
  },
  {
    name: "Data analysis Projects",
    features: "Multi-user blogging platform with features like JWT Auth, search, likes, and comments.",
    img: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    link: "https://github.com/dhanush-iyer20/blogMan",
  },
  {
    name: "Research Projects",
    features: "Made 4 research papers about Financial literacy, Humanresource management, SME IPOs with advanced statistics and hypothesis tools.",
    img: "https://images.unsplash.com/photo-1487014679447-9f8336841d58?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1905&q=80",
    link: "https://oslavaevents.netlify.app/",
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
