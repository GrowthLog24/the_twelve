import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { OT, GOOGLE_FORM_URL } from "@/data/content";

export function OTSection() {
  return (
    <section id="ot" className="snap-section sec-bg-alt">
      <div className="inner text-center">
        <div data-reveal>
          <Badge className="bg-gold text-white mb-4 border-none">{OT.badge}</Badge>
        </div>
        <h2 data-reveal data-reveal-delay="80" className="mb-4">{OT.title}</h2>
        <p data-reveal data-reveal-delay="160" className="section-desc text-center">
          {OT.description.split("\n").map((line, i) => (
            <span key={i}>{line}{i < OT.description.split("\n").length - 1 && <><br className="hidden md:block" /></>}</span>
          ))}
        </p>

        <div data-reveal data-reveal-delay="240" className="flex flex-col gap-3 max-w-sm mx-auto mb-6">
          {OT.schedule.map((s) => (
            <div key={s.round} className="bg-gray-100 p-3 rounded-lg flex justify-between items-center text-sm">
              <strong>{s.round}</strong> <span>{s.date}</span>
            </div>
          ))}
        </div>
        <p className="text-xs text-gray-400 mb-6">{OT.notice}</p>

        <p className="text-sm bg-gold/15 py-2 px-4 rounded-lg font-bold mb-6 inline-block break-keep">
          {OT.earlyBird}
        </p>

        <div data-reveal data-reveal-delay="400" className="flex flex-col sm:flex-row justify-center gap-3">
          <Button size="lg" className="bg-navy hover:bg-[#1a385b] text-white h-12 px-8" render={<a href={GOOGLE_FORM_URL} target="_blank" rel="noopener noreferrer" />} nativeButton={false}>
            {OT.cta.primary}
          </Button>
          <Button size="lg" className="bg-gold hover:bg-gold-hover text-white h-12 px-8" render={<a href={GOOGLE_FORM_URL} target="_blank" rel="noopener noreferrer" />} nativeButton={false}>
            {OT.cta.secondary}
          </Button>
        </div>
      </div>
    </section>
  );
}
