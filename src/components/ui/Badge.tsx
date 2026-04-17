import React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "outline" | "filled" | "soft";
}

export const Badge = ({
  children,
  className,
  variant = "outline",
  ...props
}: BadgeProps) => {
  const variants = {
    outline: "border border-outline-variant/30 text-outline",
    filled: "bg-primary text-on-primary",
    soft: "bg-surface-container-highest text-foreground",
  };

  return (
    <span
      className={cn(
        "px-2 py-0.5 rounded-xs text-[10px] font-technical font-bold uppercase tracking-widest",
        variants[variant],
        className,
      )}
      {...props}
    >
      {children}
    </span>
  );
};
