"use client";

import { motion } from "motion/react";

interface NoiseFlowBackgroundProps {
  opacity?: number;
  className?: string;
}

const blobs = [
  {
    size: "55vh",
    x: "45%",
    y: "40%",
    color: "var(--gallery-tertiary)",
    duration: 22,
    delay: 0,
    rotate: 360,
  },
  {
    size: "40vh",
    x: "25%",
    y: "30%",
    color: "var(--gallery-secondary)",
    duration: 28,
    delay: 2,
    rotate: -360,
  },
  {
    size: "45vh",
    x: "70%",
    y: "60%",
    color: "var(--gallery-quaternary)",
    duration: 25,
    delay: 4,
    rotate: 360,
  },
  {
    size: "30vh",
    x: "60%",
    y: "25%",
    color: "var(--gallery-primary)",
    duration: 30,
    delay: 1,
    rotate: -360,
  },
  {
    size: "35vh",
    x: "35%",
    y: "70%",
    color: "var(--gallery-tertiary)",
    duration: 26,
    delay: 3,
    rotate: 360,
  },
];

const morphKeyframes = [
  "40% 60% 70% 30% / 50% 40% 60% 50%",
  "70% 30% 50% 50% / 30% 60% 40% 70%",
  "50% 50% 30% 70% / 60% 40% 70% 30%",
  "30% 70% 60% 40% / 70% 50% 30% 60%",
  "60% 40% 50% 50% / 40% 70% 50% 40%",
  "40% 60% 70% 30% / 50% 40% 60% 50%",
];

const driftKeyframes = [
  { x: 0, y: 0 },
  { x: 30, y: -20 },
  { x: -20, y: 15 },
  { x: 15, y: 25 },
  { x: -25, y: -15 },
  { x: 0, y: 0 },
];

export const NoiseFlowBackground = ({
  opacity = 0.5,
  className = "",
}: NoiseFlowBackgroundProps) => {
  return (
    <div
      aria-hidden
      className={`absolute inset-0 h-full w-full overflow-hidden ${className}`}
      style={{ opacity }}
    >
      {blobs.map((blob, i) => (
        <motion.div
          key={i}
          initial={{
            borderRadius: morphKeyframes[0],
            x: "-50%",
            y: "-50%",
            rotate: 0,
            scale: 0.85,
            opacity: 0,
          }}
          animate={{
            borderRadius: morphKeyframes,
            x: driftKeyframes.map((d) => `calc(-50% + ${d.x}px)`),
            y: driftKeyframes.map((d) => `calc(-50% + ${d.y}px)`),
            rotate: blob.rotate,
            scale: [0.85, 1, 0.92, 1.05, 0.9, 0.85],
            opacity: 1,
          }}
          transition={{
            borderRadius: {
              duration: blob.duration,
              repeat: Infinity,
              ease: "easeInOut",
            },
            x: {
              duration: blob.duration * 1.2,
              repeat: Infinity,
              ease: "easeInOut",
            },
            y: {
              duration: blob.duration * 1.2,
              repeat: Infinity,
              ease: "easeInOut",
            },
            rotate: {
              duration: blob.duration * 2,
              repeat: Infinity,
              ease: "linear",
            },
            scale: {
              duration: blob.duration * 0.9,
              repeat: Infinity,
              ease: "easeInOut",
            },
            opacity: {
              duration: 2,
              delay: blob.delay * 0.3,
              ease: "easeOut",
            },
          }}
          className="absolute blur-[100px]"
          style={{
            width: blob.size,
            height: blob.size,
            left: blob.x,
            top: blob.y,
            background: `radial-gradient(ellipse at 30% 40%, ${blob.color}, transparent 70%)`,
          }}
        />
      ))}
    </div>
  );
};
