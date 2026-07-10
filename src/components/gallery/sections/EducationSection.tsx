"use client";

import { EDUCATION_ENTRIES } from "../content";
import { EducationEntryCard } from "../EducationEntryCard";
import { LinesReveal } from "../Reveal";

export const EducationSection = () => {
  return (
    <section
      id="education"
      aria-label="Education"
      className="relative border-t border-[var(--gallery-line)] px-6 py-32 md:px-12 md:py-44"
    >
      <div className="mx-auto max-w-[1600px]">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <span className="font-gallery-body text-[11px] uppercase tracking-[0.3em] text-[var(--gallery-subtext)]">
              Education
            </span>
            <h2 className="mt-6 font-gallery-bodoni text-[clamp(2.5rem,6vw,5rem)] font-medium leading-[0.95] tracking-tight text-[var(--gallery-text)]">
              <LinesReveal lines={["Education"]} />
            </h2>
          </div>

          <div className="flex flex-col">
            {EDUCATION_ENTRIES.map((entry) => (
              <EducationEntryCard key={entry.degree} entry={entry} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
