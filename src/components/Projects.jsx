import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    number: "01",
    title: "MADAR | مدار",
    category: "ERP Web App / PWA",
    description:
      "Arabic-first RTL ERP web application designed for modular business management with a clean and responsive experience.",
    tech: ["React", "TanStack", "Supabase", "Tailwind CSS"],
    link: "https://madar-the-core-erp.vercel.app",
    features: [
      "Arabic RTL interface",
      "Modular ERP structure",
      "Inventory management",
      "Business management interfaces",
      "Dark mode",
      "PWA-ready experience",
    ],
  },

  {
    number: "02",
    title: "Clothing Store",
    category: "E-commerce Frontend",
    description:
      "Modern fashion e-commerce frontend focused on product presentation, responsive layouts and a smooth shopping experience.",
    tech: ["React", "Vite", "Tailwind CSS", "LocalStorage"],
    link: "https://clothing-store-seven-beta.vercel.app/",
    features: [
      "Modern fashion storefront",
      "Responsive product layouts",
      "Product details",
      "Size and color selection",
      "Shopping cart",
      "Responsive mobile design",
    ],
  },

  {
    number: "03",
    title: "Clothing Store Dashboard",
    category: "Admin Dashboard",
    description:
      "Responsive store management dashboard with statistics, product management and modern data visualization.",
    tech: ["React", "Vite", "Recharts", "React Icons"],
    link: "https://clothing-store-dashboard.vercel.app",
    features: [
      "Responsive admin dashboard",
      "Statistics cards",
      "Sales visualization",
      "Product management",
      "Charts with Recharts",
      "Responsive sidebar",
    ],
  },

  {
    number: "04",
    title: "Dental Plan",
    category: "Healthcare Web App",
    description:
      "Clean dental-care web interface designed to organize treatment planning and present healthcare information clearly.",
    tech: ["React", "Responsive UI", "Component Design"],
    link: "https://my-dental-plan.lovable.app",
    features: [
      "Healthcare-focused interface",
      "Treatment planning",
      "Clean information structure",
      "Responsive design",
      "Reusable UI components",
    ],
  },

  {
    number: "05",
    title: "Espresso Moment Maker",
    category: "Interactive Web Experience",
    description:
      "Interactive coffee-themed web experience focused on visual storytelling, modern design and simple user interactions.",
    tech: ["React", "UI Design", "Responsive Design"],
    link: "https://espresso-moment-maker.lovable.app",
    features: [
      "Interactive coffee experience",
      "Visual storytelling",
      "Modern interface",
      "Responsive layout",
      "Simple user interactions",
    ],
  },
];

function Projects({ onSelectProject }) {
  return (
    <section
      id="projects"
      className="border-t border-black/5 py-24 dark:border-white/10"
    >
      <div className="section-container">
        <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#8b6f47]">
              Selected Work
            </p>

            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.03em] sm:text-5xl">
              Projects I’ve built.
            </h2>
          </div>

          <p className="max-w-md text-sm leading-6 text-black/50 dark:text-white/50">
            A selection of frontend applications, dashboards and responsive
            web experiences.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.number}
              className="project-card group overflow-hidden rounded-[30px] border border-black/10 bg-white transition duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-white/10 dark:bg-[#191919]"
            >
              <button
                onClick={() => onSelectProject(project)}
                className="relative block aspect-[16/9] w-full overflow-hidden bg-[#e9e3d9] text-left dark:bg-[#25231f]"
              >
                <div className="absolute inset-0 flex items-center justify-center transition duration-500 group-hover:scale-105">
                  <div className="text-center">
                    <span className="block text-6xl font-semibold tracking-[-0.07em] text-black/80 dark:text-white/80">
                      {project.title
                        .split(" ")
                        .map((word) => word[0])
                        .join("")
                        .slice(0, 3)}
                    </span>

                    <span className="mt-3 block text-[10px] uppercase tracking-[0.3em] text-black/40 dark:text-white/40">
                      {project.category}
                    </span>
                  </div>
                </div>

                <span className="absolute left-6 top-6 rounded-full border border-black/10 bg-white/60 px-3 py-1.5 text-xs backdrop-blur-md dark:border-white/10 dark:bg-black/20">
                  {project.number}
                </span>

                <span className="absolute bottom-6 right-6 flex h-11 w-11 items-center justify-center rounded-full bg-white text-black opacity-0 shadow-lg transition duration-300 group-hover:opacity-100">
                  <ArrowUpRight size={19} />
                </span>
              </button>

              <div className="p-7">
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <p className="text-xs font-medium uppercase tracking-[0.15em] text-[#8b6f47]">
                      {project.category}
                    </p>

                    <h3 className="mt-2 text-2xl font-semibold tracking-[-0.03em]">
                      {project.title}
                    </h3>
                  </div>

                  <button
                    onClick={() => onSelectProject(project)}
                    className="shrink-0 rounded-full border border-black/10 p-3 transition hover:bg-black hover:text-white dark:border-white/10 dark:hover:bg-white dark:hover:text-black"
                    aria-label={`Open ${project.title}`}
                  >
                    <ArrowUpRight size={18} />
                  </button>
                </div>

                <p className="mt-4 text-sm leading-6 text-black/55 dark:text-white/55">
                  {project.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tech.map((item) => (
                    <span
                      key={item}
                      className="rounded-full bg-black/[0.045] px-3 py-1.5 text-xs text-black/55 dark:bg-white/[0.06] dark:text-white/55"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => onSelectProject(project)}
                  className="mt-7 inline-flex items-center gap-2 text-sm font-medium"
                >
                  View Project
                  <ArrowUpRight
                    size={16}
                    className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;