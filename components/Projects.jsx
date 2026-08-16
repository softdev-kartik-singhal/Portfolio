import Link from 'next/link';
import FadeIn from './FadeIn';

const Projects = () => {
    const projects = [
        {
            title: "AI Crime Intelligence Platform",
            subtitle: "Serverless crime intelligence dashboard with GIS spatial analytics and AI-driven insights.",
            description: "Built an enterprise-grade law enforcement intelligence platform that processes and visualizes real-time CCTNS crime records. Features an interactive GIS mapping interface for spatial hotspot detection, an AI copilot powered by QuickML for natural language database querying and predictive risk forecasting, end-to-end cloud FIR management, and role-based officer performance analytics.",
            tags: ["React 19", "Node.js", "Zoho Catalyst", "QuickML AI", "Leaflet GIS", "Serverless", "OAuth 2.0", "Vite", "Tailwind", "CSS"],
            link: "https://ksp-crime-intelligence-50044050041.development.catalystappsail.in", // Assuming this link based on description, or placeholder
            github: "https://github.com/m-agrawal09/ksp-crime-intelligence-platform", // Placeholder to profile if specific repo unknown
            collaboration: "Developed in collaboration with Medhavi Agrawal"
        },
        {
            title: "ScrollEats",
            subtitle: "A Full Stack Application inspired by Instagram Reels and Zomato",
            description: "Built a full-stack food discovery and ordering platform where users browse food reels, like/save content, and place orders. Food partners can manage their profiles, upload reels, and list food items. The application includes authentication, role-based access, media uploads, and real-time interaction features.",
            tags: ["Node.js", "MongoDB", "Express", "JWT", "React", "Material UI", "Bootstrap", "Font Awesome", "Render"],
            link: "https://scrolleats-application.onrender.com", // Assuming this link based on description, or placeholder
            github: "https://github.com/softdev-kartik-singhal", // Placeholder to profile if specific repo unknown
        },
        {
            title: "Stokro",
            subtitle: "A modern stock trading experience built for learning and simulation.",
            description: "Stokro is a stock trading web application inspired by Zerodha that allows users to explore market data, manage virtual investments, and track portfolio performance. Designed to mirror real trading workflows, it offers a smooth, intuitive interface with secure authentication and real-time updates.",
            tags: ["Node.js", "MongoDB", "Express", "JWT", "React", "Material UI", "Font Awesome", "Bootstrap", "Render"],
            link: "https://stokro.onrender.com", // Assuming this link based on description, or placeholder
            github: "https://github.com/softdev-kartik-singhal", // Placeholder to profile if specific repo unknown
        },
        {
            title: "Wanderlust",
            subtitle: "A Travel Accommodation Website",
            description: "Developed a full stack travel listing platform using Node.js, Express, and MongoDB Atlas. Implemented user authentication with Passport.js and deployed on Render. Features CRUD operations and full-stack development practices.",
            tags: ["Node.js", "Express", "MongoDB", "Passport.js"],
            link: "https://wanderlust-vj6s.onrender.com", // Assuming this link based on description, or placeholder
            github: "https://github.com/softdev-kartik-singhal", // Placeholder to profile if specific repo unknown
        }
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

                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {project.tags.map((tag, idx) => (
                                            <span
                                                key={idx}
                                                className="px-2 py-1 bg-slate-800 text-slate-400 text-xs rounded border border-slate-700"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    {project.collaboration && (
                                        <div className="flex items-center gap-2 mb-6 text-xs text-slate-400 font-medium">
                                            <svg className="w-4 h-4 text-blue-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                            </svg>
                                            <span>{project.collaboration}</span>
                                        </div>
                                    )}

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
