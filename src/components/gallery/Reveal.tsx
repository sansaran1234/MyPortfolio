"use client";

import { motion, type Variants } from "motion/react";
import { cn } from "@/lib/utils";

const EASE = [0.22, 1, 0.36, 1] as const;

const lineContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.05 },
  },
};

const lineItem: Variants = {
  hidden: { y: "110%" },
  visible: {
    y: "0%",
    transition: { duration: 1, ease: EASE },
  },
};

const wordContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.045 },
  },
};

const wordItem: Variants = {
  hidden: { y: "105%", opacity: 0 },
  visible: {
    y: "0%",
    opacity: 1,
    transition: { duration: 0.8, ease: EASE },
  },
};

interface RevealProps {
  text: string;
  className?: string;
  /** delay in seconds before the reveal begins */
  delay?: number;
  once?: boolean;
}

/** Reveals each word, masked behind an overflow-hidden line. */
export const WordReveal = ({
  text,
  className,
  delay = 0,
  once = true,
}: RevealProps) => {
  const words = text.split(" ");

  return (
    <motion.span
      className={cn("inline-flex flex-wrap", className)}
      variants={wordContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: 0.6 }}
      transition={{ delayChildren: delay }}
    >
      {words.map((word, index) => (
        <span
          key={`${word}-${index}`}
          className="gallery-line-mask mr-[0.25em]"
        >
          <motion.span className="inline-block" variants={wordItem}>
            {word}
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
};

interface LinesRevealProps {
  lines: string[];
  className?: string;
  lineClassName?: string;
  once?: boolean;
}

/** Reveals an array of full lines, each masked. */
export const LinesReveal = ({
  lines,
  className,
  lineClassName,
  once = true,
}: LinesRevealProps) => {
  return (
    <motion.span
      className={cn("block", className)}
      variants={lineContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: 0.5 }}
    >
      {lines.map((line, index) => (
        <span key={`${line}-${index}`} className="gallery-line-mask">
          <motion.span
            className={cn("block", lineClassName)}
            variants={lineItem}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
};

interface FadeInProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  once?: boolean;
}

export const FadeIn = ({
  children,
  className,
  delay = 0,
  y = 28,
  once = true,
}: FadeInProps) => {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount: 0.4 }}
      transition={{ duration: 1, ease: EASE, delay }}
    >
      {children}
    </motion.div>
  );
};
