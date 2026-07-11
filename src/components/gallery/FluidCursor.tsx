"use client";

import { useEffect, useId, useRef, useState } from "react";
import { cn } from "@/lib/utils";

export type FluidCursorProps = {
  /** Primary blob diameter in px */
  size?: number;
  /** Number of trailing blobs behind the leader */
  trailCount?: number;
  /** Blob fill color */
  color?: string;
  /** Base opacity for the merged ink body */
  opacity?: number;
  /** Follow speed — higher = snappier leader */
  speed?: number;
  /** Trail elasticity — higher = tighter, more-merged trailing */
  elasticity?: number;
  /** Merge softness — higher = drops fuse together more (ink feel) */
  viscosity?: number;
};

const DEFAULTS = {
  size: 40,
  trailCount: 4,
  color: "var(--gallery-quaternary)",
  opacity: 0.6,
  speed: 0.28,
  elasticity: 0.24,
  viscosity: 0.26,
} as const;

type Point = { x: number; y: number };

export const FluidCursor = ({
  size = DEFAULTS.size,
  trailCount = DEFAULTS.trailCount,
  color = DEFAULTS.color,
  opacity = DEFAULTS.opacity,
  speed = DEFAULTS.speed,
  elasticity = DEFAULTS.elasticity,
  viscosity = DEFAULTS.viscosity,
}: FluidCursorProps) => {
  const [hovering, setHovering] = useState(false);
  const [enabled, setEnabled] = useState(false);
  const [blobs, setBlobs] = useState<Point[]>(() =>
    Array.from({ length: trailCount + 1 }, () => ({ x: -160, y: -160 })),
  );

  const targetRef = useRef<Point>({ x: -160, y: -160 });
  const filterId = `fluid-cursor-goo-${useId().replace(/:/g, "")}`;

  // stdDeviation for the goo blur — scales with blob size + viscosity.
  const blur = Math.max(4, size * viscosity);

  useEffect(() => {
    setBlobs(
      Array.from({ length: trailCount + 1 }, () => ({ ...targetRef.current })),
    );
  }, [trailCount]);

  useEffect(() => {
    const coarse = window.matchMedia("(hover: none), (pointer: coarse)");
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");

    const syncEnabled = () => {
      setEnabled(!coarse.matches && !reduced.matches);
    };

    syncEnabled();
    coarse.addEventListener("change", syncEnabled);
    reduced.addEventListener("change", syncEnabled);

    return () => {
      coarse.removeEventListener("change", syncEnabled);
      reduced.removeEventListener("change", syncEnabled);
    };
  }, []);

  useEffect(() => {
    if (!enabled) return;

    const onMove = (event: PointerEvent) => {
      targetRef.current = { x: event.clientX, y: event.clientY };

      const target = event.target as HTMLElement | null;
      const interactive = target?.closest("a, button, [data-cursor='hover']");
      setHovering(Boolean(interactive));
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, [enabled]);

  useEffect(() => {
    if (!enabled) return;

    let frame = 0;

    const tick = () => {
      setBlobs((previous) => {
        const next = previous.map((point) => ({ ...point }));
        const target = targetRef.current;

        next[0] = {
          x: next[0].x + (target.x - next[0].x) * speed,
          y: next[0].y + (target.y - next[0].y) * speed,
        };

        for (let index = 1; index < next.length; index += 1) {
          const trailEase = elasticity + index * 0.03;
          next[index] = {
            x: next[index].x + (next[index - 1].x - next[index].x) * trailEase,
            y: next[index].y + (next[index - 1].y - next[index].y) * trailEase,
          };
        }

        return next;
      });

      frame = window.requestAnimationFrame(tick);
    };

    frame = window.requestAnimationFrame(tick);
    return () => window.cancelAnimationFrame(frame);
  }, [enabled, speed, elasticity, trailCount]);

  if (!enabled) return null;

  return (
    <div aria-hidden className="fluid-cursor-root">
      <svg className="fluid-cursor-defs" aria-hidden focusable="false">
        <defs>
          <filter id={filterId}>
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation={blur}
              result="blur"
            />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -9"
              result="goo"
            />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
        </defs>
      </svg>

      <div
        className="fluid-cursor-goo"
        style={{ opacity, filter: `url(#${filterId})` }}
      >
        {blobs.map((blob, index) => {
          const isLead = index === 0;
          const trailIndex = trailCount - index;
          const ratio = trailIndex / Math.max(trailCount, 1);
          const blobSize = size * (0.6 + ratio * 0.4);
          const scale = isLead ? (hovering ? 1.4 : 1) : 1 + trailIndex * 0.03;

          return (
            <div
              key={`fluid-blob-${index}`}
              className={cn(
                "fluid-cursor-blob transition-transform duration-300 ease-out",
                isLead && "fluid-cursor-blob-lead",
              )}
              style={{
                transform: `translate3d(${blob.x}px, ${blob.y}px, 0) translate(-50%, -50%) scale(${scale})`,
                width: blobSize,
                height: blobSize,
                background: `radial-gradient(circle at 35% 30%, color-mix(in oklab, ${color} 55%, #ffffff), ${color} 62%)`,
                zIndex: trailCount - index,
              }}
            />
          );
        })}
      </div>
    </div>
  );
};
