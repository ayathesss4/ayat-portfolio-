import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ProjectDetails from "./components/ProjectDetails";

function PortfolioApp() {
  const [selectedProject, setSelectedProject] = useState(null);

  if (selectedProject) {
    return (
      <ProjectDetails
        project={selectedProject}
        onBack={() => setSelectedProject(null)}
      />
    );
  }

  return (
    <div className="min-h-screen bg-[#f7f5f0] text-[#171717] dark:bg-[#111111] dark:text-white">
      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects onSelectProject={setSelectedProject} />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default PortfolioApp;