"use client";

import { motion } from "motion/react";
import { heroSoftReveal } from "../../animations/common.animations";
import { StatsPanel } from "../ui/StatsPanel";
import { ExperienceCard } from "./ExperienceCard";

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
  jobTitle = "React / Next Frontend Developer",
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
      <ExperienceCard
        className="w-full lg:w-90 p-6 bg-surface-container/85 backdrop-blur-xs rounded-xl border border-outline-variant/10"
        jobTitle={jobTitle}
        experienceLabel={experienceLabel}
        experienceValue={experienceValue}
        location={location}
      />
      <motion.div className="w-full lg:w-90" variants={heroSoftReveal.item}>
        <StatsPanel
          title="Global Stats"
          items={stats}
          className="bg-surface-container/85 backdrop-blur-xs"
        />
      </motion.div>
    </motion.div>
  );
};
