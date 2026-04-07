"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";

interface ProfileBackgroundStripProps {
  src: string;
  alt: string;
  className?: string;
  imageClassName?: string;
}

export const ProfileBackgroundStrip = ({
  src,
  alt,
  className,
  imageClassName,
}: ProfileBackgroundStripProps) => {
  return (
    <div
      className={cn(
        "absolute inset-y-[-18%] left-[-8%] right-[52%] -z-10 overflow-hidden rounded-[3rem] border border-outline-variant/10 bg-surface-container-high/20 -rotate-[10deg] max-[1024px]:right-[42%]",
        className
      )}
    >
      <div
        className={cn(
          "absolute inset-[8%] top-[-35rem] w-[62rem] rotate-[10deg] scale-110 max-[1501px]:w-[55rem] max-[1251px]:w-[45rem]",
          imageClassName
        )}
      >
        <Image
          src={src}
          alt={alt}
          fill
          priority
          className="object-cover object-center opacity-45"
        />
      </div>
      <div className="absolute inset-0 bg-linear-to-r from-background/20 via-background/55 to-background" />
      <div className="absolute inset-0 bg-linear-to-t from-background via-background/35 to-transparent" />
      <div className="absolute inset-0 bg-linear-to-l from-primary/8 via-transparent to-[#7aa2ff]/10" />
    </div>
  );
};
