"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import type { Exhibition } from "../content";
import { EXHIBITIONS } from "../content";
import { LinesReveal } from "../Reveal";

const ExhibitionItem = ({ project }: { project: Exhibition }) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["-12%", "12%"]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.15, 1, 1.15]);

  return (
    <div
      ref={ref}
      className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-16"
    >
      <div className="lg:col-span-7">
        <div
          data-cursor="hover"
          className="group relative aspect-[4/3] overflow-hidden rounded-sm bg-[var(--gallery-secondary)]"
        >
          <motion.div style={{ y: imageY, scale }} className="absolute inset-0">
            <Image
              src={project.image}
              alt={project.title}
              fill
              sizes="(max-width: 1024px) 100vw, 60vw"
              className="object-cover transition-[filter] duration-700 ease-out grayscale group-hover:grayscale-0"
            />
          </motion.div>
          <div className="absolute inset-0 bg-[var(--gallery-dark)]/5 transition-opacity duration-700 group-hover:opacity-0" />
        </div>
      </div>

      <div className="lg:col-span-5">
        <div className="flex items-baseline gap-5">
          <span className="font-gallery-display text-2xl font-medium text-[var(--gallery-subtext)]">
            {project.index}
          </span>
          <span className="h-px flex-1 bg-[var(--gallery-line)]" />
        </div>

        <h3 className="mt-6 font-gallery-display text-[clamp(2rem,4vw,3.5rem)] font-medium leading-[0.98] tracking-tight text-[var(--gallery-text)]">
          <LinesReveal lines={[project.title]} />
        </h3>

        <p className="mt-6 max-w-md font-gallery-body text-base leading-relaxed text-[var(--gallery-subtext)]">
          {project.description}
        </p>

        <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="font-gallery-body text-[11px] uppercase tracking-[0.2em] text-[var(--gallery-text)]"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export const ExhibitionsSection = () => {
  return (
    <section
      id="exhibitions"
      aria-label="Featured exhibitions"
      className="relative border-t border-[var(--gallery-line)] px-6 py-32 md:px-12 md:py-44"
    >
      <div className="mx-auto max-w-[1600px]">
        <div className="flex items-end justify-between">
          <h2 className="font-gallery-display text-[clamp(2.5rem,7vw,6rem)] font-medium leading-[0.92] tracking-tight text-[var(--gallery-text)]">
            <LinesReveal lines={["Featured", "Exhibitions"]} />
          </h2>
          <span className="hidden font-gallery-body text-[11px] uppercase tracking-[0.3em] text-[var(--gallery-subtext)] md:block">
            06 Installations
          </span>
        </div>

        <div className="mt-24 flex flex-col gap-32 md:gap-48">
          {EXHIBITIONS.map((project) => (
            <ExhibitionItem key={project.index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};
