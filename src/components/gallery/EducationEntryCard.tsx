import type { EducationEntry } from "./content";
import { FadeIn } from "./Reveal";

export interface EducationEntryCardProps {
  entry: EducationEntry;
}

export const EducationEntryCard = ({ entry }: EducationEntryCardProps) => {
  return (
    <FadeIn>
      <div className="grid grid-cols-1 gap-4 border-t border-[var(--gallery-line)] py-10 md:grid-cols-[1fr_auto] md:gap-12">
        <div>
          <h3 className="font-gallery-bodoni text-2xl font-medium text-[var(--gallery-text)] md:text-3xl">
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
  );
};
