import { Button } from "@/components/ui/button";
import { FINAL, GOOGLE_FORM_URL } from "@/data/content";

export function FinalSection() {
  return (
    <section id="cta" className="snap-section bg-navy text-white text-center">
      <div className="inner">
        <h2 data-reveal className="mb-6 leading-snug text-white">
          {FINAL.title.map((line, i) => (
            <span key={i}>{line}{i < FINAL.title.length - 1 && <br />}</span>
          ))}
        </h2>
        <p data-reveal data-reveal-delay="120" className="text-base md:text-lg text-gray-300 mb-10 leading-relaxed break-keep">
          {FINAL.description.map((line, i) => (
            <span key={i}>{line}{i < FINAL.description.length - 1 && <br />}</span>
          ))}
        </p>

        <div data-reveal data-reveal-delay="240" className="flex flex-col sm:flex-row justify-center gap-4">
          <Button size="lg" className="bg-gold hover:bg-gold-hover text-white h-14 w-56 text-lg font-bold" render={<a href={GOOGLE_FORM_URL} target="_blank" rel="noopener noreferrer" />} nativeButton={false}>
            {FINAL.cta.primary}
          </Button>
          <Button size="lg" className="bg-white hover:bg-gray-100 text-navy h-14 w-56 text-lg font-bold" render={<a href={GOOGLE_FORM_URL} target="_blank" rel="noopener noreferrer" />} nativeButton={false}>
            {FINAL.cta.secondary}
          </Button>
        </div>
      </div>
    </section>
  );
}
