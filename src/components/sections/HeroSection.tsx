import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import { CountdownTimer } from "@/components/CountdownTimer";

const GOOGLE_FORM_URL = "https://forms.gle/6emzu92WCEXXiAiz5";

export function HeroSection() {
  return (
    <section id="hero" className="snap-section-hero relative overflow-hidden">
      <img src="/hero-bg.jpg" alt="더트웰브 부동산 스터디 메인 이미지" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-black/50" />

      <div className="inner relative z-10 text-center pt-[calc(5rem+4rem+10px)] pb-[calc(5rem+10px)]">
        <div className="hero-item" style={{ animationDelay: "0ms" }}>
          <div className="inline-block mb-6 px-10 py-1.5 rounded-[10px] text-xs font-semibold tracking-[0.2em] uppercase text-gold border border-gold/50 bg-gold/10 backdrop-blur-sm">
            THE 12 1기 모집중
          </div>
        </div>
        <h1 className="hero-item text-white" style={{ animationDelay: "100ms" }}>
          당신의 인생에 부동산이라는<br />무기를 장착하십시오.
        </h1>
        <p className="hero-item text-xl md:text-2xl text-white font-bold mb-4 break-keep" style={{ animationDelay: "200ms" }}>
          수강생이 아닌, 미래의 협력 파트너를 찾습니다.
        </p>
        <p className="hero-item text-base md:text-lg mb-8 break-keep" style={{ animationDelay: "280ms" }}>
          <span className="text-gold font-semibold">THE 12 — 우리는 단순한 합격 스터디가 아닙니다.</span><br />
          <span className="text-gray-200">대한민국 부동산 네트워크의 새로운 에너지가 될 것입니다.</span>
        </p>

        <div className="hero-item flex flex-col sm:flex-row justify-center gap-3 mb-8 text-sm text-gray-300" style={{ animationDelay: "360ms" }}>
          <span className="flex items-center justify-center gap-1.5"><CheckCircle2 className="text-gold w-4 h-4" /> 17년차 전문가 직접 운영</span>
          <span className="flex items-center justify-center gap-1.5"><CheckCircle2 className="text-gold w-4 h-4" /> 강남역 17층 지정석</span>
          <span className="flex items-center justify-center gap-1.5"><CheckCircle2 className="text-gold w-4 h-4" /> 합격 후 실무 교육 연계</span>
        </div>

        <div className="hero-item" style={{ animationDelay: "440ms" }}>
          <CountdownTimer />
        </div>

        <div className="hero-item flex flex-col sm:flex-row gap-4 justify-center mt-6" style={{ animationDelay: "540ms" }}>
          <Button size="lg" className="bg-gold hover:bg-gold-hover text-white font-bold text-lg h-14 px-8" render={<a href={GOOGLE_FORM_URL} target="_blank" rel="noopener noreferrer" />} nativeButton={false}>
            수퍼 얼리버드 신청하기
          </Button>
          <Button size="lg" className="bg-white hover:bg-gray-100 text-navy font-bold text-lg h-14 px-8" render={<a href={GOOGLE_FORM_URL} target="_blank" rel="noopener noreferrer" />} nativeButton={false}>
            무료 OT 참석하기
          </Button>
        </div>
      </div>
    </section>
  );
}
