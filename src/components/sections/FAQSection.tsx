import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQ } from "@/data/content";

export function FAQSection() {
  return (
    <section id="faq" className="snap-section sec-bg-alt">
      <div className="inner">
        <p data-reveal className="section-label">{FAQ.label}</p>
        <h2 data-reveal data-reveal-delay="60">{FAQ.title}</h2>
        <div className="section-divider mb-8" />
        <div data-reveal data-reveal-delay="120" className="lg:overflow-y-auto lg:max-h-[calc(100dvh-12rem)] faq-scroll">
          <Accordion className="w-full">
            {FAQ.items.map((item, i) => (
              <AccordionItem key={i} value={`faq-${i + 1}`}>
                <AccordionTrigger className="text-left font-bold text-navy text-base py-3 cursor-pointer">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 text-base pb-6 pl-4 pt-2">
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
