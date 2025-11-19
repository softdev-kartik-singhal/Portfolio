import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ParticleBackground from "@/components/ParticleBackground";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Kartik Singhal | Full Stack Developer",
  description: "Portfolio of Kartik Singhal, a Computer Science Engineering student and Full Stack Developer.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased relative`}>
        <ParticleBackground />
        <Navbar />
        <main className="min-h-screen pt-16 relative z-10">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
