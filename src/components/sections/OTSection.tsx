import { Button } from "@/components/ui/button";
import { OT, GOOGLE_FORM_URL } from "@/data/content";

export function OTSection() {
  return (
    <section id="ot" className="snap-section sec-bg">
      <div className="inner text-center">
        <div data-reveal>
          <span className="inline-block text-xs font-semibold tracking-widest text-gold uppercase mb-4">{OT.badge}</span>
        </div>
        <h2 data-reveal data-reveal-delay="80" className="mb-4">{OT.title}</h2>
        <p data-reveal data-reveal-delay="160" className="section-desc mx-auto">
          {OT.description.split("\n").map((line, i) => (
            <span key={i}>{line}{i < OT.description.split("\n").length - 1 && <><br className="hidden md:block" /></>}</span>
          ))}
        </p>

        <div data-reveal data-reveal-delay="240" className="flex flex-col gap-2 max-w-sm mx-auto mb-8">
          {OT.schedule.map((s) => (
            <div key={s.round} className="border border-gray-200 rounded-lg py-3 px-5 flex justify-between items-center bg-transparent">
              <span className="font-bold text-navy">{s.round}</span>
              <span className="text-gray-600 text-sm">{s.date}</span>
            </div>
          ))}
        </div>
        <p className="text-sm text-gray-400 mb-8">{OT.notice}</p>

        <p className="text-sm text-gold font-semibold mb-8 break-keep">
          {OT.earlyBird}
        </p>

        <div data-reveal data-reveal-delay="400" className="flex flex-col sm:flex-row justify-center gap-4">
          <Button size="lg" className="bg-navy hover:bg-[#0d2d4a] text-white h-14 px-10 font-semibold" render={<a href={GOOGLE_FORM_URL} target="_blank" rel="noopener noreferrer" />} nativeButton={false}>
            {OT.cta.primary}
          </Button>
          <Button size="lg" className="bg-gold hover:bg-gold-hover text-white h-14 px-10 font-semibold" render={<a href={GOOGLE_FORM_URL} target="_blank" rel="noopener noreferrer" />} nativeButton={false}>
            {OT.cta.secondary}
          </Button>
        </div>
      </div>
    </section>
  );
}
