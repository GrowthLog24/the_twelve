import Image from "next/image";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import { CountdownTimer } from "@/components/CountdownTimer";
import { HERO, GOOGLE_FORM_URL } from "@/data/content";

export function HeroSection() {
  return (
    <section id="hero" className="snap-section-hero relative overflow-hidden">
      <Image src="/hero-bg.jpg" alt="더트웰브 부동산 스터디 메인 이미지" fill className="object-cover" priority />
      <div className="absolute inset-0 bg-black/50" />

      <div className="inner relative z-10 text-center pt-[calc(5rem+4rem+10px)] pb-[calc(5rem+10px)]">
        <div className="hero-item" style={{ animationDelay: "0ms" }}>
          <div className="inline-block mb-6 px-10 py-1.5 rounded-[10px] text-xs font-semibold tracking-[0.2em] uppercase text-gold border border-gold/50 bg-gold/10 backdrop-blur-sm">
            {HERO.badge}
          </div>
        </div>
        <h1 className="hero-item text-white" style={{ animationDelay: "100ms" }}>
          {HERO.title.map((line, i) => (
            <span key={i}>{line}{i < HERO.title.length - 1 && <br />}</span>
          ))}
        </h1>
        <p className="hero-item text-xl md:text-2xl text-white font-bold mb-4 break-keep" style={{ animationDelay: "200ms" }}>
          {HERO.subtitle}
        </p>
        <p className="hero-item text-base md:text-lg mb-8 break-keep" style={{ animationDelay: "280ms" }}>
          <span className="text-gold font-semibold">{HERO.description.gold}</span><br />
          <span className="text-gray-200">{HERO.description.light}</span>
        </p>

        <div className="hero-item flex flex-col sm:flex-row justify-center gap-3 mb-8 text-sm text-gray-300" style={{ animationDelay: "360ms" }}>
          {HERO.features.map((f) => (
            <span key={f} className="flex items-center justify-center gap-1.5">
              <CheckCircle2 className="text-gold w-4 h-4" /> {f}
            </span>
          ))}
        </div>

        <div className="hero-item" style={{ animationDelay: "440ms" }}>
          <CountdownTimer />
        </div>

        <div className="hero-item flex flex-col sm:flex-row gap-4 justify-center mt-6" style={{ animationDelay: "540ms" }}>
          <Button size="lg" className="bg-gold hover:bg-gold-hover text-white font-bold text-lg h-14 px-8" render={<a href={GOOGLE_FORM_URL} target="_blank" rel="noopener noreferrer" />} nativeButton={false}>
            {HERO.cta.primary}
          </Button>
          <Button size="lg" className="bg-white hover:bg-gray-100 text-navy font-bold text-lg h-14 px-8" render={<a href={GOOGLE_FORM_URL} target="_blank" rel="noopener noreferrer" />} nativeButton={false}>
            {HERO.cta.secondary}
          </Button>
        </div>
      </div>
    </section>
  );
}
