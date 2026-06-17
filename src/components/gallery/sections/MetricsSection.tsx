"use client";

import { useEffect, useRef, useState } from "react";
import {
  animate,
  motion,
  useInView,
  useScroll,
  useTransform,
} from "motion/react";
import { CAREER_METRICS } from "../content";

const parseMetric = (value: string) => {
  const numeric = parseInt(value.replace(/\D/g, ""), 10) || 0;
  const suffix = value.replace(/[0-9]/g, "");
  return { numeric, suffix };
};

const Counter = ({ value }: { value: string }) => {
  const { numeric, suffix } = parseMetric(value);
  const ref = useRef<HTMLSpanElement | null>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, numeric, {
      duration: 2,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (latest) => setDisplay(Math.round(latest)),
    });
    return () => controls.stop();
  }, [inView, numeric]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
};

export const MetricsSection = () => {
  const ref = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const x = useTransform(scrollYProgress, [0, 1], ["6%", "-6%"]);

  return (
    <section
      ref={ref}
      aria-label="Career metrics"
      className="relative overflow-hidden border-t border-[var(--gallery-line)] py-32 md:py-44"
    >
      <div className="px-6 md:px-12">
        <span className="font-gallery-body text-[11px] uppercase tracking-[0.3em] text-[var(--gallery-subtext)]">
          Section 06 — Career Metrics
        </span>
      </div>

      <motion.div style={{ x }} className="mt-16 flex flex-col">
        {CAREER_METRICS.map((metric) => (
          <div
            key={metric.label}
            className="flex items-center justify-between gap-6 border-b border-[var(--gallery-line)] px-6 py-6 md:px-12 md:py-10"
          >
            <span className="font-gallery-display text-[clamp(3rem,12vw,11rem)] font-medium leading-[0.9] tracking-tight text-[var(--gallery-text)]">
              <Counter value={metric.value} />
            </span>
            <span className="shrink-0 text-right font-gallery-body text-xs uppercase tracking-[0.25em] text-[var(--gallery-subtext)] md:text-sm">
              {metric.label}
            </span>
          </div>
        ))}
      </motion.div>
    </section>
  );
};
