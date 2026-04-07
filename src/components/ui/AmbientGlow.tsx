"use client";

import type { ComponentProps } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

interface AmbientGlowProps extends Pick<ComponentProps<typeof motion.div>, "initial" | "animate" | "transition"> {
  className?: string;
}

export const AmbientGlow = ({
  className,
  initial,
  animate,
  transition,
}: AmbientGlowProps) => {
  return (
    <motion.div
      className={cn(className)}
      initial={initial}
      animate={animate}
      transition={transition}
    />
  );
};
