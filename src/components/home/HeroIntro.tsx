"use client";

import { motion } from "motion/react";
import { heroLeadSlideReveal, heroSoftReveal } from "../../animations/common.animations";
import { Button } from "../ui/Button";
import { Badge } from "../ui/Badge";

export interface HeroIntroProps {
  badgeText?: string;
  name?: string;
  highlightName?: string;
  description?: string;
  descriptionHighlight?: string;
  ctaText?: string;
  ctaHref?: string;
  secondaryText?: string;
  secondaryHref?: string;
  className?: string;
}

export const HeroIntro = ({
  badgeText = "Welcome to My Portfolio // 2026",
  name = "SANSARAN",
  highlightName = "PHANCHAN",
  description = "I am a Software Architect specializing in high-performance distributed systems and premium front-end experiences. Building technical solutions that scale with zero compromise on elegance.",
  descriptionHighlight = "Software Architect",
  ctaText = "Experience",
  ctaHref = "#projects",
  secondaryText = "Send Message",
  secondaryHref = "mailto:sansaran.p10@gmail.com",
  className,
}: HeroIntroProps) => {
  const highlightDescription = description.replace(
    descriptionHighlight,
    `<span className="text-foreground font-bold">${descriptionHighlight}</span>`
  );

  return (
    <div className={className}>
      <motion.div className="relative flex flex-col gap-2 pt-6 md:pt-10" variants={heroLeadSlideReveal}>
        <Badge variant="outline" className="w-fit">{badgeText}</Badge>
        <h1 className="font-display text-6xl md:text-8xl font-black text-foreground leading-[0.9] tracking-tighter">
          {name} <br />
          <span className="text-primary italic">{highlightName}</span>
        </h1>
      </motion.div>

      <motion.p
        className="font-body text-lg md:text-xl text-outline max-w-2xl leading-relaxed"
        variants={heroSoftReveal.item}
        dangerouslySetInnerHTML={{ __html: highlightDescription }}
      />

      <motion.div className="flex flex-wrap gap-4 items-center" variants={heroSoftReveal.item}>
        <Button variant="primary" size="lg" onClick={() => { window.location.href = ctaHref; }}>{ctaText}</Button>
        <Button variant="secondary" size="lg" onClick={() => { window.location.href = secondaryHref; }}>
          {secondaryText}
        </Button>
      </motion.div>
    </div>
  );
};