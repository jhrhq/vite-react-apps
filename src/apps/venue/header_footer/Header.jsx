import { useEffect, useState } from "react";

const menuItems = [
  { label: "Event starts in", id: "eventStarts" },
  { label: "Venue NFO", id: "venueinfo" },
  { label: "Highlights", id: "highlights" },
  { label: "Pricing", id: "pricing" },
  { label: "Location", id: "location" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    setMenuOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${
          scrolled ? "bg-black/90 backdrop-blur-sm" : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-20 items-center justify-between px-5">
          <div>
            <h1 className="font_righteous text-4xl text-white">
              The Venue
            </h1>

            <p className="text-xs uppercase tracking-wider text-gray-300">
              Musical Events
            </p>
          </div>

          <button
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
            className="flex h-12 w-12 flex-col items-center justify-center gap-1.5"
          >
            <span className="h-0.5 w-6 bg-white" />
            <span className="h-0.5 w-6 bg-white" />
            <span className="h-0.5 w-6 bg-white" />
          </button>
        </div>
      </header>

      {/* Overlay */}
      <div
        onClick={() => setMenuOpen(false)}
        className={`fixed inset-0 z-50 bg-black/50 transition-opacity duration-300 ${
          menuOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      />

      {/* Slide Menu */}
      <aside
        className={`fixed top-0 right-0 z-[60] h-screen w-72 bg-white shadow-2xl transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end p-4">
          <button
            onClick={() => setMenuOpen(false)}
            className="text-3xl text-gray-700"
          >
            ×
          </button>
        </div>

        <nav className="flex flex-col">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="border-b border-gray-100 px-6 py-4 text-left text-gray-800 transition-colors hover:bg-gray-100"
            >
              {item.label}
            </button>
          ))}
        </nav>
      </aside>
    </>
  );
}