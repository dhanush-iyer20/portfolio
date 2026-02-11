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
    <section className="bg-transparent animated fadeInUp max-w-screen-xl mx-auto px-4 py-16">
      <h2 className="title text-3xl font-bold sm:text-4xl text-center text-white mb-12 uppercase tracking-widest">
        Achievements
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {achievements.map((achievement) => (
          <div
            key={achievement.id}
            className="group relative overflow-hidden rounded-2xl bg-[#111]/50 backdrop-blur-md border border-gray-800 p-8 transition-all hover:border-[#836FFF]/50 hover:shadow-[0_0_40px_-10px_rgba(131,111,255,0.15)] flex flex-col justify-between"
          >
            <div className="absolute -right-4 -top-4 text-7xl opacity-[0.03] group-hover:opacity-[0.08] transition-opacity rotate-12 group-hover:rotate-0 duration-500 pointer-events-none">
              🏆
            </div>

            <div className="relative z-10 text-left">
              <h3 className="text-[#836FFF] font-black text-xs uppercase tracking-[0.2em] mb-3">
                {achievement.title}
              </h3>
              <p className="text-white text-md font-medium leading-relaxed group-hover:text-gray-100 transition-colors">
                {achievement.description}
              </p>
            </div>

            <div className="mt-6 flex items-center gap-2 text-[10px] font-black text-gray-600 tracking-widest uppercase">
              <span className="w-8 h-[1px] bg-gray-800 group-hover:w-12 group-hover:bg-[#836FFF] transition-all duration-500"></span>
              <span>Milestone</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Ach;
