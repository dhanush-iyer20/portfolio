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
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8 mb-[5rem]">
        {achievements.map((achievement) => (
          <a
            key={achievement.id}
            href={achievement.link}
            className="block rounded-lg p-4 shadow-sm shadow-indigo-100"
          >
            {/* <img
              alt={`Achievement ${achievement.id}`}
              src={achievement.image}
              className="h-56 w-full rounded-md object-cover"
            /> */}
            <div className="mt-2">
              <dl>
                <div>
                  <dt className="sr-only">Title</dt>
                  <dd className="font-medium text-white ">{achievement.title}</dd>
                </div>
                <div>
                  <dt className="sr-only">Description</dt>
                  <dd className="text-sm text-white text-bold">
                    {achievement.description}
                  </dd>
                </div>
              </dl>
            </div>
          </a>
        ))}
      </div>
    </>
  );
};

export default Ach;
