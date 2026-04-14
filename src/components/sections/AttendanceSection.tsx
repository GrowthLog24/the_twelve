import { ATTENDANCE } from "@/data/content";

export function AttendanceSection() {
  return (
    <section id="attendance" className="snap-section sec-bg">
      <div className="inner max-w-3xl text-center">
        <h2 data-reveal className="mb-3">{ATTENDANCE.title}</h2>
        <p data-reveal data-reveal-delay="100" className="text-gray-500 mb-10">{ATTENDANCE.description}</p>

        <div className="grid md:grid-cols-3 gap-4 mb-10">
          {ATTENDANCE.cards.map((c, i) => (
            <div key={c.title} data-reveal data-reveal-delay={180 + i * 100} className="border border-gray-200 rounded-xl p-5 text-left">
              <h3 className="text-base font-bold text-navy mb-2">{c.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {c.desc.split("\n").map((line, j) => (
                  <span key={j}>{line}{j < c.desc.split("\n").length - 1 && <br />}</span>
                ))}
              </p>
            </div>
          ))}
        </div>

        <p data-reveal data-reveal-delay="460" className="text-base text-navy font-medium italic break-keep">
          &ldquo;{ATTENDANCE.quote}&rdquo;
        </p>
      </div>
    </section>
  );
}
