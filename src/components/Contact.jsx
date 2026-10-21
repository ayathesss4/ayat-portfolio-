
import {
  FiMail,
  FiLinkedin,
  FiGithub,
  FiArrowUpRight,
} from "react-icons/fi";

const EMAIL = "a2y2a00t@gmail.com";
const LINKEDIN = "https://www.linkedin.com/in/ayat-hessen-06269b430/";
const GITHUB = "https://github.com/ayathesss4";

const channels = [
  {
    label: "Email",
    value: EMAIL,
    href: `mailto:${EMAIL}`,
    icon: FiMail,
  },
  {
    label: "LinkedIn",
    value: "View LinkedIn Profile",
    href: LINKEDIN,
    icon: FiLinkedin,
  },
  {
    label: "GitHub",
    value: "Explore My GitHub",
    href: GITHUB,
    icon: FiGithub,
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="border-t border-[#252C38] bg-[#0B0E13] px-5 py-24 text-[#E5E7EB] sm:px-8 md:py-32"
    >
      <div className="mx-auto max-w-4xl">
        {/* Heading */}
        <div className="mb-14 text-right">
          <p className="mb-5 text-xs uppercase tracking-[0.35em] text-[#8FAEFF]">
            GET IN TOUCH
          </p>

          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Let's Connect
          </h2>

          <p className="mt-6 text-lg leading-[2] text-[#AEB7C6]">
            I'm open to frontend development opportunities and
            collaborations. Feel free to reach out if you'd like
            to discuss a project or an opportunity.
          </p>
        </div>

        {/* Contact links */}
        <div className="divide-y divide-[#252C38] border-y border-[#252C38]">
          {channels.map(({ label, value, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="group flex items-center justify-between gap-5 py-7 transition-colors hover:bg-[#111722] sm:px-5"
            >
              <FiArrowUpRight
                size={20}
                className="shrink-0 text-[#8FAEFF] transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
              />

              <div className="flex min-w-0 items-center gap-5">
                <div className="min-w-0 text-right">
                  <p className="text-lg font-medium text-[#E5E7EB]">
                    {label}
                  </p>

                  <p className="mt-2 break-all text-sm text-[#AEB7C6]">
                    {value}
                  </p>
                </div>

                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[#293449] text-[#8FAEFF]">
                  <Icon size={20} />
                </span>
              </div>
            </a>
          ))}
        </div>

        {/* Bottom message */}
        <div className="mt-16 border-r-[3px] border-[#3157C8] pr-6 text-right">
          <h3 className="text-xl font-semibold text-[#E5E7EB]">
            Have a project in mind?
          </h3>

          <p className="mt-4 text-base leading-8 text-[#AEB7C6]">
            I'm always interested in working on useful web
            applications, modern interfaces and new ideas.
          </p>

          <a
            href={`mailto:${EMAIL}`}
            className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#8FAEFF] transition hover:text-white"
          >
            Send Me an Email
            <FiArrowUpRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
