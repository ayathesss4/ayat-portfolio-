import { useEffect, useState } from "react";
import { Menu, Moon, Sun, X } from "lucide-react";

const links = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("portfolio-theme");

    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
      setDarkMode(true);
    }
  }, []);

  const toggleDarkMode = () => {
    const nextMode = !darkMode;

    setDarkMode(nextMode);

    if (nextMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("portfolio-theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("portfolio-theme", "light");
    }
  };

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-[#f7f5f0]/90 backdrop-blur-xl dark:border-white/10 dark:bg-[#111111]/90">
      <div className="section-container flex h-20 items-center justify-between">
        <a
          href="#home"
          className="text-xl font-semibold tracking-tight"
          onClick={() => setMenuOpen(false)}
        >
          Ayat<span className="text-[#8b6f47]">.</span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="nav-link text-sm font-medium text-black/70 transition hover:text-black dark:text-white/70 dark:hover:text-white"
            >
              {link.name}
            </a>
          ))}

          <button
            onClick={toggleDarkMode}
            className="rounded-full border border-black/10 p-2.5 transition hover:bg-black hover:text-white dark:border-white/10 dark:hover:bg-white dark:hover:text-black"
            aria-label="Toggle dark mode"
          >
            {darkMode ? <Sun size={17} /> : <Moon size={17} />}
          </button>
        </nav>

        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={toggleDarkMode}
            className="rounded-full border border-black/10 p-2.5 dark:border-white/10"
            aria-label="Toggle dark mode"
          >
            {darkMode ? <Sun size={17} /> : <Moon size={17} />}
          </button>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="rounded-full border border-black/10 p-2.5 dark:border-white/10"
            aria-label="Open menu"
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="border-t border-black/5 bg-[#f7f5f0] px-5 py-5 dark:border-white/10 dark:bg-[#111111] md:hidden">
          <nav className="flex flex-col gap-5">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-sm font-medium"
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}

export default Navbar;