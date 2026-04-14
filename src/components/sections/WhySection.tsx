import { WHY } from "@/data/content";
import { renderTitle } from "@/utils/renderTitle";

export function WhySection() {
  return (
    <section id="why" className="snap-section sec-bg">
      <div className="inner">
        <p data-reveal className="section-label">{WHY.label}</p>
        <h2 data-reveal data-reveal-delay="60">{renderTitle(WHY.title)}</h2>
        <div className="section-divider mb-4" />
        <p data-reveal data-reveal-delay="100" className="section-desc">{WHY.description}</p>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {WHY.cards.map((c, i) => (
            <div key={c.num} data-reveal data-reveal-delay={180 + i * 100} className="card card--lg">
              <span className="text-6xl font-extrabold text-gold/20 block mb-6">{c.num}</span>
              <h3 className="text-xl font-bold text-navy mb-3">{c.title}</h3>
              <p className="text-gray-600 leading-relaxed">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
