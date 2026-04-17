"use client";

import { motion } from "motion/react";
import { heroSoftReveal } from "../../animations/common.animations";

export interface ExperienceCardProps {
  jobTitle?: string;
  experienceLabel?: string;
  experienceValue?: string;
  location?: string;
  className?: string;
}

export const ExperienceCard = ({
  jobTitle = "React / Next Frontend Developer",
  experienceLabel = "Experience",
  experienceValue = "6+ Years",
  location = "Chiang mai, Thailand",
  className,
}: ExperienceCardProps) => {
  return (
    <motion.div
      className={className}
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
  );
};