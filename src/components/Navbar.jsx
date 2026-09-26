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
    <header className="sticky top-0 z-50 border-b border-[#DDD8D0]/80 bg-[#F3F0EA]/85 backdrop-blur-xl transition-colors duration-300 dark:border-white/10 dark:bg-[#0D0D0E]/85">
      <div className="section-container flex h-20 items-center justify-between">
        {/* Logo */}
        <a
          href="#home"
          onClick={() => setMenuOpen(false)}
          className="text-xl font-semibold tracking-tight text-[#111111] dark:text-[#F5F2EC]"
        >
          Ayat<span className="text-[#C83B35]">.</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="nav-link text-sm font-medium text-[#5F5B55] transition hover:text-[#C83B35] dark:text-[#AAA69F] dark:hover:text-[#C83B35]"
            >
              {link.name}
            </a>
          ))}

          {/* Theme Button */}
          <button
            onClick={toggleDarkMode}
            className="theme-toggle rounded-full border border-[#D5D0C8] bg-white/50 p-2.5 text-[#252321] transition duration-300 hover:border-[#C83B35] hover:bg-[#C83B35] hover:text-white dark:border-white/10 dark:bg-white/[0.04] dark:text-[#F5F2EC] dark:hover:border-[#C83B35] dark:hover:bg-[#C83B35]"
            aria-label="Toggle dark mode"
          >
            {darkMode ? <Sun size={17} /> : <Moon size={17} />}
          </button>
        </nav>

        {/* Mobile Controls */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={toggleDarkMode}
            className="theme-toggle rounded-full border border-[#D5D0C8] bg-white/50 p-2.5 text-[#252321] transition duration-300 hover:border-[#C83B35] hover:bg-[#C83B35] hover:text-white dark:border-white/10 dark:bg-white/[0.04] dark:text-[#F5F2EC] dark:hover:border-[#C83B35] dark:hover:bg-[#C83B35]"
            aria-label="Toggle dark mode"
          >
            {darkMode ? <Sun size={17} /> : <Moon size={17} />}
          </button>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="rounded-full border border-[#D5D0C8] bg-white/50 p-2.5 text-[#252321] transition duration-300 hover:border-[#C83B35] hover:bg-[#C83B35] hover:text-white dark:border-white/10 dark:bg-white/[0.04] dark:text-[#F5F2EC] dark:hover:border-[#C83B35] dark:hover:bg-[#C83B35]"
            aria-label="Open menu"
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="border-t border-[#DDD8D0] bg-[#F3F0EA] px-5 py-6 dark:border-white/10 dark:bg-[#0D0D0E] md:hidden">
          <nav className="flex flex-col gap-5">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-sm font-medium text-[#33302D] transition hover:text-[#C83B35] dark:text-[#E8E4DC] dark:hover:text-[#C83B35]"
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