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
  className?: string;
}

export const HeroInfoCards = ({ className }: HeroInfoCardsProps) => {
  return (
    <motion.div className={className} variants={heroSoftReveal.item}>
      <ExperienceCard
        jobTitle={"React / Next Frontend Developer"}
        experienceLabel={"Experience"}
        experienceValue={"6+ Years"}
        location={"Chiang mai, Thailand"}
      />
      <motion.div className="w-full lg:w-90" variants={heroSoftReveal.item}>
        <StatsPanel
          title="Global Stats"
          items={[
            { value: "2,059", label: "contributions in the last year" },
            { value: "124+", label: "Commits/Week" },
          ]}
          className="bg-surface-container/85 backdrop-blur-xs"
        />
      </motion.div>
    </motion.div>
  );
};
