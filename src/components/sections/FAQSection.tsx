import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQ } from "@/data/content";

export function FAQSection() {
  return (
    <section id="faq" className="snap-section sec-bg">
      <div className="inner max-w-2xl">
        <p data-reveal className="section-label">{FAQ.label}</p>
        <h2 data-reveal data-reveal-delay="60">{FAQ.title}</h2>
        <div className="section-divider mb-10" />
        <div data-reveal data-reveal-delay="120">
          <Accordion className="w-full">
            {FAQ.items.map((item, i) => (
              <AccordionItem key={i} value={`faq-${i + 1}`} className="border-b border-gray-200">
                <AccordionTrigger className="text-left font-semibold text-navy text-sm py-4 cursor-pointer hover:no-underline">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 text-sm pb-4 leading-relaxed">
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
