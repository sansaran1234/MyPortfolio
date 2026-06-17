"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CRAFT_PANELS } from "../content";

export const CraftSection = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;

    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px) and (prefers-reduced-motion: no-preference)", () => {
      gsap.registerPlugin(ScrollTrigger);

      const getDistance = () => track.scrollWidth - window.innerWidth;

      const tween = gsap.to(track, {
        x: () => -getDistance(),
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${getDistance()}`,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      return () => {
        tween.scrollTrigger?.kill();
        tween.kill();
        gsap.set(track, { x: 0 });
      };
    });

    return () => mm.revert();
  }, []);

  return (
    <section
      id="stack"
      ref={sectionRef}
      aria-label="Technical stack"
      className="relative overflow-hidden bg-[var(--gallery-dark)] text-[var(--gallery-bg)]"
    >
      <div
        ref={trackRef}
        className="flex flex-col md:h-screen md:flex-row md:flex-nowrap"
      >
        <div className="flex w-screen shrink-0 flex-col justify-center px-6 py-24 md:h-screen md:w-[60vw] md:px-12">
          <span className="font-gallery-body text-[11px] uppercase tracking-[0.3em] text-[var(--gallery-bg)]/50">
            Stack
          </span>
          <h2 className="mt-8 font-gallery-display text-[clamp(2.5rem,8vw,7rem)] font-medium leading-[0.92] tracking-tight">
            Technical
            <br />
            Foundation.
          </h2>
          <p className="mt-8 max-w-sm font-gallery-body text-sm leading-relaxed text-[var(--gallery-bg)]/60">
            A curated collection of technologies, refined across six years of
            building production-grade interfaces. Scroll horizontally to browse
            the collection.
          </p>
        </div>

        {CRAFT_PANELS.map((panel) => (
          <div
            key={panel.index}
            className="relative flex w-screen shrink-0 flex-col justify-between border-t border-[var(--gallery-bg)]/15 px-6 py-24 md:h-screen md:w-[50vw] md:border-l md:border-t-0 md:px-16 md:py-28"
          >
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 overflow-hidden opacity-30"
            >
              <div className="absolute -right-16 top-1/4 h-72 w-72 rounded-full bg-[var(--gallery-quaternary)] blur-[100px]" />
              <div className="absolute -left-10 bottom-10 h-56 w-56 rounded-full bg-[var(--gallery-secondary)] blur-[100px]" />
            </div>

            <div className="relative flex items-baseline justify-between">
              <span className="font-gallery-display text-7xl font-medium text-[var(--gallery-bg)]/20 md:text-8xl">
                {panel.index}
              </span>
              <span className="font-gallery-body text-[10px] uppercase tracking-[0.3em] text-[var(--gallery-bg)]/50">
                Panel
              </span>
            </div>

            <div className="relative">
              <h3 className="font-gallery-display text-[clamp(2rem,5vw,4rem)] font-medium leading-[0.95] tracking-tight">
                {panel.title}
              </h3>
              <ul className="mt-8 flex flex-col gap-2">
                {panel.tools.map((tool) => (
                  <li
                    key={tool}
                    className="font-gallery-body text-lg text-[var(--gallery-bg)]/70 md:text-xl"
                  >
                    {tool}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
