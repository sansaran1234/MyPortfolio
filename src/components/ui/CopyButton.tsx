"use client";

import { useEffect, useState } from "react";
import type { HTMLMotionProps } from "motion/react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

interface CopyButtonProps extends HTMLMotionProps<"button"> {
  content: string;
  copied?: boolean;
  onCopiedChange?: (copied: boolean, content?: string) => void;
  delay?: number;
  variant?:
    | "default"
    | "accent"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link";
  size?: "default" | "sm" | "lg" | "icon";
  hoverScale?: number;
  tapScale?: number;
}

export const CopyButton = ({
  content,
  copied,
  onCopiedChange,
  delay = 3000,
  variant = "ghost",
  size = "sm",
  hoverScale = 1.05,
  tapScale = 0.95,
  className,
  children,
  onClick,
  type = "button",
  ...props
}: CopyButtonProps) => {
  const [internalCopied, setInternalCopied] = useState(false);
  const isControlled = copied !== undefined;
  const isCopied = isControlled ? copied : internalCopied;

  useEffect(() => {
    if (!isCopied) {
      return;
    }

    const timeoutId = window.setTimeout(() => {
      if (!isControlled) {
        setInternalCopied(false);
      }

      onCopiedChange?.(false, content);
    }, delay);

    return () => window.clearTimeout(timeoutId);
  }, [content, delay, isControlled, isCopied, onCopiedChange]);

  const handleClick: HTMLMotionProps<"button">["onClick"] = async (event) => {
    try {
      await navigator.clipboard.writeText(content);

      if (!isControlled) {
        setInternalCopied(true);
      }

      onCopiedChange?.(true, content);
    } catch {
      window.prompt("Copy to clipboard:", content);
    }

    onClick?.(event);
  };

  const variants = {
    default:
      "bg-surface-container-highest text-foreground border border-outline-variant/15 hover:bg-surface-container-highest/80",
    accent:
      "bg-linear-to-br from-primary to-primary-container text-on-primary hover:opacity-90",
    destructive:
      "bg-red-500/15 text-red-200 border border-red-400/20 hover:bg-red-500/25",
    outline:
      "border border-outline-variant/20 text-foreground hover:text-primary hover:border-primary/30",
    secondary:
      "bg-surface-container text-foreground border border-outline-variant/15 hover:bg-surface-container-high/80",
    ghost: "text-outline hover:text-primary",
    link: "text-primary underline underline-offset-4",
  };

  const sizes = {
    default: "px-3 py-2 text-xs",
    sm: "px-2 py-1 text-[9px]",
    lg: "px-4 py-2 text-sm",
    icon: "size-9",
  };

  return (
    <motion.button
      type={type}
      whileHover={{ scale: hoverScale }}
      whileTap={{ scale: tapScale }}
      className={cn(
        "inline-flex cursor-pointer items-center justify-center rounded-lg font-technical uppercase tracking-[0.2em] transition-colors duration-200 outline-hidden focus-visible:ring-2 focus-visible:ring-primary/50",
        variants[variant],
        sizes[size],
        className,
      )}
      onClick={handleClick}
      {...props}
    >
      {children ?? (isCopied ? "Copied" : "Copy")}
    </motion.button>
  );
};
