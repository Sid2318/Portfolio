import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="bg-black min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact/>
      <div className="w-full bg-black py-6 text-center text-gray-400 text-sm">
        &copy; {new Date().getFullYear()} Siddhi Mohol. All rights reserved.
      </div>
    </div>
  );
}
