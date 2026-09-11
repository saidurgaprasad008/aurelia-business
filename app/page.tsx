import { ArrowUpRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProjectGrid from "@/components/ProjectGrid";
import Services from "@/components/Services";



export default function Home() {
  return (
    <main className="noise">
      <Navbar />
      <Hero />

      {/* Studio */}
      <section id="studio" className="bg-[#e8e3d9] py-28 text-[#171612] md:py-40">
        <div className="container-wide">
          <div className="grid gap-16 md:grid-cols-[1fr_2fr]">
            <div>
              <p className="text-[10px] uppercase tracking-[0.3em] text-black/45">
                The Studio
              </p>
            </div>

            <div>
              <h2 className="text-[clamp(2.5rem,5.5vw,6rem)] leading-[0.94] tracking-[-0.06em]">
                We design spaces
                <br />
                <span className="italic text-black/45">
                  for how life is lived.
                </span>
              </h2>

              <div className="mt-14 grid gap-10 md:grid-cols-2">
                <p className="text-sm leading-7 text-black/60">
                  Aurelia is an independent architecture and interiors studio
                  working across residential, hospitality and commercial
                  environments. We believe the strongest spaces are not defined
                  by trends, but by the relationship between people, place and
                  material.
                </p>

                <p className="text-sm leading-7 text-black/60">
                  From the first sketch to the final detail, our process is
                  deliberately considered. Every proportion, texture and
                  opening is part of a larger story.
                </p>
              </div>

              <a
                href="#contact"
                className="group mt-12 inline-flex items-center gap-3 border-b border-black/25 pb-3 text-xs uppercase tracking-[0.2em]"
              >
                Discover the studio
                <ArrowUpRight
                  size={15}
                  className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </a>
            </div>
          </div>
        </div>
      </section>

      <ProjectGrid />

      {/* Services */}
<Services />

{/* Statement */}
      <section className="bg-[#c8b48a] py-28 text-[#171612] md:py-44">
        <div className="container-wide">
          <p className="mb-12 text-[10px] uppercase tracking-[0.3em] text-black/45">
            Our Philosophy
          </p>

          <blockquote className="max-w-6xl text-[clamp(2.8rem,7vw,7.5rem)] leading-[0.9] tracking-[-0.065em]">
            “Good architecture doesn't ask to be noticed.
            <span className="italic text-black/45">
              {" "}
              It gives life a better place to happen.”
            </span>
          </blockquote>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-[#11110f] py-28 md:py-40">
        <div className="container-wide">
          <div className="border-t border-white/15 pt-8">
            <p className="text-[10px] uppercase tracking-[0.3em] text-[#c8b48a]">
              Start a conversation
            </p>

            <div className="mt-14 flex flex-col justify-between gap-12 md:flex-row md:items-end">
              <h2 className="text-[clamp(3.5rem,9vw,9rem)] leading-[0.82] tracking-[-0.07em]">
                Have a space
                <br />
                <span className="italic text-white/45">in mind?</span>
              </h2>

              <a
                href="mailto:studio@aurelia.example"
                className="group flex w-fit items-center gap-4 border-b border-white/30 pb-4 text-sm uppercase tracking-[0.18em]"
              >
                studio@aurelia.example
                <ArrowUpRight
                  size={17}
                  className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </a>
            </div>
          </div>

          <footer className="mt-32 flex flex-col justify-between gap-5 border-t border-white/10 pt-6 text-[10px] uppercase tracking-[0.2em] text-white/35 sm:flex-row">
            <span>Aurelia Studio — Demo Project</span>
            <span>Architecture / Interiors / Objects</span>
            <span>© 2026</span>
          </footer>
        </div>
      </section>
    </main>
  );
}
