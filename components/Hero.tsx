"use client";

import { ArrowDown, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=2200&q=90')",
        }}
      />

      <div className="absolute inset-0 bg-black/45" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#11110f] via-black/10 to-black/25" />

      <div className="container-wide relative z-10 flex min-h-screen flex-col justify-end pb-10 pt-32">
        <div className="mb-16 flex items-center justify-between border-b border-white/20 pb-5 text-[10px] uppercase tracking-[0.25em] text-white/60">
          <span>Architecture / Interiors / Objects</span>
          <span>Est. 2014</span>
        </div>

        <div>
          <motion.div
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="mb-5 text-xs uppercase tracking-[0.25em] text-[#c8b48a]">
              Independent Design Studio
            </p>

            <h1 className="display-title max-w-[1100px]">
              Architecture
              <br />
              <span className="ml-[8vw] text-white/85">that lives</span>
              <br />
              <span className="ml-[16vw] italic text-[#d7c9ad]">
                between light.
              </span>
            </h1>
          </motion.div>

          <div className="mt-14 flex flex-col justify-between gap-8 sm:flex-row sm:items-end">
            <p className="max-w-sm text-sm leading-7 text-white/65">
              We create enduring spaces shaped by material, proportion and the
              quiet relationship between architecture and everyday life.
            </p>

            <a
              href="#work"
              className="group flex w-fit items-center gap-4 border-b border-white/30 pb-3 text-xs uppercase tracking-[0.2em]"
            >
              Explore selected work
              <ArrowUpRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </a>
          </div>
        </div>

        <div className="mt-16 flex items-center gap-3 text-[10px] uppercase tracking-[0.25em] text-white/45">
          <ArrowDown size={13} />
          Scroll to explore
        </div>
      </div>
    </section>
  );
}
