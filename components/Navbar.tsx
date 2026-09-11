"use client";

import { ArrowLeft, ArrowUpRight, Menu, X } from "lucide-react";
import { useState } from "react";

const links = [
  ["Work", "#work"],
  ["Studio", "#studio"],
  ["Services", "#services"],
  ["Contact", "#contact"],
] as const;

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <header className="absolute inset-x-0 top-0 z-[60]">
      <div className="container-wide flex items-center justify-between py-7">
        <div className="flex items-center gap-6">
          {/* Placeholder Home button */}
          <a
            href="#"
            onClick={closeMenu}
            aria-label="Home"
            className="group flex items-center gap-2 text-[10px] uppercase tracking-[0.22em] text-white/55 transition hover:text-white"
          >
            <ArrowLeft
              size={13}
              className="transition-transform duration-300 group-hover:-translate-x-1"
            />
            <span>Home</span>
          </a>

          <span className="h-3 w-px bg-white/15" />

          <a
            href="#"
            onClick={closeMenu}
            className="text-sm font-medium uppercase tracking-[0.28em]"
          >
            Aurelia
          </a>
        </div>

        {/* Desktop navigation */}
        <nav className="hidden items-center gap-9 md:flex">
          {links.map(([label, href]) => (
            <a
              key={label}
              href={href}
              className="text-xs uppercase tracking-[0.2em] text-white/65 transition hover:text-white"
            >
              {label}
              {label === "Contact" && (
                <ArrowUpRight
                  size={13}
                  className="ml-1 inline-block transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              )}
            </a>
          ))}
        </nav>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          className="relative z-[70] flex h-10 w-10 items-center justify-center border border-white/20 bg-[#11110f]/40 backdrop-blur-sm transition hover:border-white/40 md:hidden"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {/* Mobile navigation */}
      <div
        id="mobile-menu"
        className={`absolute inset-x-0 top-full z-[65] border-y border-white/10 bg-[#11110f] px-5 py-7 shadow-2xl backdrop-blur-xl transition-all duration-300 md:hidden ${
          open
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-2 opacity-0"
        }`}
      >
        <nav className="flex flex-col gap-6">
          {links.map(([label, href]) => (
            <a
              key={label}
              href={href}
              onClick={closeMenu}
              className="flex items-center justify-between border-b border-white/10 pb-5 text-sm uppercase tracking-[0.2em] text-white/80 transition hover:text-white"
            >
              <span>{label}</span>
              <ArrowUpRight size={15} />
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
