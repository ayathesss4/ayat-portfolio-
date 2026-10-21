
import { Routes, Route, useLocation } from "react-router-dom";
import { useLayoutEffect } from "react";

import Home from "./pages/Home.jsx";
import ProjectDetails from "./pages/ProjectDetails.jsx";
import ScrollReveal from "./components/ScrollReveal.jsx";

function ScrollToTop() {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, [pathname]);

  return null;
}
export default function App() {
  return (
    <>
      <ScrollToTop />
      <ScrollReveal />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/projects/:slug"
          element={<ProjectDetails />}
        />

        <Route
          path="/project/:slug"
          element={<ProjectDetails />}
        />
      </Routes>
    </>
  );
}
