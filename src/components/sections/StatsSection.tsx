import { STATS } from "@/data/content";

export function StatsSection() {
  return (
    <section id="stats" className="snap-section sec-bg text-center">
      <div className="inner">
        <h2 data-reveal>{STATS.title}</h2>
        <div className="section-divider bg-gold mx-auto mb-12" />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {STATS.items.map((s, i) => (
            <div key={s.label} data-reveal data-reveal-delay={160 + i * 100} className="flex flex-col items-center">
              <div className="text-5xl md:text-6xl font-extrabold text-gold leading-none mb-1">
                {s.n}
              </div>
              <div className="text-base font-bold mt-3 mb-1">{s.label}</div>
              <div className="text-xs text-gray-500">{s.caption}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
