import { ATTENDANCE } from "@/data/content";

export function AttendanceSection() {
  return (
    <section id="attendance" className="snap-section sec-bg-cream">
      <div className="inner text-center">
        <h2 data-reveal className="mb-4">{ATTENDANCE.title}</h2>
        <p data-reveal data-reveal-delay="100" className="section-desc mx-auto">{ATTENDANCE.description}</p>

        <div className="grid md:grid-cols-3 gap-6">
          {ATTENDANCE.cards.map((c, i) => (
            <div key={c.title} data-reveal data-reveal-delay={180 + i * 100} className="card text-left">
              <h3 className="text-lg font-bold text-navy mb-3">{c.title}</h3>
              <p className="text-gray-600 leading-relaxed">
                {c.desc.split("\n").map((line, j) => (
                  <span key={j}>{line}{j < c.desc.split("\n").length - 1 && <br />}</span>
                ))}
              </p>
            </div>
          ))}
        </div>

        <p data-reveal data-reveal-delay="460" className="mt-12 text-lg text-navy/80 italic break-keep">
          &ldquo;{ATTENDANCE.quote}&rdquo;
        </p>
      </div>
    </section>
  );
}
