import React from "react";

const coCurriculars = [
    {
        role: "Student Coordinator",
        organization: "SVKM’s Training & Placement Cell (2024-25)",
        description: "Liason between companies and 100+ students, facilitating placement processes."
    },
    {
        role: "Managing Editor of Admin",
        organization: "The Economic Transcript, SVKM’s Mithibai College (2024-25)",
        description: "Oversee all administrative operations, impacting 20,000+ readers of the magazine."
    },
    {
        role: "Mentor",
        organization: "Atmasantosh Foundation (2024-25)",
        description: "Mentor underprivileged undergrad students."
    }
];

const CoCurricular = () => {
    return (
        <section className="bg-transparent animated fadeInUp max-w-[80%] mx-auto mb-[5rem]">
            <h2 className="title text-3xl font-bold sm:text-4xl text-white text-center mb-[4rem]">
                Co-curricular Activities
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {coCurriculars.map((item, index) => (
                    <div key={index} className="bg-transparent border border-gray-700 p-8 rounded-lg transition-transform hover:scale-105">
                        <h3 className="text-[#836FFF] text-xl font-bold mb-2">{item.role}</h3>
                        <p className="text-white font-medium mb-4">{item.organization}</p>
                        <p className="text-gray-400">{item.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default CoCurricular;
