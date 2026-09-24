import { ArrowDown, ArrowUpRight } from "lucide-react";

function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="section-container flex min-h-[calc(100vh-80px)] items-center py-16 sm:py-20">
        <div className="grid w-full items-center gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
          {/* Text */}
          <div>
            <p className="fade-up mb-5 text-sm font-medium uppercase tracking-[0.22em] text-[#A66A4C]">
              Frontend Developer
            </p>

            <h1 className="fade-up-delay-1 max-w-4xl text-5xl font-semibold leading-[1.02] tracking-[-0.05em] sm:text-6xl lg:text-7xl xl:text-8xl">
              Building clean,
              <br />
              modern web
              <br />
              experiences.
            </h1>

            <p className="fade-up-delay-2 mt-7 max-w-xl text-base leading-7 text-[#6F6A63] dark:text-[#A9A29A] sm:text-lg">
              I’m Ayat Hassan Ali, a Computer Engineering graduate focused on
              building responsive and user-friendly interfaces with React.
            </p>

            <div className="fade-up-delay-3 mt-9 flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-full bg-[#1C1B19] px-6 py-3.5 text-sm font-medium text-white transition hover:scale-[1.02] hover:bg-[#A66A4C] dark:bg-[#F5F1EA] dark:text-[#1C1B19] dark:hover:bg-[#C58B6D]"
              >
                View Projects
                <ArrowUpRight size={17} />
              </a>

              <a
                href="#contact"
                className="rounded-full border border-[#D9D3CA] px-6 py-3.5 text-sm font-medium text-[#1C1B19] transition hover:border-[#A66A4C] hover:bg-[#A66A4C] hover:text-white dark:border-white/15 dark:text-white dark:hover:bg-[#C58B6D] dark:hover:text-[#171615]"
              >
                Contact Me
              </a>
            </div>

            <div className="mt-9 flex items-center gap-6">
              <a
                href="https://github.com/ayathesss4"
                target="_blank"
                rel="noreferrer"
                className="text-sm font-medium text-[#6F6A63] transition hover:text-[#A66A4C] dark:text-[#A9A29A] dark:hover:text-[#C58B6D]"
              >
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/ayat-hessen-06269b430/"
                target="_blank"
                rel="noreferrer"
                className="text-sm font-medium text-[#6F6A63] transition hover:text-[#A66A4C] dark:text-[#A9A29A] dark:hover:text-[#C58B6D]"
              >
                LinkedIn
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="hero-image-glow" />

            <div className="hero-image-frame">
              <img
               src="/portfolio.jpg"
                alt="Ayat Hassan Ali"
                className="hero-image"
              />
            </div>

            <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 rounded-2xl border border-[#D9D3CA] bg-white px-5 py-4 shadow-xl sm:left-auto sm:right-0 sm:translate-x-0 dark:border-white/10 dark:bg-[#24211F]">
              <p className="text-xs uppercase tracking-[0.18em] text-[#6F6A63] dark:text-[#A9A29A]">
                React / Frontend
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 items-center gap-2 text-xs text-[#6F6A63] transition hover:text-[#A66A4C] dark:text-[#A9A29A] dark:hover:text-[#C58B6D] md:flex"
      >
        Scroll to explore
        <ArrowDown size={14} />
      </a>
    </section>
  );
}

export default Hero;