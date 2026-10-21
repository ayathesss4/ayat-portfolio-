
const groups = [
  {
    title: "Frontend",
    items: [
      "React.js",
      "JavaScript ES6+",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Responsive Design",
    ],
  },
  {
    title: "React",
    items: [
      "Components",
      "Props",
      "State",
      "Hooks",
      "Context API",
      "React Router",
    ],
  },
  {
    title: "UI / Data",
    items: [
      "Recharts",
      "React Icons",
      "RTL / LTR Interfaces",
      "Dark Mode",
    ],
  },
  {
    title: "Backend / Database",
    items: [
      "REST API Concepts",
      "Supabase",
      "PHP",
      "MySQL",
      "phpMyAdmin",
    ],
  },
  {
    title: "Tools",
    items: [
      "Vite",
      "Git",
      "GitHub",
      "Vercel",
      "VS Code",
      "XAMPP",
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="border-t border-[#252C38] bg-[#0B0E13] px-5 py-24 text-[#E5E7EB] sm:px-8 md:py-32"
    >
      <div className="mx-auto max-w-4xl">
        {/* Section heading */}
        <div className="mb-16 text-right">
          <p className="mb-5 text-xs uppercase tracking-[0.35em] text-[#8FAEFF]">
            Technical Expertise
          </p>

          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Skills & Technologies
          </h2>

          <p className="mt-6 text-lg leading-[2] text-[#AEB7C6]">
            The technologies and tools I use to build responsive,
            functional and user-friendly web applications.
          </p>
        </div>

        {/* Skills groups */}
        <div className="space-y-14">
          {groups.map((group) => (
            <div
              key={group.title}
              className="border-r-[3px] border-[#3157C8] pr-6 text-right"
            >
              <h3 className="mb-7 text-xl font-semibold text-[#E5E7EB] sm:text-2xl">
                {group.title}
              </h3>

              <div className="space-y-4">
                {group.items.map((item) => (
                  <p
                    key={item}
                    className="text-base leading-relaxed text-[#AEB7C6] transition-colors duration-300 hover:text-[#8FAEFF] sm:text-lg"
                  >
                    {item}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <div className="mt-20 border-t border-[#252C38] pt-10 text-right">
          <p className="text-base leading-[2] text-[#AEB7C6]">
            My main focus is frontend development with React.js,
            while continuing to expand my knowledge of modern
            web technologies and development tools.
          </p>
        </div>
      </div>
    </section>
  );
}
