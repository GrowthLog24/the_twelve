import { Check, X } from "lucide-react";
import { PLANS } from "@/data/content";

export function PlansSection() {
  return (
    <section id="program" className="snap-section sec-bg-dark">
      <div className="inner">
        <p data-reveal className="section-label text-center">{PLANS.label}</p>
        <h2 data-reveal data-reveal-delay="60" className="text-white text-center">{PLANS.title}</h2>
        <div className="section-divider mx-auto mb-12" />

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {PLANS.items.map((plan, i) => (
            <div
              key={plan.name}
              data-reveal
              data-reveal-delay={140 + i * 110}
              className={`card card--lg ${plan.accent ? "bg-white" : "card--dark"}`}
            >
              {plan.badge && (
                <span className="inline-block bg-gold text-white text-xs font-semibold px-4 py-1.5 rounded-full mb-5">{plan.badge}</span>
              )}
              <h3 className={`text-xl font-bold mb-1 ${plan.accent ? "text-navy" : "text-white"}`}>
                {plan.name}
                {plan.nameTag && <span className={`text-base font-normal ${plan.accent ? "text-gray-500" : "text-gray-400"}`}> {plan.nameTag}</span>}
              </h3>
              <p className={`text-sm mb-5 ${plan.accent ? "text-gray-500" : "text-gray-400"}`}>{plan.subtitle}</p>
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-3xl font-extrabold text-gold">{plan.price}</span>
                <span className={`text-sm line-through ${plan.accent ? "text-gray-400" : "text-gray-500"}`}>{plan.originalPrice}</span>
              </div>
              <span className="inline-block text-xs text-gold bg-gold/10 px-3 py-1 rounded-full mb-6">{plan.discount}</span>
              <div className={`border-t ${plan.accent ? "border-gray-100" : "border-white/10"} pt-5`}>
                <div className="space-y-3 text-sm">
                  {plan.features.map((f) =>
                    f.included ? (
                      <div key={f.text} className={`flex items-center gap-3 ${plan.accent ? "" : "text-gray-300"}`}>
                        <span className="w-5 h-5 shrink-0 rounded-full border-2 border-gold flex items-center justify-center">
                          <Check className="text-gold w-3 h-3" strokeWidth={3} />
                        </span>
                        {"bold" in f && f.bold ? <span className="font-semibold">{f.text}</span> : f.text}
                      </div>
                    ) : (
                      <div key={f.text} className={`flex items-center gap-3 ${plan.accent ? "text-gray-400" : "text-gray-500"}`}>
                        <span className={`w-5 h-5 shrink-0 rounded-full border-2 ${plan.accent ? "border-gray-300" : "border-gray-500"} flex items-center justify-center`}>
                          <X className={`w-3 h-3 ${plan.accent ? "text-gray-300" : "text-gray-500"}`} strokeWidth={2} />
                        </span>
                        {f.text}
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
