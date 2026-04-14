import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQ } from "@/data/content";

export function FAQSection() {
  return (
    <section id="faq" className="snap-section sec-bg-cream">
      <div className="inner max-w-3xl">
        <p data-reveal className="section-label">{FAQ.label}</p>
        <h2 data-reveal data-reveal-delay="60">{FAQ.title}</h2>
        <div className="section-divider mb-10" />
        <div data-reveal data-reveal-delay="120" className="lg:overflow-y-auto lg:max-h-[calc(100dvh-12rem)] faq-scroll">
          <Accordion className="w-full space-y-3">
            {FAQ.items.map((item, i) => (
              <AccordionItem key={i} value={`faq-${i + 1}`} className="card py-0 px-6 border-none">
                <AccordionTrigger className="text-left font-bold text-navy text-base py-5 cursor-pointer">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 text-base pb-5 leading-relaxed">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
