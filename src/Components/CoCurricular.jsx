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
        <section className="bg-transparent animated fadeInUp max-w-screen-xl mx-auto px-4 py-16">
            <h2 className="title text-3xl font-bold sm:text-4xl text-center text-white mb-12 uppercase tracking-widest">
                Leadership & Impact
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {coCurriculars.map((item, index) => (
                    <div
                        key={index}
                        className="group relative bg-[#111]/50 backdrop-blur-md border border-gray-800 p-8 rounded-2xl transition-all hover:border-[#836FFF]/50 hover:shadow-[0_0_40px_-10px_rgba(131,111,255,0.15)] flex flex-col justify-between"
                    >
                        <div className="relative z-10">
                            <h3 className="text-[#836FFF] font-black text-xs uppercase tracking-[0.2em] mb-3">
                                {item.role}
                            </h3>
                            <p className="text-white font-bold text-lg mb-4 leading-tight">
                                {item.organization}
                            </p>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                {item.description}
                            </p>
                        </div>

                        <div className="mt-8 flex items-center gap-2">
                            <div className="h-1 w-8 bg-[#836FFF]/20 rounded-full group-hover:bg-[#836FFF] group-hover:w-12 transition-all duration-500"></div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default CoCurricular;
