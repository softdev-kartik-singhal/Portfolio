const Skills = () => {
    const skillCategories = [
        {
            title: "Front-End",
            skills: ["HTML", "CSS", "JavaScript", "React.js", "Tailwind CSS", "Bootstrap"],
        },
        {
            title: "Back-End",
            skills: ["Node.js", "Express.js"],
        },
        {
            title: "Databases",
            skills: ["SQL", "MongoDB"],
        },
        {
            title: "Full Stack",
            skills: ["MERN Stack (MongoDB, Express, React, Node)"],
        },
        {
            title: "Other Tools & Concepts",
            skills: ["RESTful APIs", "Git & GitHub", "Terminal", "Responsive Web Design", "DSA"],
        },
    ];

    return (
        <section id="skills" className="py-20 bg-slate-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-white mb-12 text-center">Technical Skills</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {skillCategories.map((category, index) => (
                        <div
                            key={index}
                            className="bg-slate-800 p-6 rounded-xl border border-slate-700 hover:border-blue-500 transition-colors duration-300"
                        >
                            <h3 className="text-xl font-semibold text-blue-400 mb-4">{category.title}</h3>
                            <div className="flex flex-wrap gap-2">
                                {category.skills.map((skill, idx) => (
                                    <span
                                        key={idx}
                                        className="px-3 py-1 bg-slate-700 text-slate-300 rounded-full text-sm border border-slate-600"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
