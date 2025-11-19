import Link from 'next/link';
import FadeIn from './FadeIn';

const Projects = () => {
    const projects = [
        {
            title: "Wanderlust",
            subtitle: "A Travel Accommodation Website",
            description: "Developed a full stack travel listing platform using Node.js, Express, and MongoDB Atlas. Implemented user authentication with Passport.js and deployed on Render. Features CRUD operations and full-stack development practices.",
            tags: ["Node.js", "Express", "MongoDB", "Passport.js"],
            link: "https://wanderlust-travel-project.onrender.com", // Assuming this link based on description, or placeholder
            github: "https://github.com/softdev-kartik-singhal", // Placeholder to profile if specific repo unknown
        },
        {
            title: "Simon Says Game",
            subtitle: "Interactive Memory Challenge",
            description: "Interactive memory game built using HTML, CSS, and JavaScript with dynamic color sequences and responsive design.",
            tags: ["HTML", "CSS", "JavaScript"],
            link: "https://softdev-kartik-singhal.github.io/simon-says-game/", // Placeholder assumption
            github: "https://github.com/softdev-kartik-singhal",
        },
    ];

    return (
        <section id="projects" className="py-20 bg-slate-800/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <FadeIn>
                    <h2 className="text-3xl font-bold text-white mb-12 text-center">Academic Projects</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {projects.map((project, index) => (
                            <div
                                key={index}
                                className="bg-slate-900/80 backdrop-blur-sm rounded-xl overflow-hidden border border-slate-700 hover:border-blue-500 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10 group hover:-translate-y-1"
                            >
                                <div className="p-8">
                                    <div className="flex justify-between items-start mb-4">
                                        <div>
                                            <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">
                                                {project.title}
                                            </h3>
                                            <p className="text-blue-500 text-sm font-medium mt-1">{project.subtitle}</p>
                                        </div>
                                    </div>

                                    <p className="text-slate-400 mb-6 leading-relaxed">
                                        {project.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2 mb-8">
                                        {project.tags.map((tag, idx) => (
                                            <span
                                                key={idx}
                                                className="px-2 py-1 bg-slate-800 text-slate-400 text-xs rounded border border-slate-700"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="flex gap-4">
                                        <Link
                                            href={project.link}
                                            target="_blank"
                                            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded transition-colors"
                                        >
                                            View Live
                                        </Link>
                                        <Link
                                            href={project.github}
                                            target="_blank"
                                            className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white text-sm font-semibold rounded border border-slate-600 transition-colors"
                                        >
                                            GitHub
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-12">
                        <Link
                            href="https://github.com/softdev-kartik-singhal"
                            target="_blank"
                            className="text-slate-400 hover:text-blue-400 transition-colors inline-flex items-center gap-2"
                        >
                            View more projects on GitHub
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </Link>
                    </div>
                </FadeIn>
            </div>
        </section>
    );
};

export default Projects;
