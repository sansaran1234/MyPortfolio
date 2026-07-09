"use client";

import { useEffect, useRef } from "react";

type FlowDirection = "horizontal" | "diagonal";

interface AuroraWaveBackgroundProps {
  background?: string;
  primaryColor?: string;
  secondaryColor?: string;
  accentColor?: string;
  flowSpeed?: number;
  glowIntensity?: number;
  atmosphere?: number;
  flowDirection?: FlowDirection;
  className?: string;
}

interface WaveConfig {
  color: string;
  amplitude: number;
  frequency: number;
  phase: number;
  speed: number;
  lineWidth: number;
  yOffset: number;
}

export const AuroraWaveBackground = ({
  background = "#0b0f1a",
  primaryColor = "#45f99c",
  secondaryColor = "#6366f1",
  accentColor = "#f472b6",
  flowSpeed = 1,
  glowIntensity = 0.6,
  atmosphere = 60,
  flowDirection = "diagonal",
  className = "",
}: AuroraWaveBackgroundProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const frameRef = useRef<number>(0);

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
      ctx.scale(dpr, dpr);
    };

    resize();
    window.addEventListener("resize", resize);

    const waves: WaveConfig[] = [
      {
        color: primaryColor,
        amplitude: 120,
        frequency: 0.003,
        phase: 0,
        speed: 0.008 * flowSpeed,
        lineWidth: 2.5,
        yOffset: 0.35,
      },
      {
        color: primaryColor,
        amplitude: 80,
        frequency: 0.004,
        phase: 1.2,
        speed: 0.006 * flowSpeed,
        lineWidth: 1.8,
        yOffset: 0.4,
      },
      {
        color: secondaryColor,
        amplitude: 100,
        frequency: 0.0035,
        phase: 2.5,
        speed: 0.01 * flowSpeed,
        lineWidth: 2.2,
        yOffset: 0.55,
      },
      {
        color: secondaryColor,
        amplitude: 60,
        frequency: 0.005,
        phase: 4.0,
        speed: 0.007 * flowSpeed,
        lineWidth: 1.5,
        yOffset: 0.5,
      },
      {
        color: accentColor,
        amplitude: 90,
        frequency: 0.0025,
        phase: 5.5,
        speed: 0.012 * flowSpeed,
        lineWidth: 2,
        yOffset: 0.65,
      },
      {
        color: accentColor,
        amplitude: 50,
        frequency: 0.006,
        phase: 3.8,
        speed: 0.009 * flowSpeed,
        lineWidth: 1.2,
        yOffset: 0.7,
      },
    ];

    let time = 0;

    const drawWave = (wave: WaveConfig, width: number, height: number) => {
      const baseY = height * wave.yOffset;
      const isDiagonal = flowDirection === "diagonal";
      const diagonalFactor = isDiagonal ? 0.3 : 0;

      ctx.beginPath();
      ctx.moveTo(0, baseY);

      for (let x = 0; x <= width; x += 3) {
        const normalX = x / width;
        const sineValue =
          Math.sin(x * wave.frequency + time * wave.speed + wave.phase) *
          wave.amplitude;
        const secondSine =
          Math.sin(x * wave.frequency * 0.5 + time * wave.speed * 0.7 + wave.phase * 1.3) *
          wave.amplitude * 0.4;

        const diagonalShift = normalX * height * diagonalFactor;
        const y = baseY + sineValue + secondSine - diagonalShift;

        if (x === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      }

      ctx.strokeStyle = wave.color;
      ctx.lineWidth = wave.lineWidth;
      ctx.globalAlpha = glowIntensity;
      ctx.shadowColor = wave.color;
      ctx.shadowBlur = atmosphere * 0.5;
      ctx.stroke();

      ctx.globalAlpha = glowIntensity * 0.4;
      ctx.lineWidth = wave.lineWidth * 4;
      ctx.shadowBlur = atmosphere;
      ctx.stroke();

      ctx.globalAlpha = glowIntensity * 0.15;
      ctx.lineWidth = wave.lineWidth * 10;
      ctx.shadowBlur = atmosphere * 1.5;
      ctx.stroke();

      ctx.shadowBlur = 0;
      ctx.globalAlpha = 1;
    };

    const draw = () => {
      const width = canvas.width / dpr;
      const height = canvas.height / dpr;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      ctx.fillStyle = background;
      ctx.fillRect(0, 0, width, height);

      ctx.globalCompositeOperation = "screen";

      for (const wave of waves) {
        drawWave(wave, width, height);
      }

      ctx.globalCompositeOperation = "source-over";

      time += 1;
      frameRef.current = requestAnimationFrame(draw);
    };

    frameRef.current = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(frameRef.current);
    };
  }, [
    background,
    primaryColor,
    secondaryColor,
    accentColor,
    flowSpeed,
    glowIntensity,
    atmosphere,
    flowDirection,
  ]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className={`absolute inset-0 h-full w-full ${className}`}
    />
  );
};
