import { ArrowUpRight, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "#" },
    { label: "Portfolio", href: "#" },
    { label: "Services", href: "#" },
    { label: "About", href: "#" },
    { label: "Pricing", href: "#" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Animated Top Border */}
      <div className="h-px w-full bg-linear-to-r from-transparent via-violet-500 to-transparent" />
      
      {/* Main Navbar */}
      <div className="border-b border-white/5 bg-zinc-950/80 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
          
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="relative">
              <div className="w-8 h-8 rounded-lg bg-linear-to-br from-violet-500 to-cyan-500 flex items-center justify-center">
                <span className="text-white font-bold text-sm">I</span>
              </div>
              <div className="absolute inset-0 w-8 h-8 rounded-lg bg-linear-to-br from-violet-500 to-cyan-500 blur-md opacity-50 -z-10" />
            </div>
            <a 
              href="/" 
              className="text-2xl font-bold tracking-tight bg-linear-to-r from-white to-zinc-400 bg-clip-text text-transparent hover:from-violet-400 hover:to-cyan-400 transition-all duration-300"
            >
              INFENITO
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex items-center gap-2">
              {navItems.map((item, index) => (
                <li key={index}>
                  <a 
                    href={item.href} 
                    className="group relative px-4 py-2 text-sm font-medium text-zinc-400 transition-colors hover:text-white"
                  >
                    {item.label}
                    {/* Animated Underline */}
                    <span className="absolute bottom-0 left-1/2 w-0 h-[2px] bg-linear-to-r from-violet-500 to-cyan-500 transition-all duration-300 group-hover:w-full group-hover:left-0" />
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button className="group relative inline-flex items-center gap-2 overflow-hidden rounded-xl bg-linear-to-r from-violet-600 to-indigo-600 px-5 py-2.5 text-sm font-medium text-white shadow-lg shadow-violet-500/20 transition-all hover:shadow-violet-500/40 hover:scale-105">
              <span className="relative z-10">Start Project</span>
              <ArrowUpRight 
                size={16} 
                className="relative z-10 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" 
              />
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-linear-to-r from-violet-600 to-indigo-600 blur-md opacity-50 group-hover:opacity-70 transition-opacity -z-10" />
              {/* Shine Effect */}
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-linear-to-r from-transparent via-white/20 to-transparent" />
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden relative w-10 h-10 flex items-center justify-center rounded-lg bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-colors"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-white/5 bg-zinc-950/95 backdrop-blur-xl">
            <nav className="px-6 py-6 space-y-2">
              {navItems.map((item, index) => (
                <a 
                  key={index}
                  href={item.href} 
                  className="block px-4 py-3 text-sm font-medium text-zinc-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <div className="pt-4">
                <button className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-linear-to-r from-violet-600 to-indigo-600 px-5 py-3 text-sm font-medium text-white shadow-lg shadow-violet-500/20">
                  Start Project
                  <ArrowUpRight size={16} />
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}