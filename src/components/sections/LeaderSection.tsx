import { User, Check } from "lucide-react";
import { LEADER } from "@/data/content";

export function LeaderSection() {
  return (
    <section id="leader" className="snap-section sec-bg-dark">
      <div className="inner">
        <p data-reveal className="section-label">{LEADER.label}</p>
        <h2 data-reveal data-reveal-delay="60" className="text-white">
          {LEADER.title.map((line, i) => (
            <span key={i}>{line}{i < LEADER.title.length - 1 && <br />}</span>
          ))}
        </h2>
        <div className="section-divider mb-12" />

        <div className="flex flex-col lg:flex-row gap-12 items-start">
          <div data-reveal data-reveal-delay="120" className="lg:w-1/3 w-full shrink-0 text-center lg:text-left">
            <div className="w-36 h-36 mx-auto lg:mx-0 bg-white/5 rounded-2xl overflow-hidden flex items-center justify-center">
              <User className="w-16 h-16 text-gold/60" />
            </div>
            <h3 className="text-2xl font-bold text-white mt-5">{LEADER.profile.name}</h3>
            <p className="text-gold text-sm font-semibold mt-1">{LEADER.profile.role}</p>
            <p className="text-sm text-gray-400 mt-3 leading-relaxed">
              {LEADER.profile.education.split("\n").map((line, i) => (
                <span key={i}>{line}{i < LEADER.profile.education.split("\n").length - 1 && <br />}</span>
              ))}
            </p>
          </div>

          <div data-reveal data-reveal-delay="220" className="lg:w-2/3 w-full space-y-8">
            <div className="grid md:grid-cols-2 gap-4 text-gray-300">
              {LEADER.credentials.map((c) => (
                <div key={c} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-gold shrink-0 mt-0.5" strokeWidth={3} />
                  <span>{c}</span>
                </div>
              ))}
            </div>

            <div className="bg-white/5 p-6 lg:p-8 rounded-2xl mt-8">
              <p className="text-lg text-white/90 leading-relaxed break-keep italic">
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
