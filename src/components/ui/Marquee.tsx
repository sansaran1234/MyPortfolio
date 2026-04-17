"use client";

import type { CSSProperties, ReactNode } from "react";
import {
  Children,
  Fragment,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { motion, useAnimationFrame, useMotionValue } from "motion/react";
import { cn } from "@/lib/utils";

interface MarqueeProps {
  children: ReactNode;
  className?: string;
  reverse?: boolean;
  pauseOnHover?: boolean;
  duration?: number;
  gap?: string;
}

export const Marquee = ({
  children,
  className,
  reverse = false,
  pauseOnHover = false,
  duration = 28,
  gap = "1rem",
}: MarqueeProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const firstGroupRef = useRef<HTMLDivElement>(null);
  const secondGroupRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [cycleDistance, setCycleDistance] = useState(0);
  const [repeatCount, setRepeatCount] = useState(2);
  const x = useMotionValue(0);
  const items = useMemo(() => Children.toArray(children), [children]);

  useEffect(() => {
    const updateMeasurements = () => {
      const container = containerRef.current;
      const firstGroup = firstGroupRef.current;
      const secondGroup = secondGroupRef.current;

      if (!container || !firstGroup || !secondGroup) {
        return;
      }

      const singleGroupWidth = firstGroup.scrollWidth;
      const containerWidth = container.offsetWidth;

      if (!singleGroupWidth) {
        return;
      }

      const requiredCopies = Math.max(
        2,
        Math.ceil((containerWidth * 2) / singleGroupWidth) + 1,
      );

      setRepeatCount((current) =>
        current === requiredCopies ? current : requiredCopies,
      );
      setCycleDistance(secondGroup.offsetLeft - firstGroup.offsetLeft);
    };

    updateMeasurements();

    const resizeObserver = new ResizeObserver(() => updateMeasurements());

    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    if (firstGroupRef.current) {
      resizeObserver.observe(firstGroupRef.current);
    }

    if (secondGroupRef.current) {
      resizeObserver.observe(secondGroupRef.current);
    }

    return () => resizeObserver.disconnect();
  }, []);

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      const firstGroup = firstGroupRef.current;
      const secondGroup = secondGroupRef.current;

      if (!firstGroup || !secondGroup) {
        return;
      }

      setCycleDistance(secondGroup.offsetLeft - firstGroup.offsetLeft);
    });

    return () => window.cancelAnimationFrame(frame);
  }, [repeatCount]);

  useEffect(() => {
    x.set(reverse && cycleDistance > 0 ? -cycleDistance : 0);
  }, [cycleDistance, reverse, x]);

  useAnimationFrame((_, delta) => {
    if (!cycleDistance || duration <= 0 || (pauseOnHover && isHovered)) {
      return;
    }

    const distancePerSecond = cycleDistance / duration;
    const movement = (distancePerSecond * delta) / 1000;
    const currentX = x.get();

    if (reverse) {
      const nextX = currentX + movement;
      x.set(nextX >= 0 ? nextX - cycleDistance : nextX);
      return;
    }

    const nextX = currentX - movement;
    x.set(nextX <= -cycleDistance ? nextX + cycleDistance : nextX);
  });

  const contentStyle = {
    gap,
  } as CSSProperties;

  return (
    <div
      ref={containerRef}
      className={cn("group flex overflow-hidden", className)}
      onMouseEnter={pauseOnHover ? () => setIsHovered(true) : undefined}
      onMouseLeave={pauseOnHover ? () => setIsHovered(false) : undefined}
    >
      <motion.div
        style={{ x, gap }}
        className="flex min-w-max shrink-0 items-stretch"
      >
        {Array.from({ length: repeatCount }).map((_, index) => (
          <div
            key={index}
            ref={
              index === 0
                ? firstGroupRef
                : index === 1
                  ? secondGroupRef
                  : undefined
            }
            aria-hidden={index > 0 ? "true" : undefined}
            style={contentStyle}
            className="flex min-w-max shrink-0 items-stretch"
          >
            {items.map((item, itemIndex) => (
              <Fragment key={`${index}-${itemIndex}`}>{item}</Fragment>
            ))}
          </div>
        ))}
      </motion.div>
    </div>
  );
};
