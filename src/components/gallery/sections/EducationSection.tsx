"use client";

import { EDUCATION_ENTRIES } from "../content";
import { FadeIn, LinesReveal } from "../Reveal";

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
            <h2 className="mt-6 font-gallery-display text-[clamp(2.5rem,6vw,5rem)] font-medium leading-[0.95] tracking-tight text-[var(--gallery-text)]">
              <LinesReveal lines={["Education"]} />
            </h2>
          </div>

          <div className="flex flex-col">
            {EDUCATION_ENTRIES.map((entry) => (
              <FadeIn key={entry.degree}>
                <div className="grid grid-cols-1 gap-4 border-t border-[var(--gallery-line)] py-10 md:grid-cols-[1fr_auto] md:gap-12">
                  <div>
                    <h3 className="font-gallery-display text-2xl font-medium text-[var(--gallery-text)] md:text-3xl">
                      {entry.degree}
                    </h3>
                    <p className="mt-3 font-gallery-body text-base text-[var(--gallery-subtext)]">
                      {entry.institution}
                    </p>
                    <p className="font-gallery-body text-base text-[var(--gallery-subtext)]">
                      {entry.field}
                    </p>
                  </div>
                  <span className="font-gallery-body text-[11px] uppercase tracking-[0.25em] text-[var(--gallery-subtext)] md:text-right">
                    {entry.meta}
                  </span>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
