"use client";

import { useEffect, useRef, useCallback } from "react";

interface TopographicRingsBackgroundProps {
  /** Accent ring color (innermost tier) */
  accentColor?: string;
  /** Mid-tier ring color */
  midColor?: string;
  /** Base ring color (outermost tier) */
  baseColor?: string;
  /** Accent stroke width */
  accentStroke?: number;
  /** Mid stroke width */
  midStroke?: number;
  /** Base stroke width */
  baseStroke?: number;
  /** Total number of rings */
  ringCount?: number;
  /** Spacing between rings in px */
  ringSpacing?: number;
  /** Animation speed multiplier */
  speed?: number;
  /** First sine wave frequency */
  frequency1?: number;
  /** Second sine wave frequency */
  frequency2?: number;
  /** Third sine wave frequency */
  frequency3?: number;
  /** Morph amplitude */
  amplitude?: number;
  /** Vertical squash factor (0-1, lower = more oval) */
  verticalSquash?: number;
  /** Enable mouse interaction */
  mouseInteraction?: boolean;
  /** Mouse influence strength */
  mouseStrength?: number;
  className?: string;
}

export const TopographicRingsBackground = ({
  accentColor = "rgba(69, 249, 156, 0.7)",
  midColor = "rgba(99, 102, 241, 0.4)",
  baseColor = "rgba(188, 199, 222, 0.15)",
  accentStroke = 1.8,
  midStroke = 1.2,
  baseStroke = 0.7,
  ringCount = 18,
  ringSpacing = 38,
  speed = 1,
  frequency1 = 3,
  frequency2 = 5,
  frequency3 = 7,
  amplitude = 12,
  verticalSquash = 0.78,
  mouseInteraction = true,
  mouseStrength = 0.4,
  className = "",
}: TopographicRingsBackgroundProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const frameRef = useRef<number>(0);
  const mouseRef = useRef({ x: 0.5, y: 0.5 });

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (!mouseInteraction) return;
      const rect = canvasRef.current?.getBoundingClientRect();
      if (!rect) return;
      mouseRef.current = {
        x: (e.clientX - rect.left) / rect.width,
        y: (e.clientY - rect.top) / rect.height,
      };
    },
    [mouseInteraction],
  );

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = Math.min(window.devicePixelRatio, 2);

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
    };

    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", handleMouseMove);

    let time = 0;
    let smoothX = 0.5;
    let smoothY = 0.5;

    const getRingStyle = (
      index: number,
      total: number,
    ): { color: string; width: number } => {
      const ratio = index / total;
      if (ratio < 0.3) {
        return { color: accentColor, width: accentStroke };
      } else if (ratio < 0.65) {
        return { color: midColor, width: midStroke };
      }
      return { color: baseColor, width: baseStroke };
    };

    const draw = () => {
      const width = canvas.width / dpr;
      const height = canvas.height / dpr;
      const cx = width / 2;
      const cy = height / 2;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, width, height);
      ctx.lineJoin = "round";
      ctx.lineCap = "round";

      const mouse = mouseRef.current;
      // Ease the pointer follow so the reaction stays fluid.
      smoothX += (mouse.x - smoothX) * 0.06;
      smoothY += (mouse.y - smoothY) * 0.06;

      // Horizontal pointer drives a phase shift (not a frequency change).
      // Keeping the frequency integer means every closed ring wraps exactly
      // at angle 0 / 2π, so no seam appears while following the cursor.
      const phaseShift = mouseInteraction
        ? (smoothX - 0.5) * mouseStrength * Math.PI * 2
        : 0;
      const ampShift = mouseInteraction ? (smoothY - 0.5) * mouseStrength * 20 : 0;

      // Round harmonics to integers to guarantee a seamless wrap.
      const f1 = Math.round(frequency1);
      const f2 = Math.round(frequency2);
      const f3 = Math.round(frequency3);

      const timeSpeed = speed * 0.012;

      for (let i = 0; i < ringCount; i++) {
        const baseRadius = (i + 1) * ringSpacing;
        const style = getRingStyle(i, ringCount);
        const points = 180;

        ctx.beginPath();

        for (let p = 0; p <= points; p++) {
          const angle = (p / points) * Math.PI * 2;

          const wave1 =
            Math.sin(angle * f1 + time * timeSpeed + phaseShift) *
            (amplitude + ampShift) *
            (1 + i * 0.08);
          const wave2 =
            Math.sin(
              angle * f2 + time * timeSpeed * 1.3 + i * 0.4 + phaseShift * 0.6,
            ) *
            (amplitude * 0.6 + ampShift * 0.4) *
            (1 + i * 0.05);
          const wave3 =
            Math.sin(
              angle * f3 + time * timeSpeed * 0.7 + i * 0.8 + phaseShift * 0.3,
            ) *
            (amplitude * 0.3) *
            (1 + i * 0.03);

          const distortion = wave1 + wave2 + wave3;
          const r = baseRadius + distortion;

          const x = cx + Math.cos(angle) * r;
          const y = cy + Math.sin(angle) * r * verticalSquash;

          if (p === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }

        ctx.closePath();
        ctx.strokeStyle = style.color;
        ctx.lineWidth = style.width;
        ctx.stroke();
      }

      time += 1;
      frameRef.current = requestAnimationFrame(draw);
    };

    frameRef.current = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(frameRef.current);
    };
  }, [
    accentColor,
    midColor,
    baseColor,
    accentStroke,
    midStroke,
    baseStroke,
    ringCount,
    ringSpacing,
    speed,
    frequency1,
    frequency2,
    frequency3,
    amplitude,
    verticalSquash,
    mouseInteraction,
    mouseStrength,
    handleMouseMove,
  ]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className={`absolute inset-0 h-full w-full ${className}`}
    />
  );
};
