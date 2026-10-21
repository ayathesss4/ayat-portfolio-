
export default function About() {
  return (
    <section
      id="about"
      className="border-t border-[#252C38] bg-[#0B0E13] px-5 py-24 text-[#E5E7EB] sm:px-8 md:py-32"
    >
      <div className="mx-auto max-w-4xl">
        {/* Section heading */}
        <div className="mb-14 text-right">
          <p className="mb-5 text-xs tracking-[0.35em] text-[#8FAEFF]">
            ABOUT ME
          </p>

          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            A little about me
          </h2>
        </div>

        {/* Introduction */}
        <div className="space-y-7 text-right text-lg leading-[2.1] text-[#AEB7C6] sm:text-xl">
          <p>
            I'm Ayat Hassan Ali, a Computer Engineering graduate from
            the University of Diyala, class of 2025.
          </p>

          <p>
            I specialize in frontend development, primarily using
            React.js, JavaScript and modern web technologies to create
            responsive and user-friendly interfaces.
          </p>

          <p>
            I have around two years of hands-on experience working
            with a software solutions and web design company,
            where I contributed to developing and improving
            real-world websites and web interfaces.
          </p>
        </div>

        {/* Experience */}
        <div className="mt-20 text-right">
          <h3 className="text-2xl font-semibold sm:text-3xl">
            Professional Experience
          </h3>

          <div className="mt-8 border-r-[3px] border-[#3157C8] pr-6">
            <h4 className="text-xl font-semibold text-[#E5E7EB]">
              Frontend Developer
            </h4>

            <p className="mt-2 text-sm text-[#8FAEFF]">
              Software Solutions & Web Design Company
            </p>

            <p className="mt-6 text-lg leading-[2] text-[#AEB7C6]">
              My work involved updating existing websites,
              developing new pages and sections, improving
              responsive layouts and building interfaces
              based on project requirements.
            </p>
          </div>
        </div>

        {/* Graduation project */}
        <div className="mt-20 text-right">
          <h3 className="text-2xl font-semibold sm:text-3xl">
            Graduation Project
          </h3>

          <div className="mt-8 border-r-[3px] border-[#3157C8] pr-6">
            <h4 className="text-xl font-semibold">
              Educational Platform
            </h4>

            <p className="mt-2 text-sm text-[#8FAEFF]">
              University of Diyala · 2025
            </p>

            <p className="mt-6 text-lg leading-[2] text-[#AEB7C6]">
              As part of my graduation project, I worked on
              an educational platform developed using Laravel.
              My responsibility focused on frontend design
              and implementation, creating responsive pages
              and a clear user experience.
            </p>
          </div>
        </div>

        {/* Approach */}
        <div className="mt-20 border-t border-[#252C38] pt-14 text-right">
          <h3 className="text-2xl font-semibold sm:text-3xl">
            How I Work
          </h3>

          <p className="mt-7 text-lg leading-[2.1] text-[#AEB7C6]">
            I focus on clean layouts, responsive design,
            consistent components and practical solutions.
            I enjoy turning ideas into working applications,
            from the first interface to the final deployment.
          </p>

          <p className="mt-8 border-r-[3px] border-[#3157C8] pr-6 text-lg leading-[2] text-[#AEB7C6]">
            My goal is to build interfaces that are easy to use,
            visually consistent and maintainable as projects grow.
          </p>
        </div>
      </div>
    </section>
  );
}
