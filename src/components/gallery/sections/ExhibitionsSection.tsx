"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import type { Exhibition } from "../content";
import { EXHIBITIONS } from "../content";
import { LinesReveal } from "../Reveal";

const EASE = [0.22, 1, 0.36, 1] as readonly [number, number, number, number];

const GRID_PLACEMENTS = [
  { col: "md:col-span-2 md:row-span-2", featured: true },
  { col: "", featured: false },
  { col: "", featured: false },
  { col: "", featured: false },
  { col: "md:col-span-2 md:row-span-2", featured: true },
  { col: "", featured: false },
] as const;

const BentoCard = ({
  project,
  index,
  featured,
  colClass,
}: {
  project: Exhibition;
  index: number;
  featured: boolean;
  colClass: string;
}) => {
  const ref = useRef<HTMLDivElement | null>(null);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40, scale: 0.97 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.8,
        ease: EASE,
        delay: index * 0.08,
      }}
      className={`group relative overflow-hidden rounded-sm ${colClass} ${
        featured ? "min-h-[420px] md:min-h-0" : "min-h-[340px] md:min-h-0"
      }`}
    >
      {/* Image */}
      <div className="absolute inset-0">
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes={featured ? "(max-width: 768px) 100vw, 66vw" : "(max-width: 768px) 100vw, 33vw"}
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
      </div>

      {/* Base overlay — always visible */}
      <div className="absolute inset-0 bg-gradient-to-t from-[var(--gallery-dark)] via-[var(--gallery-dark)]/40 to-[var(--gallery-dark)]/10 transition-opacity duration-500 group-hover:opacity-90" />

      {/* Hover overlay — darkens on hover for readability */}
      <div className="absolute inset-0 bg-[var(--gallery-dark)]/0 transition-all duration-500 group-hover:bg-[var(--gallery-dark)]/50" />

      {/* Watermark index */}
      <div aria-hidden className="pointer-events-none absolute right-4 top-4 md:right-6 md:top-6">
        <span
          className={`block font-gallery-display font-medium leading-none text-white/[0.06] transition-all duration-500 group-hover:text-white/[0.1] ${
            featured
              ? "text-[clamp(5rem,10vw,9rem)]"
              : "text-[clamp(4rem,6vw,6rem)]"
          }`}
        >
          {project.index}
        </span>
      </div>

      {/* Content — positioned at bottom */}
      <div className="relative flex h-full flex-col justify-end p-6 md:p-8">
        {/* Index label + line — always visible */}
        <div className="flex items-center gap-3">
          <span className="font-gallery-display text-xs font-medium text-[var(--gallery-quaternary)]">
            {project.index}
          </span>
          <span className="h-px flex-1 bg-white/15 transition-all duration-500 group-hover:bg-white/25" />
        </div>

        {/* Title — always visible */}
        <h3
          className={`mt-4 font-gallery-display font-medium leading-[0.98] tracking-tight text-white ${
            featured
              ? "text-[clamp(1.5rem,3vw,2.5rem)]"
              : "text-[clamp(1.25rem,2vw,1.75rem)]"
          }`}
        >
          {project.title}
        </h3>

        {/* Company & experience — always visible */}
        <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1">
          <span className="font-gallery-body text-[10px] uppercase tracking-[0.22em] text-white/55">
            {project.company}
          </span>
          <span
            aria-hidden
            className="hidden h-1 w-1 rounded-full bg-white/25 sm:block"
          />
          <span className="font-gallery-body text-[10px] uppercase tracking-[0.22em] text-white/40">
            {project.experience}
          </span>
        </div>

        {/* Expandable content — revealed on hover */}
        <div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-500 ease-out group-hover:grid-rows-[1fr]">
          <div className="overflow-hidden">
            <p className="pt-4 font-gallery-body text-sm leading-relaxed text-white/60">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-1.5 pt-4">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full bg-white/[0.08] px-2.5 py-1 font-gallery-body text-[10px] uppercase tracking-[0.18em] text-white/65 backdrop-blur-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Edge glow on hover */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-sm opacity-0 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.08)] transition-opacity duration-500 group-hover:opacity-100"
      />
    </motion.div>
  );
};

export const ExhibitionsSection = () => {
  return (
    <section
      id="projects"
      aria-label="Projects"
      className="relative px-6 py-32 md:px-12 md:py-44"
    >
      <div className="mx-auto max-w-[1600px]">
        {/* Section header */}
        <div className="flex items-end justify-between">
          <h2 className="font-gallery-display text-[clamp(2.5rem,7vw,6rem)] font-medium leading-[0.92] tracking-tight text-[var(--gallery-text)]">
            <LinesReveal lines={["Projects"]} />
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
          A curated collection of production experiences — each shaped by
          real-world constraints, performance demands, and user-centered
          design.
        </motion.p>

        {/* Bento Grid */}
        <div className="mt-16 grid auto-rows-[minmax(280px,1fr)] grid-cols-1 gap-3 md:mt-24 md:grid-cols-3 md:gap-4">
          {EXHIBITIONS.map((project, i) => {
            const placement = GRID_PLACEMENTS[i] ?? {
              col: "",
              featured: false,
            };
            return (
              <BentoCard
                key={project.index}
                project={project}
                index={i}
                featured={placement.featured}
                colClass={placement.col}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};
