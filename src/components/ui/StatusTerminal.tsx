import React from "react";
import { cn } from "@/lib/utils";

interface StatusTerminalProps extends React.HTMLAttributes<HTMLDivElement> {
  status?: "online" | "offline" | "busy";
  label?: string;
  metadata?: string;
}

export const StatusTerminal = ({
  status = "online",
  label = "Available for work",
  metadata = "Last Commit: 2 hours ago",
  className,
  ...props
}: StatusTerminalProps) => {
  return (
    <div
      className={cn(
        "inline-flex flex-col gap-1 p-3 bg-surface-container-highest rounded-lg font-technical text-xs tracking-tight shadow-lg",
        className
      )}
      {...props}
    >
      <div className="flex items-center gap-2">
        <span
          className={cn(
            "w-2 h-2 rounded-full",
            status === "online" ? "bg-primary animate-pulse" : "bg-outline"
          )}
        />
        <span className="font-bold text-foreground text-xl uppercase">{label}</span>
      </div>
      <div className="text-outline-variant font-medium select-none truncate">
        {metadata}
      </div>
    </div>
  );
};
