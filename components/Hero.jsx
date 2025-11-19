import Link from 'next/link';

const Hero = () => {
    return (
        <section id="hero" className="min-h-[calc(100vh-4rem)] flex items-center justify-center bg-gradient-to-b from-slate-900 to-slate-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h1 className="text-4xl sm:text-6xl font-bold text-white mb-6 tracking-tight">
                    Hi, I'm <span className="text-blue-500">Kartik Singhal</span>
                </h1>
                <p className="text-xl sm:text-2xl text-slate-300 mb-8 max-w-2xl mx-auto">
                    A Computer Science Engineering student and Full Stack Developer passionate about building efficient, user-focused applications.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link
                        href="#projects"
                        className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-300 shadow-lg shadow-blue-500/20"
                    >
                        View Projects
                    </Link>
                    <Link
                        href="#contact"
                        className="px-8 py-3 bg-transparent border-2 border-slate-600 hover:border-blue-500 text-slate-300 hover:text-blue-500 font-semibold rounded-lg transition-colors duration-300"
                    >
                        Contact Me
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Hero;
