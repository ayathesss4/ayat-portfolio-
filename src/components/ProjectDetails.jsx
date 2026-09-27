import { ArrowLeft, ArrowUpRight, Check } from "lucide-react";

function ProjectDetails({ project, onBack }) {
  if (!project) return null;

  return (
    <main className="min-h-screen bg-[#F3F0EA] text-[#171717] dark:bg-[#0D0D0E] dark:text-white">
      <div className="section-container py-10">
        {/* Back */}
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 text-sm text-black/60 transition hover:text-[#C83B35] dark:text-white/60 dark:hover:text-[#C83B35]"
        >
          <ArrowLeft size={17} />
          Back to Projects
        </button>

        {/* Project Header */}
        <div className="mt-10">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#C83B35]">
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
                className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-[#171717] px-6 py-3.5 text-sm font-medium text-white transition hover:-translate-y-0.5 hover:bg-[#C83B35] dark:bg-white dark:text-black dark:hover:bg-[#C83B35] dark:hover:text-white"
              >
                Open Live Demo
                <ArrowUpRight size={17} />
              </a>
            )}
          </div>
        </div>

        {/* Preview FIRST */}
        <div className="mt-10 overflow-hidden rounded-[28px] border border-black/10 bg-white shadow-sm dark:border-white/10 dark:bg-[#191919]">
          <div className="flex items-center gap-2 border-b border-black/10 px-5 py-4 dark:border-white/10">
            <span className="h-2.5 w-2.5 rounded-full bg-[#D6BFA0]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#B89B78]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#8B6F47]" />

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

        {/* Overview */}
        <section className="mt-16 grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#C83B35]">
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
        </section>

        {/* Problem */}
        <section className="mt-16 border-t border-black/10 pt-12 dark:border-white/10">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#C83B35]">
            Problem
          </p>

          <h2 className="mt-3 text-3xl font-semibold tracking-[-0.03em]">
            What problem does it address?
          </h2>

          <div className="mt-6 max-w-3xl rounded-3xl border border-black/10 bg-white p-7 dark:border-white/10 dark:bg-[#191919]">
            <p className="text-base leading-8 text-black/65 dark:text-white/65">
              {project.problem}
            </p>
          </div>
        </section>

        {/* Technologies */}
        <section className="mt-16 border-t border-black/10 pt-12 dark:border-white/10">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#C83B35]">
            Technologies
          </p>

          <h2 className="mt-3 text-3xl font-semibold tracking-[-0.03em]">
            Built with
          </h2>

          <div className="mt-6 flex flex-wrap gap-2">
            {project.tech.map((item) => (
              <span
                key={item}
                className="rounded-full border border-black/10 bg-white px-4 py-2.5 text-sm text-black/60 dark:border-white/10 dark:bg-[#191919] dark:text-white/60"
              >
                {item}
              </span>
            ))}
          </div>
        </section>

        {/* Key Features */}
        {project.features?.length > 0 && (
          <section className="mt-16 border-t border-black/10 pt-12 dark:border-white/10">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#C83B35]">
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
                  <div className="mt-0.5 rounded-full bg-[#C83B35]/10 p-1.5 text-[#C83B35]">
                    <Check size={14} />
                  </div>

                  <span className="text-sm leading-6 text-black/65 dark:text-white/65">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Back */}
        <div className="mt-16 border-t border-black/10 pt-8 dark:border-white/10">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 rounded-full border border-black/10 px-5 py-3 text-sm font-medium transition hover:border-[#C83B35] hover:bg-[#C83B35] hover:text-white dark:border-white/10 dark:hover:bg-[#C83B35]"
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