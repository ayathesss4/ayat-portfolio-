import {
  Braces,
  Code2,
  Database,
  GitBranch,
  Layout,
  MonitorSmartphone,
} from "lucide-react";

const skillGroups = [
  {
    icon: Code2,
    title: "Frontend",
    skills: ["React.js", "JavaScript ES6+", "HTML5", "CSS3", "Tailwind CSS"],
  },
  {
    icon: Layout,
    title: "UI & UX",
    skills: [
      "Responsive Design",
      "Component Design",
      "RTL / LTR",
      "Dark Mode",
      "Modern UI",
    ],
  },
  {
    icon: Braces,
    title: "React",
    skills: [
      "Components",
      "Props & State",
      "Hooks",
      "Context API",
      "React Router",
    ],
  },
  {
    icon: Database,
    title: "Backend Concepts",
    skills: ["REST APIs", "Supabase", "PHP", "MySQL", "phpMyAdmin"],
  },
  {
    icon: GitBranch,
    title: "Tools",
    skills: ["Git", "GitHub", "Vite", "VS Code", "Vercel"],
  },
  {
    icon: MonitorSmartphone,
    title: "Other",
    skills: ["Recharts", "React Icons", "PWA", "Dashboard UI", "Web Apps"],
  },
];

function Skills() {
  return (
    <section
      id="skills"
      className="border-t border-black/5 py-24 dark:border-white/10"
    >
      <div className="section-container">
        <div className="mb-12">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#8b6f47]">
            Skills
          </p>

          <h2 className="mt-3 text-3xl font-semibold tracking-[-0.03em] sm:text-5xl">
            Tools I use to build.
          </h2>

          <p className="mt-5 max-w-xl text-sm leading-6 text-black/50 dark:text-white/50">
            A practical frontend-focused toolkit for creating responsive and
            maintainable web interfaces.
          </p>
        </div>

        <div className="grid gap-px overflow-hidden rounded-3xl border border-black/10 bg-black/10 sm:grid-cols-2 lg:grid-cols-3 dark:border-white/10 dark:bg-white/10">
          {skillGroups.map((group) => {
            const Icon = group.icon;

            return (
              <div
                key={group.title}
                className="bg-[#f7f5f0] p-7 dark:bg-[#111111]"
              >
                <Icon size={22} strokeWidth={1.5} />

                <h3 className="mt-6 text-lg font-semibold">{group.title}</h3>

                <div className="mt-4 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full bg-black/[0.045] px-3 py-1.5 text-xs text-black/60 dark:bg-white/[0.06] dark:text-white/60"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Skills;