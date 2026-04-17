import { cn } from "@/lib/utils";

interface StatsPanelItem {
  value: string;
  label: string;
}

interface StatsPanelProps {
  title: string;
  items: StatsPanelItem[];
  className?: string;
}

export const StatsPanel = ({ title, items, className }: StatsPanelProps) => {
  return (
    <div
      className={cn(
        "w-full rounded-xl border border-outline-variant/10 bg-surface-container p-6",
        className,
      )}
    >
      <div className="flex flex-col gap-4">
        <h3 className="font-technical text-[10px] uppercase font-black text-primary tracking-widest">
          {title}
        </h3>
        <div
          className={cn(
            "grid gap-4",
            items.length === 2 ? "grid-cols-[2fr_1fr]" : "grid-cols-1",
          )}
        >
          {items.map((item) => (
            <div key={item.label} className="flex flex-col">
              <span className="font-display text-2xl font-black">
                {item.value}
              </span>
              <span className="font-technical text-[8px] uppercase text-outline">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
