"use client";

import { useEffect, useState } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  type SpringOptions,
} from "motion/react";

const ringSpring: SpringOptions = { stiffness: 220, damping: 26, mass: 0.6 };
const dotSpring: SpringOptions = { stiffness: 700, damping: 40, mass: 0.4 };

export const CustomCursor = () => {
  const [hovering, setHovering] = useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);

  const ringX = useSpring(x, ringSpring);
  const ringY = useSpring(y, ringSpring);
  const dotX = useSpring(x, dotSpring);
  const dotY = useSpring(y, dotSpring);

  useEffect(() => {
    const onMove = (event: PointerEvent) => {
      x.set(event.clientX);
      y.set(event.clientY);

      const target = event.target as HTMLElement | null;
      const interactive = target?.closest("a, button, [data-cursor='hover']");
      setHovering(Boolean(interactive));
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, [x, y]);

  return (
    <>
      <motion.div
        aria-hidden
        className="gallery-cursor gallery-cursor-ring"
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{ scale: hovering ? 1.8 : 1, opacity: hovering ? 0.6 : 1 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      />
      <motion.div
        aria-hidden
        className="gallery-cursor gallery-cursor-dot"
        style={{
          x: dotX,
          y: dotY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{ scale: hovering ? 0 : 1 }}
        transition={{ duration: 0.2 }}
      />
    </>
  );
};
