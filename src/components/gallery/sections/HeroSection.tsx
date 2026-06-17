"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import {
  GALLERY_HERO_STATS,
  GALLERY_IDENTITY,
} from "../content";

export const HeroSection = () => {
  const ref = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const nameScale = useTransform(scrollYProgress, [0, 1], [1, 1.35]);
  const letterSpacing = useTransform(scrollYProgress, [0, 1], ["0em", "0.12em"]);
  const nameOpacity = useTransform(scrollYProgress, [0, 0.85], [1, 0]);
  const artworkScale = useTransform(scrollYProgress, [0, 1], [1.05, 1.3]);
  const artworkOpacity = useTransform(scrollYProgress, [0, 0.5], [0, 0.5]);
  const statsOpacity = useTransform(
    scrollYProgress,
    [0.05, 0.2, 0.7, 0.9],
    [0, 1, 1, 0],
  );
  const statsY = useTransform(scrollYProgress, [0.05, 0.25], [40, 0]);

  return (
    <section
      ref={ref}
      className="relative h-[150vh]"
      aria-label="Introduction"
    >
      <div className="sticky top-0 flex h-screen flex-col items-center justify-center overflow-hidden px-6">
        <motion.div
          aria-hidden
          style={{ scale: artworkScale, opacity: artworkOpacity }}
          className="pointer-events-none absolute inset-0 -z-10"
        >
          <div className="absolute left-1/2 top-1/2 h-[70vh] w-[70vh] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--gallery-tertiary)] blur-[120px]" />
          <div className="absolute left-[20%] top-[30%] h-[40vh] w-[40vh] rounded-full bg-[var(--gallery-secondary)] blur-[120px]" />
          <div className="absolute right-[15%] bottom-[20%] h-[45vh] w-[45vh] rounded-full bg-[var(--gallery-quaternary)] opacity-60 blur-[130px]" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.6 }}
          className="mb-8 font-gallery-body text-[11px] uppercase tracking-[0.45em] text-[var(--gallery-subtext)]"
        >
          Portfolio · Exhibition 2026
        </motion.div>

        <motion.h1
          style={{ scale: nameScale, letterSpacing, opacity: nameOpacity }}
          className="text-center font-gallery-display font-medium leading-[0.86] tracking-tight text-[var(--gallery-text)]"
        >
          <span className="block overflow-hidden">
            <motion.span
              initial={{ y: "110%" }}
              animate={{ y: "0%" }}
              transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
              className="block text-[clamp(3rem,13vw,12rem)]"
            >
              {GALLERY_IDENTITY.firstName}
            </motion.span>
          </span>
          <span className="block overflow-hidden">
            <motion.span
              initial={{ y: "110%" }}
              animate={{ y: "0%" }}
              transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.35 }}
              className="block text-[clamp(3rem,13vw,12rem)]"
            >
              {GALLERY_IDENTITY.lastName}
            </motion.span>
          </span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.9 }}
          style={{ opacity: nameOpacity }}
          className="mt-10 flex flex-col items-center gap-4 text-center"
        >
          <p className="font-gallery-body text-sm uppercase tracking-[0.3em] text-[var(--gallery-text)] md:text-base">
            {GALLERY_IDENTITY.role}
          </p>
          <p className="max-w-md font-gallery-body text-sm leading-relaxed text-[var(--gallery-subtext)]">
            {GALLERY_IDENTITY.tagline}
          </p>
          <p className="mt-2 font-gallery-body text-[11px] uppercase tracking-[0.35em] text-[var(--gallery-subtext)]">
            {GALLERY_IDENTITY.location}
          </p>
        </motion.div>

        {/* <motion.div
          style={{ opacity: statsOpacity, y: statsY }}
          className="pointer-events-none absolute bottom-12 flex w-full max-w-5xl items-end justify-between px-2"
        >
          {GALLERY_HERO_STATS.map((stat, index) => (
            <div
              key={stat.label}
              className={index === 1 ? "text-right" : "text-left"}
            >
              <div className="font-gallery-display text-3xl font-medium text-[var(--gallery-text)] md:text-5xl">
                {stat.value}
              </div>
              <div className="mt-1 font-gallery-body text-[10px] uppercase tracking-[0.25em] text-[var(--gallery-subtext)] md:text-xs">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div> */}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.4 }}
          style={{ opacity: nameOpacity }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 font-gallery-body text-[10px] uppercase tracking-[0.3em] text-[var(--gallery-subtext)]"
        >
          Scroll to enter
        </motion.div>
      </div>
    </section>
  );
};
