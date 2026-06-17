"use client";

import { SmoothScrollProvider } from "./SmoothScrollProvider";
import { CustomCursor } from "./CustomCursor";
import { GrainOverlay } from "./GrainOverlay";
import { GalleryNav } from "./GalleryNav";
import { HeroSection } from "./sections/HeroSection";
import { AboutSection } from "./sections/AboutSection";
import { CraftSection } from "./sections/CraftSection";
import { ExhibitionsSection } from "./sections/ExhibitionsSection";
import { MetricsSection } from "./sections/MetricsSection";
import { EducationSection } from "./sections/EducationSection";
import { PhilosophySection } from "./sections/PhilosophySection";
import { ContactSection } from "./sections/ContactSection";

export const GalleryExperience = () => {
  return (
    <SmoothScrollProvider>
      <GrainOverlay />
      <CustomCursor />
      <GalleryNav />

      <main className="gallery-root relative w-full overflow-x-clip">
        <HeroSection />
        <AboutSection />
        <EducationSection />
        <CraftSection />
        <ExhibitionsSection />
        <MetricsSection />
        <PhilosophySection />
        <ContactSection />
      </main>
    </SmoothScrollProvider>
  );
};
