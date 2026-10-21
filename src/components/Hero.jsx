
import { FiArrowUpRight, FiArrowDown } from "react-icons/fi";

const featuredProjects = [
  {
    name: "MADAR | مدار",
    url: "https://madar-the-core-erp.vercel.app/",
  },
  {
    name: "Clothing Store",
    url: "https://clothing-store-seven-beta.vercel.app/",
  },
  {
    name: "Store Dashboard",
    url: "https://clothing-store-dashboard.vercel.app/",
  },
  {
    name: "Dental Plan",
    url: "https://my-dental-plan.lovable.app/",
  },
  {
    name: "Espresso Moment",
    url: "https://espresso-moment-maker.lovable.app/",
  },
  {
    name: "GHOSN | غُصن",
    url: "https://animated-venue-clone.lovable.app/",
  },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen bg-[#0B0E13] px-5 pb-24 pt-28 text-[#E5E7EB] sm:px-8"
    >
      <div className="mx-auto max-w-6xl">
        {/* Profile */}
        <div className="mb-14 flex justify-end">
          <div className="h-44 w-44 overflow-hidden rounded-full border-2 border-[#3157C8] bg-[#111722] sm:h-56 sm:w-56">
            <img
              src="/portfolio.jpg"
              alt="Ayat Hassan"
              className="block h-full w-full object-cover object-[center_35%]"
            />
          </div>
        </div>

        {/* Introduction */}
        <div className="mb-20 text-right">
          <p className="mb-5 text-sm font-medium uppercase tracking-[0.25em] text-[#8FAEFF]">
            Frontend Developer
          </p>

          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Ayat Hassan
            <span className="text-[#3157C8]">.</span>
          </h1>

          <p className="mt-5 text-xl font-medium text-[#8FAEFF] sm:text-2xl">
            React.js & JavaScript
          </p>

          <p className="ml-auto mt-7 max-w-2xl text-base leading-9 text-[#AEB7C6] sm:text-lg">
            Computer Engineering graduate from the University of Diyala,
            passionate about building responsive web applications,
            interactive interfaces and clean digital experiences.
          </p>
        </div>

        {/* Selected Projects */}
        <div id="featured-projects" className="mb-16">
          <h2 className="mb-10 text-right text-3xl font-bold text-white sm:text-4xl">
            Selected Projects
          </h2>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {featuredProjects.map((project) => (
              <a
                key={project.name}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex min-h-[80px] items-center justify-center rounded-2xl border border-[#293449] bg-[#0B0E13] px-5 py-5 text-center text-lg font-semibold text-white transition-colors duration-200 hover:border-[#3157C8] hover:bg-[#111722] sm:text-xl"
              >
                {project.name}
              </a>
            ))}
          </div>
        </div>

        {/* Explore button */}
        <div className="flex justify-end">
          <a
            href="#projects"
            className="inline-flex items-center justify-center gap-3 rounded-2xl bg-[#3157C8] px-10 py-5 text-lg font-semibold text-white transition-colors hover:bg-[#2447AD]"
          >
            Explore My Work <a
  href="/Ayat_Hassan_CV.pdf"
  download="Ayat_Hassan_CV.pdf"
  className="inline-flex items-center justify-center rounded-2xl border border-[#3157C8] px-8 py-5 text-base font-semibold text-[#8FAEFF] transition hover:bg-[#182440]"
>
  Download CV
</a>
            <FiArrowUpRight size={20} />
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="mt-16 flex justify-center">
          <a
            href="#about"
            aria-label="Scroll to About section"
            className="text-[#8FAEFF] transition hover:text-white"
          >
            <FiArrowDown size={22} />
          </a>
        </div>
      </div>
    </section>
  );
}
