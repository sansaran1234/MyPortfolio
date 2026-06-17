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
      <div className="absolute inset-0 theme-gradient-background-base" />
      <motion.div
        className="absolute inset-[-24%] opacity-80 blur-3xl theme-gradient-background-motion"
        animate={{
          backgroundPosition: ["0% 50%", "100% 50%", "50% 100%", "0% 50%"],
          scale: [1, 1.08, 1.02, 1],
          rotate: [0, 6, -4, 0],
        }}
        transition={transition}
      />
      <motion.div
        className="absolute inset-0 opacity-60 theme-gradient-background-glow"
        animate={{
          opacity: [0.48, 0.64, 0.54, 0.48],
        }}
        transition={transition}
      />
    </div>
  );
};
