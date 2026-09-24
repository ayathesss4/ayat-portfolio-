import { ArrowLeft, ArrowUpRight, Check } from "lucide-react";

function ProjectDetails({ project, onBack }) {
  if (!project) return null;

  return (
    <main className="min-h-screen bg-[#f7f5f0] text-[#171717] dark:bg-[#111111] dark:text-white">
      <div className="section-container py-10">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 text-sm text-black/60 transition hover:text-black dark:text-white/60 dark:hover:text-white"
        >
          <ArrowLeft size={17} />
          Back to Projects
        </button>

        <div className="mt-12">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#8b6f47]">
            {project.category}
          </p>

          <div className="mt-4 flex flex-col justify-between gap-7 md:flex-row md:items-end">
            <div>
              <h1 className="text-4xl font-semibold tracking-[-0.04em] sm:text-6xl">
                {project.title}
              </h1>

              <p className="mt-5 max-w-2xl text-base leading-7 text-black/55 dark:text-white/55">
                {project.description}
              </p>
            </div>

            {project.link !== "#" && (
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-[#171717] px-6 py-3.5 text-sm font-medium text-white transition hover:scale-[1.02] dark:bg-white dark:text-black"
              >
                Open Live Demo
                <ArrowUpRight size={17} />
              </a>
            )}
          </div>
        </div>

        <div className="mt-12 overflow-hidden rounded-[28px] border border-black/10 bg-white shadow-sm dark:border-white/10 dark:bg-[#191919]">
          <div className="flex items-center gap-2 border-b border-black/10 px-5 py-4 dark:border-white/10">
            <span className="h-2.5 w-2.5 rounded-full bg-[#d6bfa0]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#b89b78]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#8b6f47]" />

            <span className="ml-3 text-xs text-black/40 dark:text-white/40">
              Live Preview
            </span>
          </div>

          {project.link !== "#" ? (
            <iframe
              src={project.link}
              title={`${project.title} preview`}
              className="h-[720px] w-full border-0 bg-white"
              loading="lazy"
            />
          ) : (
            <div className="flex h-[500px] items-center justify-center text-sm text-black/40 dark:text-white/40">
              Live preview will be available soon.
            </div>
          )}
        </div>

        <div className="mt-14 grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#8b6f47]">
              Overview
            </p>

            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.03em]">
              About this project
            </h2>

            <p className="mt-5 max-w-2xl text-sm leading-7 text-black/55 dark:text-white/55">
              This project was created as part of my frontend development work,
              focusing on responsive layouts, reusable components and a clear
              user experience. The interface was designed with attention to
              structure, usability and visual consistency.
            </p>
          </div>

          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#8b6f47]">
              Technologies
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {project.tech.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-black/10 px-3.5 py-2 text-xs text-black/60 dark:border-white/10 dark:text-white/60"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        {project.features?.length > 0 && (
          <div className="mt-16 border-t border-black/10 pt-12 dark:border-white/10">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#8b6f47]">
              Key Features
            </p>

            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.03em]">
              What I built
            </h2>

            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {project.features.map((feature) => (
                <div
                  key={feature}
                  className="flex items-start gap-3 rounded-2xl border border-black/10 bg-white p-5 dark:border-white/10 dark:bg-[#191919]"
                >
                  <div className="mt-0.5 rounded-full bg-[#8b6f47]/10 p-1.5 text-[#8b6f47]">
                    <Check size={14} />
                  </div>

                  <span className="text-sm leading-6 text-black/65 dark:text-white/65">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="mt-16 border-t border-black/10 pt-8 dark:border-white/10">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 rounded-full border border-black/10 px-5 py-3 text-sm font-medium transition hover:bg-black hover:text-white dark:border-white/10 dark:hover:bg-white dark:hover:text-black"
          >
            <ArrowLeft size={16} />
            Back to all projects
          </button>
        </div>
      </div>
    </main>
  );
}

export default ProjectDetails;