import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionIntroProps {
  title: ReactNode;
  description: ReactNode;
  className?: string;
  descriptionClassName?: string;
}

export const SectionIntro = ({
  title,
  description,
  className,
  descriptionClassName,
}: SectionIntroProps) => {
  return (
    <div className={cn("max-w-2xl flex flex-col gap-4", className)}>
      <h2 className="font-display text-4xl md:text-5xl font-black text-foreground tracking-tighter">
        {title}
      </h2>
      <p className={cn("font-body text-base text-outline leading-relaxed max-w-lg", descriptionClassName)}>
        {description}
      </p>
    </div>
  );
};
