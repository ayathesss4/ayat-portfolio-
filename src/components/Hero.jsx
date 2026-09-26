import { ArrowDown, ArrowUpRight, BriefcaseBusiness, GraduationCap } from "lucide-react";

function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[#F3F0EA] dark:bg-[#0D0D0E]"
    >
      {/* Decorative background */}
      <div className="pointer-events-none absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-[#C83B35]/[0.06] blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -left-40 h-[450px] w-[450px] rounded-full bg-[#172554]/[0.05] blur-3xl" />

      <div className="section-container relative flex min-h-[calc(100vh-80px)] items-center py-16 sm:py-20 lg:py-24">
        <div className="grid w-full items-center gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
          
          {/* LEFT */}
          <div>
            <div className="fade-up inline-flex items-center gap-2 rounded-full border border-[#D8D3CA] bg-white/60 px-4 py-2 text-xs font-medium text-[#55524D] backdrop-blur-sm dark:border-white/10 dark:bg-white/[0.04] dark:text-[#B7B3AC]">
              <span className="h-2 w-2 rounded-full bg-[#C83B35]" />
              Available for Frontend Opportunities
            </div>

            <p className="fade-up-delay-1 mt-7 text-sm font-semibold uppercase tracking-[0.22em] text-[#C83B35]">
              Frontend Developer
            </p>

            <h1 className="fade-up-delay-1 mt-4 max-w-4xl text-5xl font-semibold leading-[0.98] tracking-[-0.055em] text-[#111111] dark:text-[#F5F2EC] sm:text-6xl lg:text-7xl xl:text-[82px]">
              I build digital
              <br />
              experiences that
              <br />
              <span className="text-[#C83B35]">feel intentional.</span>
            </h1>

            <p className="fade-up-delay-2 mt-7 max-w-xl text-base leading-7 text-[#67635D] dark:text-[#AAA69F] sm:text-lg">
              I’m Ayat Hassan Ali, a Computer Engineering graduate and
              Frontend Developer focused on React, responsive interfaces and
              thoughtful user experiences.
            </p>

            <div className="fade-up-delay-3 mt-9 flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-full bg-[#111111] px-6 py-3.5 text-sm font-medium text-white transition duration-300 hover:-translate-y-1 hover:bg-[#C83B35] dark:bg-[#F5F2EC] dark:text-[#111111] dark:hover:bg-[#C83B35] dark:hover:text-white"
              >
                Explore My Work
                <ArrowUpRight size={17} />
              </a>

              <a
                href="#contact"
                className="rounded-full border border-[#D2CDC5] bg-white/40 px-6 py-3.5 text-sm font-medium text-[#111111] backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-[#C83B35] hover:bg-[#C83B35] hover:text-white dark:border-white/15 dark:bg-white/[0.03] dark:text-white dark:hover:border-[#C83B35] dark:hover:bg-[#C83B35]"
              >
                Let’s Connect
              </a>
            </div>

            {/* Experience stats */}
            <div className="mt-12 grid max-w-xl grid-cols-2 border-y border-[#D8D3CA] py-6 dark:border-white/10 sm:grid-cols-3">
              <div className="border-r border-[#D8D3CA] pr-5 dark:border-white/10">
                <p className="text-3xl font-semibold tracking-tight text-[#111111] dark:text-white">
                  2+
                </p>
                <p className="mt-1 text-xs uppercase tracking-[0.12em] text-[#77736D] dark:text-[#99958E]">
                  Years Experience
                </p>
              </div>

              <div className="px-5">
                <p className="text-3xl font-semibold tracking-tight text-[#111111] dark:text-white">
                  React
                </p>
                <p className="mt-1 text-xs uppercase tracking-[0.12em] text-[#77736D] dark:text-[#99958E]">
                  Main Stack
                </p>
              </div>

              <div className="hidden border-l border-[#D8D3CA] pl-5 dark:border-white/10 sm:block">
                <p className="text-3xl font-semibold tracking-tight text-[#111111] dark:text-white">
                  2025
                </p>
                <p className="mt-1 text-xs uppercase tracking-[0.12em] text-[#77736D] dark:text-[#99958E]">
                  Engineering Graduate
                </p>
              </div>
            </div>

            <div className="mt-7 flex items-center gap-6">
              <a
                href="https://github.com/ayathesss4"
                target="_blank"
                rel="noreferrer"
                className="text-sm font-medium text-[#67635D] transition hover:text-[#C83B35] dark:text-[#AAA69F]"
              >
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/ayat-hessen-06269b430/"
                target="_blank"
                rel="noreferrer"
                className="text-sm font-medium text-[#67635D] transition hover:text-[#C83B35] dark:text-[#AAA69F]"
              >
                LinkedIn
              </a>
            </div>
          </div>

          {/* RIGHT */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="hero-image-wrapper">
              <div className="hero-image-glow" />

              <div className="hero-image-frame">
                <img
                  src="/portfolio.jpg"
                  alt="Ayat Hassan Ali"
                  className="hero-image"
                />
              </div>

              <div className="hero-badge">
                React / Frontend
              </div>

              {/* Experience card */}
              <div className="absolute -left-5 top-10 hidden w-[185px] rounded-2xl border border-white/10 bg-[#111111]/95 p-4 text-white shadow-2xl backdrop-blur-xl sm:block lg:-left-16">
                <div className="flex items-center gap-3">
                  <div className="rounded-xl bg-[#C83B35]/15 p-2.5 text-[#E05A52]">
                    <BriefcaseBusiness size={18} />
                  </div>

                  <div>
                    <p className="text-lg font-semibold">2+ Years</p>
                    <p className="text-[10px] uppercase tracking-[0.12em] text-white/45">
                      Experience
                    </p>
                  </div>
                </div>

                <p className="mt-3 text-xs leading-5 text-white/55">
                  Software solutions & web design
                </p>
              </div>

              {/* Graduation project card */}
              <div className="absolute -right-4 bottom-16 hidden w-[205px] rounded-2xl border border-[#D8D3CA] bg-[#F8F6F1]/95 p-4 shadow-2xl backdrop-blur-xl dark:border-white/10 dark:bg-[#181818]/95 sm:block lg:-right-12">
                <div className="flex items-start gap-3">
                  <div className="rounded-xl bg-[#172554]/10 p-2.5 text-[#243B72] dark:bg-white/10 dark:text-[#9BAEDB]">
                    <GraduationCap size={18} />
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-[#171717] dark:text-white">
                      Graduation Project
                    </p>

                    <p className="mt-1 text-[11px] leading-4 text-[#77736D] dark:text-white/45">
                      Educational platform
                    </p>
                  </div>
                </div>

                <p className="mt-3 text-[11px] leading-5 text-[#67635D] dark:text-white/55">
                  Laravel-based platform · Frontend design & development
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 items-center gap-2 text-xs text-[#77736D] transition hover:text-[#C83B35] dark:text-[#9C9993] md:flex"
      >
        Scroll to explore
        <ArrowDown size={14} />
      </a>
    </section>
  );
}

export default Hero;