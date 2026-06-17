"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "motion/react";
import { MANIFESTO_LINES } from "../content";

const ManifestoLine = ({
  line,
  index,
  total,
  progress,
}: {
  line: string;
  index: number;
  total: number;
  progress: MotionValue<number>;
}) => {
  const segment = 1 / total;
  const start = index * segment;
  const mid = start + segment * 0.5;
  const end = start + segment;

  const opacity = useTransform(
    progress,
    [start, mid - 0.04, end - 0.04, end],
    [0, 1, 1, 0],
  );
  const y = useTransform(progress, [start, mid], [60, 0]);
  const blur = useTransform(
    progress,
    [start, mid - 0.04, end - 0.04, end],
    ["12px", "0px", "0px", "12px"],
  );
  const filter = useTransform(blur, (value) => `blur(${value})`);

  return (
    <motion.p
      style={{ opacity, y, filter }}
      className="absolute max-w-5xl px-6 text-center font-gallery-display text-[clamp(2rem,6vw,5.5rem)] font-medium leading-[1.02] tracking-tight text-[var(--gallery-text)]"
    >
      {line}
    </motion.p>
  );
};

export const ManifestoSection = () => {
  const ref = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  return (
    <section
      id="manifesto"
      ref={ref}
      className="relative h-[420vh]"
      aria-label="Personal manifesto"
    >
      <div className="sticky top-0 flex h-screen items-center justify-center overflow-hidden">
        <span className="absolute left-6 top-1/2 -translate-y-1/2 font-gallery-body text-[10px] uppercase tracking-[0.3em] text-[var(--gallery-subtext)] md:left-12">
          Manifesto
        </span>
        {MANIFESTO_LINES.map((line, index) => (
          <ManifestoLine
            key={line}
            line={line}
            index={index}
            total={MANIFESTO_LINES.length}
            progress={scrollYProgress}
          />
        ))}
      </div>
    </section>
  );
};
