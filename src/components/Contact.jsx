function Contact() {
  return (
    <section
      id="contact"
      className="border-t border-black/5 py-24 dark:border-white/10"
    >
      <div className="section-container">
        <div className="rounded-[32px] bg-[#171717] px-7 py-14 text-white sm:px-12 sm:py-16">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#c5aa82]">
            Contact
          </p>

          <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-[-0.04em] sm:text-6xl">
            Have a project or opportunity in mind?
          </h2>

          <p className="mt-6 max-w-xl text-sm leading-6 text-white/55 sm:text-base">
            I’m open to frontend development opportunities, remote work and
            projects where I can build useful and polished web experiences.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="mailto:a2y2a00t@gmail.com"
              className="rounded-full bg-white px-6 py-3.5 text-sm font-medium text-black transition hover:scale-[1.02]"
            >
              Email Me
            </a>

            <a
              href="https://www.linkedin.com/in/ayat-hessen-06269b430/"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/20 px-6 py-3.5 text-sm font-medium text-white transition hover:bg-white hover:text-black"
            >
              LinkedIn
            </a>

            <a
              href="https://github.com/ayathesss4"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/20 px-6 py-3.5 text-sm font-medium text-white transition hover:bg-white hover:text-black"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;