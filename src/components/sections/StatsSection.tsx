import { STATS } from "@/data/content";
import { renderTitle } from "@/utils/renderTitle";

export function StatsSection() {
  return (
    <section id="stats" className="snap-section sec-bg-cream text-center">
      <div className="inner">
        <h2 data-reveal>{renderTitle(STATS.title)}</h2>
        <div className="section-divider mx-auto mb-16" />

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {STATS.items.map((s, i) => (
            <div key={s.label} data-reveal data-reveal-delay={160 + i * 100} className="flex flex-col items-center">
              <div className="text-5xl md:text-7xl font-extrabold text-gold leading-none tracking-tight">
                {s.n}
              </div>
              <div className="text-lg font-bold text-navy mt-4 mb-1">{s.label}</div>
              <div className="text-sm text-gray-500">{s.caption}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
