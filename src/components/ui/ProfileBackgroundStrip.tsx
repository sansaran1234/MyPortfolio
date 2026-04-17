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
        "absolute inset-y-[-18%] right-[-8%] left-[52%] -z-10 overflow-hidden rounded-[3rem] border border-outline-variant/10 bg-surface-container-high/20 rotate-[10deg] lg:left-[-8%] lg:right-[52%] lg:-rotate-[10deg] max-[1024px]:left-[40%] max-[601px]:left-[45%] max-[426px]:top-[-23rem] max-[426px]:left-[35%]",
        className,
      )}
    >
      <div
        className={cn(
          "absolute inset-[8%] top-[-35rem] w-[62rem] -rotate-[10deg] scale-110 max-[1501px]:w-[55rem] max-[1251px]:w-[45rem] max-[1024px]:w-[35rem] max-[1024px]:left-[-3rem] max-[769px]:left-[-2rem] max-[601px]:left-[-6rem] lg:rotate-[10deg]",
          imageClassName,
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
      <div className="absolute inset-0 bg-linear-to-l from-background/20 via-background/55 to-background lg:bg-linear-to-r" />
      <div className="absolute inset-0 bg-linear-to-t from-background via-background/35 to-transparent" />
      <div className="absolute inset-0 bg-linear-to-r from-primary/8 via-transparent to-[#7aa2ff]/10 lg:bg-linear-to-l" />
    </div>
  );
};
