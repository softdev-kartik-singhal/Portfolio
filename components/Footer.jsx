import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="bg-slate-900 border-t border-slate-800 py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-4 md:mb-0">
                        <p className="text-slate-400 text-sm">
                            &copy; {new Date().getFullYear()} Kartik Singhal. All rights reserved.
                        </p>
                    </div>
                    <div className="flex space-x-6">
                        <Link
                            href="https://github.com/softdev-kartik-singhal"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-slate-400 hover:text-white transition-colors"
                        >
                            GitHub
                        </Link>
                        <Link
                            href="https://www.linkedin.com/in/kartik-singhal28/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-slate-400 hover:text-white transition-colors"
                        >
                            LinkedIn
                        </Link>
                        <Link
                            href="mailto:kartiksinghal2803@gmail.com"
                            className="text-slate-400 hover:text-white transition-colors"
                        >
                            Email
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
