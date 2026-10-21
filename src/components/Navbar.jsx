
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  FiUser,
  FiSearch,
  FiMenu,
  FiX,
  FiArrowUpRight,
} from "react-icons/fi";

const links = [
  { label: "Home", href: "home" },
  { label: "About", href: "about" },
  { label: "Skills", href: "skills" },
  { label: "Projects", href: "projects" },
  { label: "Contact", href: "contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [search, setSearch] = useState("");

  const navigate = useNavigate();
  const location = useLocation();

  const goToSection = (section) => {
    setOpen(false);
    setSearchOpen(false);

    if (location.pathname !== "/") {
      navigate(`/#${section}`);
    } else {
      document.getElementById(section)?.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  const handleSearch = (event) => {
    event.preventDefault();

    const result = links.find((link) =>
      link.label.toLowerCase().includes(search.trim().toLowerCase())
    );

    if (result && search.trim()) {
      goToSection(result.href);
      setSearch("");
    }
  };

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-[#252C38] bg-[#0B0E13]/95 backdrop-blur-xl">
        <nav className="mx-auto flex h-[92px] max-w-6xl items-center justify-between px-5 sm:px-8">
          {/* Left icons */}
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              type="button"
              onClick={() => goToSection("about")}
              aria-label="About me"
              className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#293449] text-[#AEB7C6] transition hover:border-[#3157C8] hover:text-[#8FAEFF] sm:h-12 sm:w-12"
            >
              <FiUser size={19} />
            </button>

            <button
              type="button"
              onClick={() => setSearchOpen(!searchOpen)}
              aria-label="Search sections"
              className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#293449] text-[#AEB7C6] transition hover:border-[#3157C8] hover:text-[#8FAEFF] sm:h-12 sm:w-12"
            >
              <FiSearch size={19} />
            </button>
          </div>

          {/* Logo */}
          <Link
            to="/"
            onClick={() => {
              setOpen(false);
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="flex flex-col items-end"
          >
            <span className="text-2xl font-bold tracking-[0.04em] text-[#E5E7EB] sm:text-3xl">
              AYAT<span className="text-[#3157C8]">.</span>
            </span>
            <span className="mt-1 text-[9px] tracking-[0.2em] text-[#8793A7] sm:text-[11px]">
              FRONTEND DEVELOPER
            </span>
          </Link>
        </nav>

        {/* Search */}
        {searchOpen && (
          <form
            onSubmit={handleSearch}
            className="mx-auto flex max-w-6xl gap-3 border-t border-[#252C38] px-5 py-4 sm:px-8"
          >
            <input
              type="search"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search About, Skills, Projects..."
              className="min-w-0 flex-1 rounded-xl border border-[#293449] bg-[#121824] px-4 py-3 text-sm text-white outline-none focus:border-[#3157C8]"
            />
            <button
              type="submit"
              className="rounded-xl bg-[#3157C8] px-5 text-sm font-medium text-white"
            >
              Search
            </button>
          </form>
        )}
      </header>

      {/* Floating menu */}
      <div className="fixed bottom-7 right-5 z-[60] sm:bottom-9 sm:right-9">
        {open && (
          <div className="mb-4 w-56 overflow-hidden rounded-2xl border border-[#293449] bg-[#111722] p-3 shadow-2xl">
            <p className="border-b border-[#293449] px-3 pb-3 pt-1 text-xs uppercase tracking-[0.2em] text-[#8FAEFF]">
              Navigation
            </p>

            <div className="mt-2">
              {links.map((link) => (
                <button
                  key={link.href}
                  type="button"
                  onClick={() => goToSection(link.href)}
                  className="flex w-full items-center justify-between rounded-lg px-3 py-3 text-left text-sm text-[#D7DCE5] transition hover:bg-[#1B2943] hover:text-white"
                >
                  {link.label}
                  <FiArrowUpRight size={15} />
                </button>
              ))}
            </div>
          </div>
        )}

        <button
          type="button"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          className="ml-auto flex h-[68px] w-[68px] items-center justify-center rounded-full bg-[#3157C8] text-white shadow-[0_12px_35px_rgba(49,87,200,0.25)] transition hover:scale-105 hover:bg-[#2447AD]"
        >
          {open ? <FiX size={28} /> : <FiMenu size={28} />}
        </button>
      </div>
    </>
  );
}
