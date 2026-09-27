import { useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import ProjectDetails from "./components/ProjectDetails";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function Test() {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleSelectProject = (project) => {
    setSelectedProject(project);

    // فتح صفحة المشروع من أعلى الصفحة
    window.scrollTo(0, 0);
  };

  const handleBackToProjects = () => {
    setSelectedProject(null);

    // الرجوع إلى أعلى قسم المشاريع
    setTimeout(() => {
      document
        .getElementById("projects")
        ?.scrollIntoView({ behavior: "smooth" });
    }, 0);
  };

  if (selectedProject) {
    return (
      <div className="min-h-screen bg-[#F3F0EA] text-[#111111] dark:bg-[#0D0D0E] dark:text-[#F5F2EC]">
        <Navbar />

        <ProjectDetails
          project={selectedProject}
          onBack={handleBackToProjects}
        />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F3F0EA] text-[#111111] dark:bg-[#0D0D0E] dark:text-[#F5F2EC]">
      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />

        <Projects onSelectProject={handleSelectProject} />

        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default Test;