"use client";

import { motion, type Variants } from "motion/react";
import { cn } from "@/lib/utils";

interface AmbientDetailProps {
  containerClassName?: string;
  shapeClassName?: string;
  variants?: Variants;
  driftX?: number;
  driftY?: number;
  scaleTo?: number;
  duration?: number;
}

export const AmbientDetail = ({
  containerClassName,
  shapeClassName,
  variants,
  driftX = -8,
  driftY = 8,
  scaleTo = 1.05,
  duration = 3,
}: AmbientDetailProps) => {
  return (
    <motion.div
      className={cn(
        "absolute top-0 right-0 translate-x-12 -translate-y-12",
        containerClassName,
      )}
      variants={variants}
    >
      <motion.div
        className={cn(
          "w-32 h-32 rounded-bl-full bg-primary/10",
          shapeClassName,
        )}
        animate={{
          x: [0, driftX, 0],
          y: [0, driftY, 0],
          scale: [1, scaleTo, 1],
        }}
        transition={{
          duration,
          ease: "easeInOut",
          repeat: Number.POSITIVE_INFINITY,
        }}
      />
    </motion.div>
  );
};
