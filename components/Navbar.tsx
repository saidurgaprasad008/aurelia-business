"use client";

import { Menu, ArrowUpRight } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <div className="container-wide flex items-center justify-between py-7">
        <a
          href="#"
          className="text-sm font-medium uppercase tracking-[0.28em]"
        >
          Aurelia
        </a>

        <nav className="hidden items-center gap-9 md:flex">
          <a
            href="#work"
            className="text-xs uppercase tracking-[0.2em] text-white/65 transition hover:text-white"
          >
            Work
          </a>
          <a
            href="#studio"
            className="text-xs uppercase tracking-[0.2em] text-white/65 transition hover:text-white"
          >
            Studio
          </a>
          <a
            href="#services"
            className="text-xs uppercase tracking-[0.2em] text-white/65 transition hover:text-white"
          >
            Services
          </a>
          <a
            href="#contact"
            className="group flex items-center gap-1 text-xs uppercase tracking-[0.2em]"
          >
            Contact
            <ArrowUpRight
              size={13}
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>
        </nav>

        <button
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          className="flex h-10 w-10 items-center justify-center border border-white/20 md:hidden"
        >
          <Menu size={18} />
        </button>
      </div>

      {open && (
        <div className="absolute inset-x-0 top-full border-y border-white/10 bg-[#11110f] px-5 py-7 md:hidden">
          <nav className="flex flex-col gap-6">
            {[
              ["Work", "#work"],
              ["Studio", "#studio"],
              ["Services", "#services"],
              ["Contact", "#contact"],
            ].map(([label, href]) => (
              <a
                key={label}
                href={href}
                onClick={() => setOpen(false)}
                className="text-sm uppercase tracking-[0.2em]"
              >
                {label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
