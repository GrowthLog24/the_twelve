import { Users, CheckCircle2 } from "lucide-react";
import { LEADER } from "@/data/content";

export function LeaderSection() {
  return (
    <section id="leader" className="snap-section sec-bg-alt">
      <div className="inner">
        <p data-reveal className="section-label">{LEADER.label}</p>
        <h2 data-reveal data-reveal-delay="60">
          {LEADER.title.map((line, i) => (
            <span key={i}>{line}{i < LEADER.title.length - 1 && <br />}</span>
          ))}
        </h2>
        <div className="section-divider mb-10" />

        <div className="flex flex-col md:flex-row gap-8 items-start">
          <div data-reveal data-reveal-delay="120" className="md:w-1/4 w-full shrink-0 text-center">
            <div className="w-32 h-32 mx-auto bg-gray-200 rounded-full overflow-hidden flex items-center justify-center">
              <Users className="w-12 h-12 text-gray-400" />
            </div>
            <h3 className="text-xl font-bold mt-3">{LEADER.profile.name}</h3>
            <p className="text-gold text-sm font-semibold">{LEADER.profile.role}</p>
            <p className="text-xs text-gray-500 mt-1">
              {LEADER.profile.education.split("\n").map((line, i) => (
                <span key={i}>{line}{i < LEADER.profile.education.split("\n").length - 1 && <br />}</span>
              ))}
            </p>
          </div>

          <div data-reveal data-reveal-delay="220" className="md:w-3/4 w-full space-y-4">
            <div className="grid md:grid-cols-2 gap-2 text-sm text-gray-600">
              {LEADER.credentials.map((c) => (
                <div key={c} className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-gold shrink-0 mt-0.5" /> {c}
                </div>
              ))}
            </div>

            <div className="bg-white p-5 rounded-xl border-l-4 border-gold mt-16">
              <p className="text-sm font-medium leading-relaxed break-keep">
                &ldquo;{LEADER.quote.map((line, i) => (
                  <span key={i}>{line}{i < LEADER.quote.length - 1 && <br />}</span>
                ))}&rdquo;
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
