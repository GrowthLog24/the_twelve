import { ATTENDANCE } from "@/data/content";

export function AttendanceSection() {
  return (
    <section id="attendance" className="snap-section sec-bg-alt">
      <div className="inner text-center">
        <h2 data-reveal className="mb-4">{ATTENDANCE.title}</h2>
        <p data-reveal data-reveal-delay="100" className="section-desc text-center">{ATTENDANCE.description}</p>

        <div className="grid md:grid-cols-3 gap-4">
          {ATTENDANCE.cards.map((c, i) => (
            <div key={c.title} data-reveal data-reveal-delay={180 + i * 100} className="card bg-gradient-to-br from-white to-gold/5 border border-gold/30 shadow-[0_2px_16px_rgba(212,175,119,0.15)] border-l-[3px] border-l-gold">
              <h3 className="text-lg font-bold text-gold mb-2">{c.title}</h3>
              <p className="text-gray-600 text-sm">
                {c.desc.split("\n").map((line, j) => (
                  <span key={j}>{line}{j < c.desc.split("\n").length - 1 && <br />}</span>
                ))}
              </p>
            </div>
          ))}
        </div>

        <p data-reveal data-reveal-delay="460" className="mt-8 text-base font-bold bg-gradient-to-br from-white to-gold/5 py-3 px-6 rounded-lg inline-block border border-gold/30 shadow-[0_2px_16px_rgba(212,175,119,0.15)] break-keep">
          &ldquo;{ATTENDANCE.quote}&rdquo;
        </p>
      </div>
    </section>
  );
}
