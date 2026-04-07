import React from "react";
import { cn } from "@/lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "low" | "medium" | "high";
  interactive?: boolean;
}

export const Card = ({
  className,
  variant = "low",
  interactive = false,
  ...props
}: CardProps) => {
  const variants = {
    low: "bg-surface-container-low",
    medium: "bg-surface-container",
    high: "bg-surface-container-high",
  };

  return (
    <div
      className={cn(
        "rounded-xl transition-all duration-300 overflow-hidden",
        variants[variant],
        interactive && "hover:bg-surface-container-high cursor-pointer group",
        className
      )}
      {...props}
    />
  );
};
