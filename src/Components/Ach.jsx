import React from "react";

const achievements = [
  {
    id: 1,
    title: "National Finalist (Top 10 among 500 teams)",
    description: "IMT Ghaziabad’s Burning Ambition, flagship case competition.",
    image: "https://images.unsplash.com/photo-1613545325278-f24b0cae1224?ixlib=rb-1.2.1&auto=format&fit=crop&w=1770&q=80",
    link: "#",
  },
  {
    id: 2,
    title: "1st Prize",
    description: "Annual Talent Search Competition, Business Pitching.",
    image: "https://images.unsplash.com/photo-1613545325278-f24b0cae1224?ixlib=rb-1.2.1&auto=format&fit=crop&w=1770&q=80",
    link: "#",
  },
  {
    id: 3,
    title: "1st Prize",
    description: "Brand Revival Challenge.",
    image: "https://images.unsplash.com/photo-1613545325278-f24b0cae1224?ixlib=rb-1.2.1&auto=format&fit=crop&w=1770&q=80",
    link: "#",
  },
  {
    id: 4,
    title: "1st Prize",
    description: "Chemtrek Debate Competition.",
    image: "https://images.unsplash.com/photo-1613545325278-f24b0cae1224?ixlib=rb-1.2.1&auto=format&fit=crop&w=1770&q=80",
    link: "#",
  },
  {
    id: 5,
    title: "2nd Prize",
    description: "Jai Hind College’s Annual Fest, Idea Generation & Business Pitching.",
    image: "https://images.unsplash.com/photo-1613545325278-f24b0cae1224?ixlib=rb-1.2.1&auto=format&fit=crop&w=1770&q=80",
    link: "#",
  },
  {
    id: 6,
    title: "2nd Prize",
    description: "Reclamo Annual Case Competition.",
    image: "https://images.unsplash.com/photo-1613545325278-f24b0cae1224?ixlib=rb-1.2.1&auto=format&fit=crop&w=1770&q=80",
    link: "#",
  },
  {
    id: 7,
    title: "Honorable Mention",
    description: "Model United Nations organized by IIT-Bombay (against 40+ people).",
    image: "https://images.unsplash.com/photo-1613545325278-f24b0cae1224?ixlib=rb-1.2.1&auto=format&fit=crop&w=1770&q=80",
    link: "#",
  },
];

const Ach = () => {
  return (
    <>
      <h2 className="title text-3xl font-bold sm:text-4xl text-center text-white mb-[5rem]">
        Achievements
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-[5rem] px-4">
        {achievements.map((achievement) => (
          <div
            key={achievement.id}
            className="group relative overflow-hidden rounded-2xl bg-[#0a0a0a] border border-gray-800 p-8 transition-all hover:border-[#836FFF] hover:-translate-y-2"
          >
            <div className="absolute -right-4 -top-4 text-6xl opacity-10 group-hover:opacity-20 transition-opacity">
              🏆
            </div>

            <div className="relative z-10">
              <h3 className="text-[#836FFF] font-black text-xl mb-2 tracking-tight">
                {achievement.title}
              </h3>
              <p className="text-white text-md font-medium leading-snug">
                {achievement.description}
              </p>
            </div>

            <div className="mt-6 flex items-center gap-2 text-xs font-bold text-gray-500 group-hover:text-white transition-colors">
              <span>VIEW DETAILS</span>
              <span className="text-lg">→</span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Ach;
