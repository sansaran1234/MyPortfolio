"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "motion/react";
import { PHILOSOPHY_QUOTES } from "../content";

const Quote = ({
  quote,
  index,
  total,
  progress,
}: {
  quote: string;
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
    [start, mid - 0.05, end - 0.05, end],
    [0, 1, 1, 0],
  );
  const y = useTransform(progress, [start, mid], [50, 0]);

  return (
    <motion.p
      style={{ opacity, y }}
      className="absolute max-w-5xl px-6 text-center font-gallery-display text-[clamp(2rem,7vw,6rem)] font-medium leading-[1] tracking-tight text-white"
    >
      {quote}
    </motion.p>
  );
};

export const PhilosophySection = () => {
  const ref = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  return (
    <section
      ref={ref}
      aria-label="Final philosophy"
      className="relative h-[320vh] bg-[#151515]"
    >
      <div className="sticky top-0 flex h-screen items-center justify-center overflow-hidden">
        <span className="absolute left-6 top-1/2 -translate-y-1/2 font-gallery-body text-[10px] uppercase tracking-[0.3em] text-white/40 md:left-12">
          Philosophy
        </span>
        {PHILOSOPHY_QUOTES.map((quote, index) => (
          <Quote
            key={quote}
            quote={quote}
            index={index}
            total={PHILOSOPHY_QUOTES.length}
            progress={scrollYProgress}
          />
        ))}
      </div>
    </section>
  );
};
