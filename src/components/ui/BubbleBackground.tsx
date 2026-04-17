"use client";

import type { ComponentProps } from "react";
import { useState } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
  useTransform,
} from "motion/react";
import { cn } from "@/lib/utils";

interface BubbleColors {
  first?: string;
  second?: string;
  third?: string;
  fourth?: string;
  fifth?: string;
  sixth?: string;
}

interface BubbleBackgroundProps extends ComponentProps<"div"> {
  interactive?: boolean;
  transition?: {
    stiffness?: number;
    damping?: number;
  };
  colors?: BubbleColors;
}

const defaultColors: Required<BubbleColors> = {
  first: "69,249,156",
  second: "122,162,255",
  third: "79,125,255",
  fourth: "218,226,253",
  fifth: "0,220,130",
  sixth: "86,198,255",
};

const bubbles = [
  {
    size: "h-[24rem] w-[24rem]",
    left: "left-[-8%]",
    top: "top-[-8%]",
    duration: 22,
    delay: 0,
    x: [0, 36, -18, 0],
    y: [0, 28, -22, 0],
    scale: [1, 1.08, 0.96, 1],
  },
  {
    size: "h-[20rem] w-[20rem]",
    left: "right-[8%]",
    top: "top-[10%]",
    duration: 19,
    delay: 0.6,
    x: [0, -26, 18, 0],
    y: [0, -20, 12, 0],
    scale: [0.96, 1.06, 1, 0.96],
  },
  {
    size: "h-[18rem] w-[18rem]",
    left: "left-[18%]",
    top: "bottom-[2%]",
    duration: 18,
    delay: 1.1,
    x: [0, 24, -14, 0],
    y: [0, -26, 16, 0],
    scale: [1, 1.04, 0.94, 1],
  },
  {
    size: "h-[16rem] w-[16rem]",
    left: "right-[18%]",
    top: "bottom-[-4%]",
    duration: 20,
    delay: 0.3,
    x: [0, -22, 16, 0],
    y: [0, 20, -14, 0],
    scale: [0.94, 1.08, 1, 0.94],
  },
  {
    size: "h-[12rem] w-[12rem]",
    left: "left-[40%]",
    top: "top-[18%]",
    duration: 16,
    delay: 0.8,
    x: [0, 18, -10, 0],
    y: [0, -16, 12, 0],
    scale: [1, 1.12, 0.98, 1],
  },
  {
    size: "h-[14rem] w-[14rem]",
    left: "right-[34%]",
    top: "top-[52%]",
    duration: 17,
    delay: 1.4,
    x: [0, -16, 14, 0],
    y: [0, 18, -12, 0],
    scale: [1, 1.1, 0.97, 1],
  },
] as const;

export const BubbleBackground = ({
  interactive = false,
  transition = { stiffness: 100, damping: 20 },
  colors,
  className,
  onPointerMove,
  onPointerLeave,
  ...props
}: BubbleBackgroundProps) => {
  const palette = { ...defaultColors, ...colors };
  const [isInteractive, setIsInteractive] = useState(false);
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const smoothX = useSpring(pointerX, transition);
  const smoothY = useSpring(pointerY, transition);
  const driftX = useTransform(smoothX, [-0.5, 0.5], [-18, 18]);
  const driftY = useTransform(smoothY, [-0.5, 0.5], [-18, 18]);
  const overlayX = useTransform(smoothX, [-0.5, 0.5], ["42%", "58%"]);
  const overlayY = useTransform(smoothY, [-0.5, 0.5], ["38%", "62%"]);
  const overlayBackground = useMotionTemplate`radial-gradient(circle at ${overlayX} ${overlayY}, rgba(${palette.fourth}, 0.18), transparent 34%)`;
  const bubbleColors = [
    palette.first,
    palette.second,
    palette.third,
    palette.fourth,
    palette.fifth,
    palette.sixth,
  ];

  const handlePointerMove: ComponentProps<"div">["onPointerMove"] = (event) => {
    if (!interactive) {
      onPointerMove?.(event);
      return;
    }

    const bounds = event.currentTarget.getBoundingClientRect();
    const nextX = (event.clientX - bounds.left) / bounds.width - 0.5;
    const nextY = (event.clientY - bounds.top) / bounds.height - 0.5;

    pointerX.set(nextX);
    pointerY.set(nextY);
    setIsInteractive(true);
    onPointerMove?.(event);
  };

  const handlePointerLeave: ComponentProps<"div">["onPointerLeave"] = (
    event,
  ) => {
    if (interactive) {
      pointerX.set(0);
      pointerY.set(0);
      setIsInteractive(false);
    }

    onPointerLeave?.(event);
  };

  return (
    <div
      className={cn(
        "absolute inset-0 -z-10 overflow-hidden",
        !interactive && "pointer-events-none",
        className,
      )}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      {...props}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(69,249,156,0.12),_transparent_42%),radial-gradient(circle_at_bottom_left,_rgba(79,125,255,0.18),_transparent_34%)]" />
      <motion.div
        className="absolute inset-0"
        style={{
          x: interactive ? driftX : 0,
          y: interactive ? driftY : 0,
          background: overlayBackground,
          opacity: interactive ? (isInteractive ? 1 : 0.7) : 0.7,
        }}
      />
      <div className="absolute inset-0 [filter:blur(72px)]">
        {bubbles.map((bubble, index) => (
          <motion.div
            key={`${bubble.left}-${bubble.top}`}
            className={cn(
              "absolute rounded-full opacity-70 mix-blend-screen",
              bubble.size,
              bubble.left,
              bubble.top,
            )}
            style={{
              background: `radial-gradient(circle at 30% 30%, rgba(${bubbleColors[index]}, 0.55), rgba(${bubbleColors[index]}, 0.16) 45%, transparent 72%)`,
              x: interactive ? driftX : 0,
              y: interactive ? driftY : 0,
            }}
            animate={{
              x: [...bubble.x],
              y: [...bubble.y],
              scale: [...bubble.scale],
            }}
            transition={{
              duration: bubble.duration,
              ease: "easeInOut",
              repeat: Number.POSITIVE_INFINITY,
              delay: bubble.delay,
            }}
          />
        ))}
      </div>
    </div>
  );
};
