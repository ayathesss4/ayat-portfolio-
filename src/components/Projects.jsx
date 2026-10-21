
import { Link } from "react-router-dom";
import { FiArrowUpRight, FiExternalLink } from "react-icons/fi";
import projects from "../data/projects.js";

export default function Projects() {
  return (
    <section
      id="projects"
      className="border-t border-[#252C38] bg-[#0B0E13] px-5 py-24 text-[#E5E7EB] sm:px-8 md:py-32"
    >
      <div className="mx-auto max-w-4xl">
        <div className="mb-16 text-right">
          <p className="mb-5 text-xs uppercase tracking-[0.35em] text-[#8FAEFF]">
            SELECTED WORK
          </p>

          <h2 className="text-3xl font-bold sm:text-4xl">
            My Projects
          </h2>

          <p className="mt-6 text-lg leading-8 text-[#AEB7C6]">
            Explore my web applications, dashboards and
            interactive experiences.
          </p>
        </div>

        <div className="divide-y divide-[#252C38] border-y border-[#252C38]">
          {projects.map((project, index) => {
            const title = project.name ?? project.title;
            const description =
              project.shortDescription ?? project.description;
            const technologies =
              project.technologies ?? project.tech ?? [];

            return (
              <div
                key={project.slug}
                className="py-8 transition-colors hover:bg-[#111722] sm:px-5"
              >
                <div className="flex items-start justify-between gap-5">
                  <span className="pt-1 text-sm font-medium text-[#8FAEFF]">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div className="min-w-0 flex-1 text-right">
                    <p className="mb-2 text-xs uppercase tracking-widest text-[#8FAEFF]">
                      {project.category}
                    </p>

                    <h3 className="text-xl font-semibold sm:text-2xl">
                      {title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-[#AEB7C6] sm:text-base">
                      {description}
                    </p>

                    <div className="mt-4 flex flex-wrap justify-end gap-3">
                      {technologies.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="text-xs text-[#8793A7]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="mt-6 flex flex-wrap justify-end gap-3">
                      <Link
                        to={`/projects/${project.slug}`}
                        className="inline-flex items-center gap-2 rounded-lg border border-[#3157C8] px-4 py-2.5 text-sm text-[#8FAEFF] transition hover:bg-[#182440]"
                      >
                        View Details
                        <FiArrowUpRight size={16} />
                      </Link>

                      {project.liveDemo && (
                        <a
                          href={project.liveDemo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 rounded-lg bg-[#3157C8] px-4 py-2.5 text-sm font-medium text-white transition hover:bg-[#2447AD]"
                        >
                          Live Demo
                          <FiExternalLink size={16} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
