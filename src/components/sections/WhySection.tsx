import { WHY } from "@/data/content";

export function WhySection() {
  return (
    <section id="why" className="snap-section sec-bg-alt">
      <div className="inner">
        <p data-reveal className="section-label">{WHY.label}</p>
        <h2 data-reveal data-reveal-delay="60" className="title-gold">{WHY.title}</h2>
        <div className="section-divider mb-6" />
        <p data-reveal data-reveal-delay="100" className="section-desc">{WHY.description}</p>

        <div className="grid md:grid-cols-3 gap-8">
          {WHY.cards.map((c, i) => (
            <div key={c.num} data-reveal data-reveal-delay={180 + i * 100} className="card card--lg card--gold-top">
              <p className="text-5xl font-extrabold text-gray-200 mb-4">{c.num}</p>
              <h3 className="text-lg font-bold mb-3">{c.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
