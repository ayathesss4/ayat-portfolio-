
import { useLayoutEffect } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { FiArrowLeft, FiExternalLink } from "react-icons/fi";
import projects from "../data/projects.js";
import Footer from "../components/Footer.jsx";

export default function ProjectDetails() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  useLayoutEffect(() => {
    // Reset scroll when opening a project or switching projects
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [slug]);

  if (!project) {
    return <Navigate to="/" replace />;
  }

  const demoUrl = project.liveDemo;
  const demoHost = demoUrl
    ? demoUrl.replace(/^https?:\/\//, "").replace(/\/$/, "")
    : "";

  const technologies = project.technologies ?? project.tech ?? [];
  const features = project.features ?? [];

  return (
    <div className="min-h-screen bg-[#0B0E13] text-[#E5E7EB]">
      {/* Header */}
      <header className="border-b border-[#252C38]">
        <div className="mx-auto flex h-20 max-w-4xl items-center justify-between px-5 sm:px-8">
          <Link
            to="/#projects"
            className="inline-flex items-center gap-2 text-sm text-[#AEB7C6] transition hover:text-[#8FAEFF]"
          >
            <FiArrowLeft size={17} />
            Back to Projects
          </Link>

          <span className="text-lg font-bold tracking-wide">
            AYAT<span className="text-[#3157C8]">.</span>
          </span>
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-5 pb-24 sm:px-8">
        {/* Project title */}
        <div className="pb-10 pt-12 text-right">
          <p className="mb-4 text-xs uppercase tracking-[0.3em] text-[#8FAEFF]">
            {project.category}
          </p>

          <h1 className="text-3xl font-bold tracking-tight sm:text-5xl">
            {project.name ?? project.title}
          </h1>
        </div>

        {/* Live Preview — first */}
        <section className="mb-20">
          <div className="overflow-hidden rounded-xl border border-[#293449] bg-[#111722]">
            <div className="flex items-center gap-2 border-b border-[#293449] px-4 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-[#3157C8]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#293449]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#293449]" />

              <span className="ml-3 truncate text-xs text-[#8793A7]">
                {demoHost}
              </span>
            </div>

            {demoUrl ? (
              <iframe
                src={demoUrl}
                title={`${project.name ?? project.title} live preview`}
                loading="eager"
                className="h-[420px] w-full border-0 bg-white sm:h-[580px]"
              />
            ) : (
              <div className="flex h-[360px] items-center justify-center text-[#8793A7]">
                Live preview unavailable
              </div>
            )}
          </div>

          {demoUrl && (
            <a
              href={demoUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex items-center gap-2 rounded-lg bg-[#3157C8] px-6 py-3 text-sm font-medium text-white transition hover:bg-[#2447AD]"
            >
              Open Live Demo
              <FiExternalLink size={16} />
            </a>
          )}

          <p className="mt-7 text-right text-base leading-8 text-[#AEB7C6]">
            {project.shortDescription ?? project.description}
          </p>
        </section>

        {/* Overview */}
        <section className="mb-16 text-right">
          <h2 className="mb-6 text-2xl font-semibold sm:text-3xl">
            Overview
          </h2>

          <p className="text-base leading-[2] text-[#AEB7C6] sm:text-lg">
            {project.overview}
          </p>
        </section>

        {/* Problem */}
        <section className="mb-16 border-r-[3px] border-[#3157C8] pr-6 text-right">
          <h2 className="mb-6 text-2xl font-semibold sm:text-3xl">
            Problem
          </h2>

          <p className="text-base leading-[2] text-[#AEB7C6] sm:text-lg">
            {project.problem}
          </p>
        </section>

        {/* Technologies */}
        <section className="mb-16 text-right">
          <h2 className="mb-7 text-2xl font-semibold sm:text-3xl">
            Technologies
          </h2>

          <div className="space-y-4 border-r-[3px] border-[#3157C8] pr-6">
            {technologies.map((tech) => (
              <p
                key={tech}
                className="text-base text-[#AEB7C6] sm:text-lg"
              >
                {tech}
              </p>
            ))}
          </div>
        </section>

        {/* Key Features */}
        <section className="mb-20 text-right">
          <h2 className="mb-7 text-2xl font-semibold sm:text-3xl">
            Key Features
          </h2>

          <div className="space-y-5 border-r-[3px] border-[#3157C8] pr-6">
            {features.map((feature) => (
              <p
                key={feature}
                className="text-base leading-8 text-[#AEB7C6] sm:text-lg"
              >
                {feature}
              </p>
            ))}
          </div>
        </section>

        {/* Back */}
        <div className="border-t border-[#252C38] pt-10">
          <Link
            to="/#projects"
            className="inline-flex items-center gap-2 text-sm text-[#8FAEFF] transition hover:text-white"
          >
            <FiArrowLeft size={17} />
            Back to Projects
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
