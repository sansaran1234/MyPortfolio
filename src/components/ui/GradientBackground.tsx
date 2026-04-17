"use client";

import type { ComponentProps } from "react";
import type { Transition } from "motion/react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

interface GradientBackgroundProps extends ComponentProps<"div"> {
  transition?: Transition;
}

const defaultTransition: Transition = {
  duration: 15,
  ease: "easeInOut",
  repeat: Number.POSITIVE_INFINITY,
};

export const GradientBackground = ({
  transition = defaultTransition,
  className,
  ...props
}: GradientBackgroundProps) => {
  return (
    <div
      className={cn(
        "absolute inset-0 z-0 overflow-hidden pointer-events-none",
        className,
      )}
      {...props}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(69,249,156,0.1),_transparent_32%),radial-gradient(circle_at_bottom_right,_rgba(79,125,255,0.1),_transparent_36%),linear-gradient(135deg,_rgba(34,42,61,0.78),_rgba(23,31,51,0.88)_42%,_rgba(11,19,38,0.96))]" />
      <motion.div
        className="absolute inset-[-24%] opacity-80 blur-3xl"
        animate={{
          backgroundPosition: ["0% 50%", "100% 50%", "50% 100%", "0% 50%"],
          scale: [1, 1.08, 1.02, 1],
          rotate: [0, 6, -4, 0],
        }}
        transition={transition}
        style={{
          backgroundImage:
            "linear-gradient(120deg, rgba(69,249,156,0.14), rgba(79,125,255,0.1), rgba(0,220,130,0.08), rgba(218,226,253,0.08))",
          backgroundSize: "240% 240%",
        }}
      />
      <motion.div
        className="absolute inset-0 opacity-60"
        animate={{
          opacity: [0.48, 0.64, 0.54, 0.48],
        }}
        transition={transition}
        style={{
          background:
            "radial-gradient(circle at 24% 18%, rgba(69,249,156,0.12), transparent 22%), radial-gradient(circle at 78% 28%, rgba(79,125,255,0.14), transparent 24%), radial-gradient(circle at 54% 78%, rgba(218,226,253,0.08), transparent 20%)",
        }}
      />
    </div>
  );
};
