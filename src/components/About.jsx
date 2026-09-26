function About() {
  return (
    <section
      id="about"
      className="border-t border-[#DDD8D0] bg-[#F8F6F1] py-24 dark:border-white/10 dark:bg-[#121212]"
    >
      <div className="section-container">
        <div className="grid gap-14 lg:grid-cols-[0.65fr_1.35fr] lg:gap-20">
          
          {/* Heading */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#C83B35]">
              About Me
            </p>

            <h2 className="mt-4 max-w-xs text-4xl font-semibold leading-tight tracking-[-0.04em] text-[#111111] dark:text-white sm:text-5xl">
              A frontend-focused engineer with real project experience.
            </h2>
          </div>

          {/* Content */}
          <div>
            <p className="max-w-3xl text-xl font-medium leading-8 tracking-[-0.02em] text-[#222222] dark:text-[#F1EEE8] sm:text-2xl">
              I’m a Computer Engineering graduate from the University of
              Diyala, with a focus on frontend development, React and modern
              web interfaces.
            </p>

            <div className="mt-8 max-w-3xl space-y-5 text-base leading-7 text-[#68645E] dark:text-[#A8A49D]">
              <p>
                I have around two years of practical experience working with a
                software solutions and web design company, where I worked on
                web interfaces and gained hands-on experience with real
                development projects.
              </p>

              <p>
                During my graduation project, I worked on an educational
                platform built with Laravel. My main responsibility was the
                frontend side, including designing and developing the user
                interface and creating a clear and responsive experience.
              </p>

              <p>
                My current work focuses on React-based applications,
                responsive design, dashboards, Arabic RTL interfaces and
                turning ideas into clean, practical web experiences.
              </p>
            </div>

            {/* Experience timeline */}
            <div className="mt-12 grid gap-4 sm:grid-cols-2">
              
              <div className="rounded-3xl border border-[#DDD8D0] bg-white p-6 transition duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-white/10 dark:bg-[#191919]">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#C83B35]">
                  Professional Experience
                </p>

                <h3 className="mt-4 text-xl font-semibold text-[#171717] dark:text-white">
                  Software Solutions & Web Design
                </h3>

                <p className="mt-3 text-sm leading-6 text-[#77736D] dark:text-white/50">
                  Around 2 years of practical experience working on web
                  interfaces and software-related projects.
                </p>
              </div>

              <div className="rounded-3xl border border-[#DDD8D0] bg-white p-6 transition duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-white/10 dark:bg-[#191919]">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#C83B35]">
                  Graduation Project
                </p>

                <h3 className="mt-4 text-xl font-semibold text-[#171717] dark:text-white">
                  Educational Platform
                </h3>

                <p className="mt-3 text-sm leading-6 text-[#77736D] dark:text-white/50">
                  Laravel-based educational platform. Responsible for
                  frontend design, UI implementation and responsive layouts.
                </p>
              </div>
            </div>

            {/* Quick facts */}
            <div className="mt-10 grid grid-cols-2 gap-y-7 border-t border-[#DDD8D0] pt-8 dark:border-white/10 sm:grid-cols-4">
              <div>
                <p className="text-2xl font-semibold text-[#111111] dark:text-white">
                  2+
                </p>
                <p className="mt-1 text-xs text-[#77736D] dark:text-white/45">
                  Years Experience
                </p>
              </div>

              <div>
                <p className="text-2xl font-semibold text-[#111111] dark:text-white">
                  React
                </p>
                <p className="mt-1 text-xs text-[#77736D] dark:text-white/45">
                  Main Stack
                </p>
              </div>

              <div>
                <p className="text-2xl font-semibold text-[#111111] dark:text-white">
                  RTL
                </p>
                <p className="mt-1 text-xs text-[#77736D] dark:text-white/45">
                  Arabic Interfaces
                </p>
              </div>

              <div>
                <p className="text-2xl font-semibold text-[#111111] dark:text-white">
                  2025
                </p>
                <p className="mt-1 text-xs text-[#77736D] dark:text-white/45">
                  Graduation
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;