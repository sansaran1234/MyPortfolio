"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  type MotionValue,
} from "motion/react";
import { PHILOSOPHY_STATEMENT } from "../content";

const Word = ({
  word,
  range,
  progress,
}: {
  word: string;
  range: [number, number];
  progress: MotionValue<number>;
}) => {
  const opacity = useTransform(progress, range, [0.15, 1]);
  const y = useTransform(progress, range, [8, 0]);

  return (
    <span className="mr-[0.28em] inline-block">
      <motion.span style={{ opacity, y }} className="inline-block">
        {word}
      </motion.span>
    </span>
  );
};

export const PhilosophySection = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.85", "end 0.4"],
  });

  const words = PHILOSOPHY_STATEMENT.split(" ");

  return (
    <section
      aria-label="Final philosophy"
      className="relative bg-[#151515] px-6 py-40 md:px-12 md:py-56"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(255,255,255,0.06),transparent_55%)]"
      />

      {/* <span className="absolute left-6 top-40 font-gallery-body text-[10px] uppercase tracking-[0.3em] text-white/40 [writing-mode:vertical-rl] md:left-12">
        Philosophy
      </span> */}

      <div className="relative mx-auto max-w-5xl">
        <motion.span
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="mb-12 block font-gallery-body text-[11px] uppercase tracking-[0.35em] text-white/35"
        >
          Philosophy
        </motion.span>

        <p
          ref={ref}
          className="flex flex-wrap font-gallery-pacifico text-[clamp(1.5rem,3.6vw,3rem)] font-normal leading-[1.3] tracking-tight text-white"
        >
          {words.map((word, index) => {
            const start = index / words.length;
            const end = start + 1 / words.length;
            return (
              <Word
                key={`${word}-${index}`}
                word={word}
                range={[start, end]}
                progress={scrollYProgress}
              />
            );
          })}
        </p>
      </div>
    </section>
  );
};
