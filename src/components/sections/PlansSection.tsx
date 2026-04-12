import { CheckCircle2, XCircle } from "lucide-react";
import { PLANS } from "@/data/content";

export function PlansSection() {
  return (
    <section id="program" className="snap-section sec-bg-alt">
      <div className="inner">
        <p data-reveal className="section-label">{PLANS.label}</p>
        <h2 data-reveal data-reveal-delay="60">{PLANS.title}</h2>
        <div className="section-divider mb-10" />

        <div className="grid md:grid-cols-3 gap-8">
          {PLANS.items.map((plan, i) => (
            <div
              key={plan.name}
              data-reveal
              data-reveal-delay={140 + i * 110}
              className={`card card--lg ${plan.accent ? "card--gold-top relative overflow-visible" : "card--gray-top"}`}
            >
              {plan.badge && (
                <span className="inline-block bg-gold text-white text-xs font-bold px-3 py-1 rounded-full mb-4">{plan.badge}</span>
              )}
              <h3 className="text-xl font-bold mb-1 mt-2">
                {plan.name}
                {plan.nameTag && <span className="text-base font-normal text-gray-500"> {plan.nameTag}</span>}
              </h3>
              <p className="text-sm text-gray-500 mb-4">{plan.subtitle}</p>
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-3xl font-extrabold text-gold">{plan.price}</span>
                <span className="text-sm text-gray-400 line-through">{plan.originalPrice}</span>
              </div>
              <span className="inline-block text-xs text-gold border border-gold px-2 py-0.5 rounded mb-4">{plan.discount}</span>
              <hr className="border-gray-200 mb-4" />
              <div className="space-y-2 text-sm">
                {plan.features.map((f) =>
                  f.included ? (
                    <div key={f.text} className="flex items-center gap-2">
                      <CheckCircle2 className="text-gold w-4 h-4 shrink-0" />
                      {"bold" in f && f.bold ? <span className="font-semibold">{f.text}</span> : f.text}
                    </div>
                  ) : (
                    <div key={f.text} className="flex items-center gap-2 text-gray-300">
                      <XCircle className="w-4 h-4 shrink-0" /> {f.text}
                    </div>
                  )
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
