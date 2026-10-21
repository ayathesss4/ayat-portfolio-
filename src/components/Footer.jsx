
import { FiLinkedin, FiGithub, FiArrowUp } from "react-icons/fi";

const LINKEDIN = "https://www.linkedin.com/in/ayat-hessen-06269b430/";
const GITHUB = "https://github.com/ayathesss4";

export default function Footer() {
  return (
    <footer className="border-t border-[#252C38] bg-[#0B0E13] text-[#E5E7EB]">
      <div className="mx-auto max-w-4xl px-5 py-12 sm:px-8">
        <div className="flex flex-col gap-10 sm:flex-row sm:items-center sm:justify-between">
          {/* Social links */}
          <div className="flex items-center gap-3">
            <a
              href={LINKEDIN}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#293449] text-[#AEB7C6] transition hover:border-[#3157C8] hover:text-[#8FAEFF]"
            >
              <FiLinkedin size={18} />
            </a>

            <a
              href={GITHUB}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#293449] text-[#AEB7C6] transition hover:border-[#3157C8] hover:text-[#8FAEFF]"
            >
              <FiGithub size={18} />
            </a>
          </div>

          {/* Name */}
          <div className="text-right">
            <p className="text-2xl font-bold tracking-[0.04em]">
              AYAT<span className="text-[#3157C8]">.</span>
            </p>

            <p className="mt-2 text-xs uppercase tracking-[0.2em] text-[#8793A7]">
              Frontend Developer
            </p>
          </div>
        </div>

        {/* Bottom line */}
        <div className="mt-12 flex flex-col gap-5 border-t border-[#252C38] pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-[#8793A7]">
            © {new Date().getFullYear()} Ayat Hassan Ali. All rights reserved.
          </p>

          <button
            type="button"
            onClick={() =>
              window.scrollTo({ top: 0, behavior: "smooth" })
            }
            className="inline-flex w-fit items-center gap-2 text-xs font-medium text-[#8FAEFF] transition hover:text-white"
          >
            Back to Top
            <FiArrowUp size={15} />
          </button>
        </div>
      </div>
    </footer>
  );
}
