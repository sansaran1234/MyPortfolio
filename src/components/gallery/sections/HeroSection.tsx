"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { CURRENT_YEAR } from "@/lib/site";
import { GALLERY_IDENTITY } from "../content";
import { TopographicRingsBackground } from "../TopographicRingsBackground";

export const HeroSection = () => {
  const ref = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const nameScale = useTransform(scrollYProgress, [0, 1], [1, 1.35]);
  const letterSpacing = useTransform(scrollYProgress, [0, 1], ["0em", "0.12em"]);
  const nameOpacity = useTransform(scrollYProgress, [0, 0.85], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative h-[150vh]"
      aria-label="Introduction"
    >
      <div className="sticky top-0 flex h-screen flex-col items-center justify-center overflow-hidden px-6">
        {/* Topographic rings — interactive layer */}
        <motion.div
          aria-hidden
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, ease: "easeOut", delay: 0.8 }}
          className="pointer-events-none absolute inset-0 -z-10"
        >
          <TopographicRingsBackground
            accentColor="rgba(69, 249, 156, 0.5)"
            midColor="rgba(99, 102, 241, 0.25)"
            baseColor="rgba(188, 199, 222, 0.08)"
            accentStroke={1.5}
            midStroke={1}
            baseStroke={0.5}
            ringCount={16}
            ringSpacing={42}
            speed={0.8}
            amplitude={14}
            verticalSquash={0.75}
            mouseInteraction={true}
            mouseStrength={0.35}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.6 }}
          className="mb-8 font-gallery-body text-[11px] uppercase tracking-[0.45em] text-[var(--gallery-subtext)]"
        >
          Portfolio · {CURRENT_YEAR}
        </motion.div>

        <motion.h1
          style={{ scale: nameScale, letterSpacing, opacity: nameOpacity }}
          className="text-center font-gallery-hero font-normal leading-[0.86] tracking-tight text-[var(--gallery-text)]"
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
