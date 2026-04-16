"use client";

import { motion } from "motion/react";
import { heroSoftReveal } from "../../animations/common.animations";
import { StatsPanel } from "../ui/StatsPanel";

export interface StatsItem {
  value: string;
  label: string;
}

export interface HeroInfoCardsProps {
  jobTitle?: string;
  experienceLabel?: string;
  experienceValue?: string;
  location?: string;
  stats?: StatsItem[];
  className?: string;
}

export const HeroInfoCards = ({
  jobTitle = "React Frontend Developer",
  experienceLabel = "Experience",
  experienceValue = "6+ Years",
  location = "Chiang mai, Thailand",
  stats = [
    { value: "2,059", label: "contributions in the last year" },
    { value: "124+", label: "Commits/Week" },
  ],
  className,
}: HeroInfoCardsProps) => {
  return (
    <motion.div className={className} variants={heroSoftReveal.item}>
      <motion.div
        className="w-full lg:w-90 p-6 bg-surface-container/85 backdrop-blur-xs rounded-xl border border-outline-variant/10"
        variants={heroSoftReveal.item}
      >
        <div className="flex flex-col gap-1">
          <span className="font-bold text-foreground text-xl uppercase">{jobTitle}</span>
          <h3 className="font-technical text-[10px] uppercase font-black text-primary tracking-widest">{experienceLabel}</h3>
          <div className="grid grid-cols-[2fr_1fr] gap-4">
            <div className="flex flex-col">
              <span className="font-display text-2xl font-black">{experienceValue}</span>
              <span className="font-technical text-[8px] uppercase text-outline">{location}</span>
            </div>
          </div>
        </div>
      </motion.div>
      <motion.div className="w-full lg:w-90" variants={heroSoftReveal.item}>
        <StatsPanel title="Global Stats" items={stats} className="bg-surface-container/85 backdrop-blur-xs" />
      </motion.div>
    </motion.div>
  );
};