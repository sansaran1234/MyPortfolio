import React from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", ...props }, ref) => {
    const variants = {
      primary: "bg-linear-to-br from-primary to-primary-container text-on-primary hover:opacity-90 active:scale-95",
      secondary: "bg-surface-container-highest text-foreground border border-outline-variant/15 hover:bg-surface-container-highest/80",
      ghost: "bg-transparent text-primary hover:underline",
    };

    const sizes = {
      sm: "px-3 py-1.5 text-xs",
      md: "px-6 py-3 text-sm",
      lg: "px-8 py-4 text-base",
    };

    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex cursor-pointer items-center justify-center rounded-lg font-medium transition-all duration-200 outline-hidden focus-visible:ring-2 focus-visible:ring-primary/50",
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";
