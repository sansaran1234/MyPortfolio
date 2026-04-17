"use client";

import { Badge } from "../ui/Badge";
import { Marquee } from "../ui/Marquee";

interface TechStackMarqueeCardProps {
  category: string;
  tools: string[];
  duration: number;
  reverse?: boolean;
}

export const TechStackMarqueeCard = ({
  category,
  tools,
  duration,
  reverse = false,
}: TechStackMarqueeCardProps) => {
  return (
    <div className="relative flex flex-col gap-4 rounded-2xl border border-outline-variant/10 bg-surface-container/60 p-5 overflow-hidden">
      <div className="flex items-center justify-start gap-4">
        <span className="ml-4 font-technical text-[10px] uppercase font-black text-primary tracking-[0.24em]">
          {category}
        </span>
      </div>
      <Marquee
        reverse={reverse}
        pauseOnHover
        duration={duration}
        className="py-1 w-full"
      >
        {tools.map((tool) => (
          <Badge
            key={`${category}-${tool}`}
            variant="soft"
            className="shrink-0 px-4 py-2 text-[10px] border border-outline-variant/10 bg-surface-container-high"
          >
            {tool}
          </Badge>
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-linear-to-r from-surface-container to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-linear-to-l from-surface-container to-transparent" />
    </div>
  );
};
