"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CRAFT_PANELS } from "../content";
import { CraftPanelCard } from "../CraftPanelCard";

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
          <h2 className="mt-8 font-gallery-lobster text-[clamp(2.5rem,8vw,7rem)] font-normal leading-[0.92] tracking-tight">
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
          <CraftPanelCard key={panel.index} panel={panel} />
        ))}
      </div>
    </section>
  );
};
