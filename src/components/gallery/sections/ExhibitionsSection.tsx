"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  motion,
  useInView,
  useScroll,
  useTransform,
  type MotionValue,
} from "motion/react";
import type { Exhibition } from "../content";
import { EXHIBITIONS } from "../content";
import { cn } from "@/lib/utils";
import { LinesReveal } from "../Reveal";

const EASE = [0.22, 1, 0.36, 1] as readonly [number, number, number, number];

/* ------------------------------------------------------------------ */
/* Left rail — sticky exhibition index with scroll progress + active   */
/* ------------------------------------------------------------------ */

const ExhibitionRail = ({
  active,
  progress,
  onSelect,
}: {
  active: number;
  progress: MotionValue<number>;
  onSelect: (index: number) => void;
}) => {
  return (
    <div className="hidden lg:block lg:col-span-4">
      <div className="lg:sticky lg:top-32">
        <div className="relative mt-10 pl-9">
          {/* Static track */}
          <span
            aria-hidden
            className="absolute left-[3px] top-2 bottom-2 w-px bg-[var(--gallery-line)]"
          />
          {/* Progress fill */}
          <motion.span
            aria-hidden
            style={{ scaleY: progress }}
            className="absolute left-[3px] top-2 bottom-2 w-px origin-top bg-[var(--gallery-quaternary)]"
          />

          <ul className="flex flex-col gap-7">
            {EXHIBITIONS.map((project, i) => {
              const isActive = i === active;
              return (
                <li key={project.index} className="relative">
                  {/* Node marker */}
                  <span
                    aria-hidden
                    className={`absolute -left-9 top-[7px] h-[9px] w-[9px] -translate-x-px rounded-full border transition-all duration-500 ${
                      isActive
                        ? "scale-125 border-[var(--gallery-quaternary)] bg-[var(--gallery-quaternary)]"
                        : "border-[var(--gallery-line)] bg-[var(--gallery-bg)]"
                    }`}
                  />
                  <button
                    type="button"
                    data-cursor="hover"
                    onClick={() => onSelect(i)}
                    className="group block w-full text-left"
                  >
                    <span
                      className={`block font-gallery-body text-[10px] uppercase tracking-[0.28em] transition-colors duration-500 ${
                        isActive
                          ? "text-[var(--gallery-quaternary)]"
                          : "text-[var(--gallery-subtext)]"
                      }`}
                    >
                      {project.experience}
                    </span>
                    <span
                      className={`mt-1 block whitespace-pre-line font-gallery-display text-lg leading-tight tracking-tight transition-all duration-500 ${
                        isActive
                          ? "translate-x-1 text-[var(--gallery-text)]"
                          : "text-[var(--gallery-subtext)]/70 group-hover:text-[var(--gallery-text)]"
                      }`}
                    >
                      {project.title}
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

/* ------------------------------------------------------------------ */
/* Right panel — parallax artwork + museum-plaque caption              */
/* ------------------------------------------------------------------ */

const ExhibitionPanel = ({
  project,
  index,
  total,
  onActivate,
  registerRef,
}: {
  project: Exhibition;
  index: number;
  total: number;
  onActivate: (index: number) => void;
  registerRef: (index: number, node: HTMLElement | null) => void;
}) => {
  const ref = useRef<HTMLElement | null>(null);
  const inView = useInView(ref, { margin: "-45% 0px -45% 0px" });

  useEffect(() => {
    if (inView) onActivate(index);
  }, [inView, index, onActivate]);

  const setRef = useCallback(
    (node: HTMLElement | null) => {
      ref.current = node;
      registerRef(index, node);
    },
    [index, registerRef],
  );

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  // Alternate tilt + alignment for a scattered gallery-wall feel.
  const isLeftAligned = index % 2 === 0;
  const tilt = isLeftAligned ? -1.6 : 1.6;
  const align = isLeftAligned ? "lg:mr-auto" : "lg:ml-auto";

  return (
    <article ref={setRef} className={cn("scroll-mt-32", isLeftAligned ? "max-[992px]:mr-auto" : "max-[992px]:ml-auto")}>
      {/* Polaroid frame */}
      <motion.div
        initial={{ opacity: 0, y: 48, rotate: tilt * 2.2 }}
        whileInView={{ opacity: 1, y: 0, rotate: tilt }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.9, ease: EASE }}
        whileHover={{ rotate: 0, y: -8 }}
        className={`group/polaroid relative w-full max-w-xl origin-center rounded-[3px] bg-[#fdfcf6] p-3 pb-16 shadow-[0_22px_50px_-16px_rgba(21,21,21,0.32)] md:p-4 md:pb-20 ${align}`}
      >
        {/* Washi tape accent */}
        <span
          aria-hidden
          className="absolute -top-3 left-1/2 h-7 w-24 -translate-x-1/2 -rotate-2 bg-[var(--gallery-quaternary)]/25 backdrop-blur-[1px]"
        />

        {/* Photo window */}
        <div className="relative aspect-[4/3] overflow-hidden bg-[var(--gallery-dark)]/[0.06]">
          <motion.div style={{ y: imageY }} className="absolute inset-[-8%]">
            <Image
              src={project.image}
              alt={project.title.replace(/\n/g, " ")}
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover transition-transform duration-700 ease-out group-hover/polaroid:scale-[1.03]"
            />
          </motion.div>

          {/* Developing sheen */}
          <span
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-[var(--gallery-dark)]/12 via-transparent to-white/12"
          />
        </div>

        {/* Handwritten caption on the bottom strip */}
        <div className="absolute inset-x-5 bottom-4 flex max-[601px]:flex-col items-end justify-between max-[601px]:gap-2 gap-4 md:inset-x-6 md:bottom-6">
          <span className="font-gallery-short-stack text-sm leading-none text-[var(--gallery-dark)] md:text-xl max-[426px]:text-[12px] max-[376px]:text-[10px]">
            {project.company}
          </span>
          <span className="shrink-0 font-gallery-short-stack text-[10px] uppercase tracking-[0.28em] text-[var(--gallery-subtext)] max-[426px]:text-[10px] max-[376px]:text-[8px]">
            {project.experience}
          </span>
        </div>
      </motion.div>

      {/* Museum plaque caption */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.8, ease: EASE, delay: 0.12 }}
        className={cn(
          "mt-8 grid w-full max-w-xl grid-cols-1 gap-x-10 gap-y-6",
          isLeftAligned ? "max-[992px]:mr-auto lg:mr-auto" : "max-[992px]:ml-auto lg:ml-auto",
          isLeftAligned
            ? "md:grid-cols-[auto_1fr] md:text-left"
            : "md:grid-cols-[1fr_auto] md:text-right",
        )}
      >
        {/* Catalogue number */}
        <div
          className={cn(
            "flex items-baseline gap-3 md:flex-col md:gap-1",
            isLeftAligned ? "md:items-start" : "md:order-2 md:items-end",
          )}
        >
          <span className="font-gallery-display text-3xl font-medium tracking-tight text-[var(--gallery-text)]">
            {project.index}
          </span>
        </div>

        <div className={cn(!isLeftAligned && "md:order-1")}>
          <h3 className="whitespace-pre-line font-gallery-display text-[clamp(1.6rem,3vw,2.75rem)] font-medium leading-[1.02] tracking-tight text-[var(--gallery-text)]">
            {project.title}
          </h3>
          <p
            className={cn(
              "mt-6 max-w-xl font-gallery-body text-sm leading-relaxed text-[var(--gallery-subtext)] md:text-base",
              !isLeftAligned && "md:ml-auto",
            )}
          >
            {project.description}
          </p>

          <div
            className={cn(
              "mt-6 flex flex-wrap gap-1.5",
              !isLeftAligned && "md:justify-end",
            )}
          >
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-[var(--gallery-line)] px-3 py-1 font-gallery-body text-[10px] uppercase tracking-[0.18em] text-[var(--gallery-subtext)]"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </article>
  );
};

/* ------------------------------------------------------------------ */
/* Section                                                             */
/* ------------------------------------------------------------------ */

export const ExhibitionsSection = () => {
  const [active, setActive] = useState(0);
  const panelRefs = useRef<Array<HTMLElement | null>>([]);
  const timelineRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start center", "end center"],
  });

  const registerRef = useCallback((index: number, node: HTMLElement | null) => {
    panelRefs.current[index] = node;
  }, []);

  const handleSelect = useCallback((index: number) => {
    panelRefs.current[index]?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  }, []);

  return (
    <section
      id="experiences"
      aria-label="experiences"
      className="relative px-6 py-32 md:px-12 md:py-44"
    >
      <div className="mx-auto max-w-[1600px]">
        {/* Section header */}
        <div className="flex items-end justify-between">
          <h2 className="font-gallery-gveret-levin text-[clamp(2.5rem,7vw,6rem)] font-normal leading-[1.5] tracking-tight text-[var(--gallery-text)]">
            <LinesReveal lines={["Work Experiences"]} />
          </h2>
          <motion.span
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.2 }}
            className="hidden font-gallery-body text-[11px] uppercase tracking-[0.3em] text-[var(--gallery-subtext)] md:block"
          >
            {String(EXHIBITIONS.length).padStart(2, "0")} Works
          </motion.span>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: EASE, delay: 0.3 }}
          className="mt-6 max-w-lg font-gallery-body text-sm leading-relaxed text-[var(--gallery-subtext)] md:text-base"
        >
          A curated walk through production experiences — each shaped by
          real-world constraints, performance demands, and user-centered design.
        </motion.p>

        {/* Timeline gallery walk */}
        <div
          ref={timelineRef}
          className="mt-16 grid grid-cols-1 gap-y-24 md:mt-24 lg:grid-cols-12 lg:gap-x-16"
        >
          <ExhibitionRail
            active={active}
            progress={scrollYProgress}
            onSelect={handleSelect}
          />

          <div className="flex flex-col gap-28 md:gap-40 lg:col-span-8">
            {EXHIBITIONS.map((project, i) => (
              <ExhibitionPanel
                key={project.index}
                project={project}
                index={i}
                total={EXHIBITIONS.length}
                onActivate={setActive}
                registerRef={registerRef}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
