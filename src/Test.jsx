import { useEffect, useState } from "react";

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

  // Prevent the browser from restoring the previous scroll position.
  useEffect(() => {
    window.history.scrollRestoration = "manual";

    return () => {
      window.history.scrollRestoration = "auto";
    };
  }, []);

  // Always start the project details page from the top.
  useEffect(() => {
    if (!selectedProject) return;

    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "auto",
      });

      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    };

    scrollToTop();

    const frame1 = requestAnimationFrame(() => {
      scrollToTop();

      requestAnimationFrame(() => {
        scrollToTop();
      });
    });

    const timeout = setTimeout(() => {
      scrollToTop();
    }, 100);

    return () => {
      cancelAnimationFrame(frame1);
      clearTimeout(timeout);
    };
  }, [selectedProject]);

  const handleSelectProject = (project) => {
    // Move to the top immediately before rendering details.
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "auto",
    });

    setSelectedProject(project);
  };

  const handleBackToProjects = () => {
    setSelectedProject(null);

    requestAnimationFrame(() => {
      document
        .getElementById("projects")
        ?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
    });
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