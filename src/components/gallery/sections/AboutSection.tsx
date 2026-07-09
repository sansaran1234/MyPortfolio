"use client";

import {
  ARTIST_AVAILABILITY,
  ARTIST_PHILOSOPHY,
  ARTIST_PROFILE,
} from "../content";
import { FadeIn, LinesReveal, WordReveal } from "../Reveal";

export const AboutSection = () => {
  return (
    <section
      id="personal-information"
      aria-label="Personal information"
      className="relative border-t border-[var(--gallery-line)] px-6 py-32 md:px-12 md:py-44"
    >
      <div className="mx-auto max-w-[1600px]">
        <div className="flex items-baseline justify-between">
          <span className="font-gallery-body text-[11px] uppercase tracking-[0.3em] text-[var(--gallery-subtext)]">
            Personal
          </span>
          <span className="font-gallery-body text-[11px] uppercase tracking-[0.3em] text-[var(--gallery-subtext)]">
            Profile
          </span>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-16 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <h2 className="font-gallery-script text-[clamp(2.5rem,7vw,6rem)] font-normal leading-[0.95] tracking-tight text-[var(--gallery-text)]">
              <LinesReveal lines={["The maker", "behind the", "interface."]} />
            </h2>

            <FadeIn delay={0.2} className="mt-12 max-w-md">
              <p className="font-gallery-body text-base leading-relaxed text-[var(--gallery-subtext)] md:text-lg">
                <WordReveal text="A frontend engineer shaped by discipline, consistency, and a long-term commitment to craft — building digital experiences where design and performance are inseparable." />
              </p>
            </FadeIn>

            <div className="mt-14">
              <span className="font-gallery-body text-[11px] uppercase tracking-[0.3em] text-[var(--gallery-subtext)]">
                Personal Philosophy
              </span>
              <div className="mt-5 flex flex-wrap gap-x-8 gap-y-2">
                {ARTIST_PHILOSOPHY.map((word, index) => (
                  <FadeIn key={word} delay={0.1 * index}>
                    <span className="font-gallery-display text-2xl font-medium text-[var(--gallery-text)] md:text-3xl">
                      {word}
                    </span>
                  </FadeIn>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:pt-4">
            <dl className="divide-y divide-[var(--gallery-line)] border-y border-[var(--gallery-line)]">
              {ARTIST_PROFILE.map((item) => (
                <FadeIn key={item.label}>
                  <div className="flex items-baseline justify-between gap-8 py-5">
                    <dt className="font-gallery-body text-[11px] uppercase tracking-[0.25em] text-[var(--gallery-subtext)]">
                      {item.label}
                    </dt>
                    <dd className="text-right font-gallery-display text-lg text-[var(--gallery-text)] md:text-xl">
                      {item.value}
                    </dd>
                  </div>
                </FadeIn>
              ))}
              <FadeIn>
                <div className="flex items-start justify-between gap-8 py-5">
                  <dt className="font-gallery-body text-[11px] uppercase tracking-[0.25em] text-[var(--gallery-subtext)]">
                    Availability
                  </dt>
                  <dd className="flex flex-col items-end gap-1">
                    {ARTIST_AVAILABILITY.map((item) => (
                      <span
                        key={item}
                        className="font-gallery-display text-lg text-[var(--gallery-text)] md:text-xl"
                      >
                        {item}
                      </span>
                    ))}
                  </dd>
                </div>
              </FadeIn>
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
};
