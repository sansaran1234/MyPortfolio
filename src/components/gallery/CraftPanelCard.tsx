import type { CraftPanel } from "./content";

export interface CraftPanelCardProps {
  panel: CraftPanel;
}

export const CraftPanelCard = ({ panel }: CraftPanelCardProps) => {
  return (
    <div className="relative flex w-screen shrink-0 flex-col justify-between border-t border-[var(--gallery-bg)]/15 px-6 py-24 md:h-screen md:w-[50vw] md:border-l md:border-t-0 md:px-16 md:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 overflow-hidden opacity-30"
      >
        <div className="absolute -right-16 top-1/4 h-72 w-72 rounded-full bg-[var(--gallery-quaternary)] blur-[100px]" />
        <div className="absolute -left-10 bottom-10 h-56 w-56 rounded-full bg-[var(--gallery-secondary)] blur-[100px]" />
      </div>

      <div className="relative flex items-baseline justify-between">
        <span className="font-gallery-display text-7xl font-medium text-[var(--gallery-bg)]/20 md:text-8xl">
          {panel.index}
        </span>
        <span className="font-gallery-body text-[10px] uppercase tracking-[0.3em] text-[var(--gallery-bg)]/50">
          Panel
        </span>
      </div>

      <div className="relative">
        <h3 className="font-gallery-lobster text-[clamp(2rem,5vw,4rem)] font-medium leading-[0.95] tracking-tight">
          {panel.title}
        </h3>
        <ul className="mt-8 flex flex-col gap-2">
          {panel.tools.map((tool) => (
            <li
              key={tool}
              className="font-gallery-body text-lg text-[var(--gallery-bg)]/70 md:text-xl"
            >
              {tool}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
