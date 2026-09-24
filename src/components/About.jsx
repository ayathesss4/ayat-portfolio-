function About() {
  return (
    <section
      id="about"
      className="border-t border-black/5 py-24 dark:border-white/10"
    >
      <div className="section-container">
        <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#8b6f47]">
              About Me
            </p>
          </div>

          <div>
            <h2 className="max-w-3xl text-3xl font-semibold leading-tight tracking-[-0.03em] sm:text-5xl">
              I enjoy turning ideas into simple, useful and polished
              interfaces.
            </h2>

            <div className="mt-8 max-w-2xl space-y-5 text-base leading-7 text-black/60 dark:text-white/60">
              <p>
                I’m a Computer Engineering graduate from the University of
                Diyala, with a strong focus on frontend development and
                React-based applications.
              </p>

              <p>
                I work with modern web technologies to create responsive
                interfaces, dashboards and web applications with attention to
                usability, structure and visual details.
              </p>

              <p>
                My projects include Arabic RTL interfaces, business dashboards,
                e-commerce experiences and application concepts designed around
                real-world use cases.
              </p>
            </div>

            <div className="mt-10 grid max-w-2xl grid-cols-2 gap-8 border-t border-black/10 pt-8 dark:border-white/10 sm:grid-cols-3">
              <div>
                <p className="text-2xl font-semibold">React</p>
                <p className="mt-1 text-sm text-black/45 dark:text-white/45">
                  Main stack
                </p>
              </div>

              <div>
                <p className="text-2xl font-semibold">2025</p>
                <p className="mt-1 text-sm text-black/45 dark:text-white/45">
                  Graduation
                </p>
              </div>

              <div>
                <p className="text-2xl font-semibold">RTL</p>
                <p className="mt-1 text-sm text-black/45 dark:text-white/45">
                  Arabic UI
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