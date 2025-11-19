import FadeIn from './FadeIn';

const About = () => {
    return (
        <section id="about" className="py-20 bg-slate-800/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <FadeIn>
                    <h2 className="text-3xl font-bold text-white mb-12 text-center">About Me</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                        {/* Profile Summary */}
                        <div className="bg-slate-900/80 backdrop-blur-sm p-8 rounded-xl border border-slate-700 shadow-xl">
                            <h3 className="text-xl font-semibold text-blue-400 mb-4">Profile Summary</h3>
                            <p className="text-slate-300 leading-relaxed">
                                I am a Computer Science Engineering student (2nd Year) at Madhav Institute of Technology and Science, Gwalior,
                                with a strong interest in software development and full-stack web technologies.
                                I am passionate about building efficient, user-focused applications and continuously improving my technical and problem-solving skills.
                            </p>
                        </div>

                        {/* Education */}
                        <div className="bg-slate-900/80 backdrop-blur-sm p-8 rounded-xl border border-slate-700 shadow-xl">
                            <h3 className="text-xl font-semibold text-blue-400 mb-4">Education</h3>
                            <div className="space-y-6">
                                <div>
                                    <h4 className="text-white font-medium">Computer Science and Engineering</h4>
                                    <p className="text-slate-400 text-sm">Madhav Institute of Technology and Science</p>
                                    <div className="flex justify-between text-slate-500 text-sm mt-1">
                                        <span>CGPA: 7.1</span>
                                        <span>(Till - 04-11-25)</span>
                                    </div>
                                </div>
                                <div className="border-t border-slate-800 pt-4">
                                    <h4 className="text-white font-medium">XII (CBSE)</h4>
                                    <p className="text-slate-400 text-sm">Sanskar Public School, Gwalior</p>
                                    <div className="flex justify-between text-slate-500 text-sm mt-1">
                                        <span>80.8%</span>
                                        <span>2024</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </FadeIn>
            </div>
        </section>
    );
};

export default About;
