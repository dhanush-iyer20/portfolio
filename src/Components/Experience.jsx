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
  // Array of objects containing information for each card
  const experiences = [
    {
      company: "Gulf Agency Company",
      position: "Innovation Intern",
      description: [
        "Built over 12 dashboards for top management and customers. Conducted interviews with over 170 users to create user journey/user mapping. Used Microsoft Power Automate to roll out solutions across 28 branches in India.Created a research report on the future of the shipping industry."
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
      description: [
        "Used AI tools like Perplexity, Gemini, chatGPT, and Market research and sourced and performed due diligence on over 12 startups."
      ],
      links: [
        {
          url: "#",
          imgSrc: Humind1,
          title: "Research Thesis"
        }
        ,   {
          url: "#",
          imgSrc: Humind2,
          title: "Research Thesis"
        },   {
          url: "#",
          imgSrc: Humind3,
          title: "Research Thesis"
        }
      ]
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
    <section className="bg-transparent dark:bg-transparent animated fadeInUp max-w-[80%] items-center justify center">
      <h2 className="title mt-[2rem] sm:mt-[1rem] mb-[2rem] sm:mb-[4rem] text-3xl font-bold sm:text-4xl text-white text-center">
        Experience
      </h2>
      <div className="py-0 px-4 mx-auto max-w-screen-xl lg:py-0">
        {/* Map over experiences array to render each card */}
        {experiences.map((experience, index) => (
          <div
            key={index}
            className="bg-transparent rounded-lg dark:bg-transparent border border-gray-200 dark:border-gray-700 p-8 md:p-12 mb-8"
          >
            <a
              href=""
              className="bg-[#836FFF] cursor-pointer text-[#836FFF] text-xl font-medium inline-flex items-center px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-[#836FFF] mb-2"
            >
              {experience.company}
            </a>
            <h1 className="text-gray-900 dark:text-white text-3xl md:text-5xl font-extrabold mb-2">
              {experience.position}
            </h1>
            {/* Map over description array for each experience */}
            <div className="text-gray-400 mt-4 mb-4 max">
              <b>Main Tasks</b>
              {experience.description.map((line, idx) => (
                <p key={idx}>{line}</p>
              ))}
            </div>
            {/* Map over links array to dynamically render multiple <a> tags */}
            {experience.links && experience.links.map((link, idx) => (
  <section
    key={idx}
    className="group relative block overflow-hidden pt-5 pb-5"
  >
    <img
      src={link.imgSrc}
      alt={link.title}
      className="w-full h-auto object-cover transition duration-500"
      style={{ aspectRatio: "16 / 9" }} // Forces consistent aspect ratio
    />
    <div className="relative border border-gray-100 bg-white p-6">
      <h3 className="mt-1.5 text-lg font-medium text-gray-900">
        {link.title}
      </h3>
    </div>
  </section>
))}


          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
