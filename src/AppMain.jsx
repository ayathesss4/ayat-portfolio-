```jsx
import { useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import ProjectDetails from "./components/ProjectDetails";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function AppMain() {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleSelectProject = (project) => {
    setSelectedProject(project);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleBackToProjects = () => {
    setSelectedProject(null);

    setTimeout(() => {
      document
        .getElementById("projects")
        ?.scrollIntoView({ behavior: "smooth" });
    }, 50);
  };

  return (
    <div className="min-h-screen bg-[#f7f5f0] text-[#171717] transition-colors duration-300 dark:bg-[#111111] dark:text-white">
      <Navbar />

      {selectedProject ? (
        <ProjectDetails
          project={selectedProject}
          onBack={handleBackToProjects}
        />
      ) : (
        <>
          <main>
            <Hero />
            <About />
            <Skills />
            <Projects onSelectProject={handleSelectProject} />
            <Contact />
          </main>

          <Footer />
        </>
      )}
    </div>
  );
}

export default AppMain;
```