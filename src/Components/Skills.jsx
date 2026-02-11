/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React from "react";

const skills = [
  {
    name: "Excel",
    desc: "Excellent in Excel as well as Google Spreadsheets - over 1 year of experience",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Microsoft_Excel_2013-2019_logo.svg/2170px-Microsoft_Excel_2013-2019_logo.svg.png",
  },
  {
    name: "PPTs",
    desc: "Proficient in PowerPoint, Google Sheets and also Canva presentations - over 1 year of experience",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Microsoft_Office_PowerPoint_%282019%E2%80%93present%29.svg/1200px-Microsoft_Office_PowerPoint_%282019%E2%80%93present%29.svg.png",
  },
  {
    name: "Data Visualizations",
    desc: "Proficient in Tableau and Power BI in creating interactive visualizations - over 5 months of experience",
    img: "https://cdn-icons-png.flaticon.com/512/6332/6332308.png",
  },
  {
    name: "Python",
    desc: "Experienced in Python for data analysis, automation, and web scraping.",
    img: "https://i0.wp.com/junilearning.com/wp-content/uploads/2020/06/python-programming-language.webp?fit=1920%2C1920&ssl=1",
  },
  {
    name: "Power BI",
    desc: "Proficient in using Power BI for data visualization and business intelligence.",
    img: "https://its.ucr.edu/sites/default/files/styles/form_preview/public/powerbi%20logo%201.png?itok=yYXO-S-V",
  },
  {
    name: "R",
    desc: "Proficient in R for statistical analysis and data visualization.",
    img: "https://upload.wikimedia.org/wikipedia/commons/1/1b/R_logo.svg",
  },
  {
    name: "MySQL",
    desc: "Proficient in MySQL database management and queries.",
    img: "https://www.svgrepo.com/show/303251/mysql-logo.svg",
  },
  {
    name: "AI Tools - ChatGPT 4, GPT-4 Plugins",
    desc: "Proficient in utilizing AI tools like ChatGPT and GPT-4 plugins for various applications.",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/ChatGPT_logo.svg/1200px-ChatGPT_logo.svg.png",
  },
  {
    name: "Programming (JavaScript, ReactJS, HTML, CSS)",
    desc: "Experienced in JavaScript, ReactJS, HTML, and CSS for web development.",
    img: "https://cdn-icons-png.freepik.com/256/8083/8083244.png?semt=ais_hybrid",
  },
  {
    name: "Canva",
    desc: "Proficient in creating PPTs, Invites, Posters - over 1 year of experience",
    img: "https://images-eds-ssl.xboxlive.com/image?url=4rt9.lXDC4H_93laV1_eHHFT949fUipzkiFOBH3fAiZZUCdYojwUyX2aTonS1aIwMrx6NUIsHfUHSLzjGJFxxo4K81Ei7WzcnqEk8W.MgwadpHjl76SlQnWKc4OkaILTy7aDmpraBC2vB.Q_eb6EavJPyLEBEEqc.BSkZzu5Vng-&format=source",
  },
  {
    name: "Soft Skills",
    desc: "Leadership, Presentations, Event Management, Strategic Teamwork, Public Speaking, Time Management",
    img: "https://www.mckinsey.com/~/media/mckinsey/mckinsey%20quarterly/the%20five%20fifty/soft-skills-1536x1536.png",
  },
  {
    name: "Languages",
    desc: "Professional in English, Hindi, Marathi. Intermediate in Malayalam, Tamil",
    img: "https://i0.wp.com/epthinktank.eu/wp-content/uploads/2016/09/eprs-briefing-589794-regional-minority-languages-eu-final.jpg?fit=1000%2C979&ssl=1",
  },
  {
    name: "Adobe",
    desc: "Proficient in Premiere Pro, Illustrator, Photoshop - over 1 year of experience in Photoshop",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbqzXb0frYPXslo6raQm6Jaw5Nhp46A94orw&s",
  },
  {
    name: "Figma",
    desc: "Proficient in making wireframes, User flow diagrams - over 6 months of experience",
    img: "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg",
  },
  {
    name: "Blender",
    desc: "Proficient in making 3D models, Animations - over 3 months of experience",
    img: "https://upload.wikimedia.org/wikipedia/commons/0/0c/Blender_logo_no_text.svg",
  },
  {
    name: "FL Studio - Music Production",
    desc: "Over 30,000 streams on my music on Spotify. Proficient in Mixing, Mastering, Composition.",
    img: "https://cdn-icons-png.flaticon.com/512/8403/8403908.png",
  },
  {
    name: "Shopify",
    desc: "Proficient in setting up and managing e-commerce stores on Shopify.",
    img: "https://cdn.eastsideco.com/media/v3/services/ecommerce-services/shopify-logo.png",
  },
  {
    name: "Wix",
    desc: "Experienced in designing and managing websites using Wix.",
    img: "https://hooquest.com/wp-content/uploads/2019/01/wix-logo-300.png",
  },
  {
    name: "WordPress",
    desc: "Proficient in WordPress website design, content management, and plugin integration.",
    img: "https://kvrwebtech.com/blog/wp-content/uploads/2023/10/wordpress.png",
  },

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
