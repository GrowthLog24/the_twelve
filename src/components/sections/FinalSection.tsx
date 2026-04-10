import { Button } from "@/components/ui/button";

const GOOGLE_FORM_URL = "https://forms.gle/6emzu92WCEXXiAiz5";

export function FinalSection() {
  return (
    <section id="cta" className="snap-section bg-[#0A2540] text-white text-center">
      <div className="inner">
        <h2 data-reveal className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-snug break-keep">
          부동산 네트워크의 새로운 에너지,<br />더트웰브와 함께 시작하세요.
        </h2>
        <p data-reveal data-reveal-delay="120" className="text-base md:text-lg text-gray-300 mb-10 leading-relaxed break-keep">
          2026년 10월 시험까지 6개월.<br />
          각자의 전문성을 가진 사람들이 부동산이라는 공통 언어로 모여,<br className="hidden md:block" />
          서로의 평생 파트너가 되는 여정입니다.
        </p>

        <div data-reveal data-reveal-delay="240" className="flex flex-col sm:flex-row justify-center gap-4">
          <Button size="lg" className="bg-[#D4AF77] hover:bg-[#c09f6a] text-white h-14 w-56 text-lg font-bold" render={<a href={GOOGLE_FORM_URL} target="_blank" rel="noopener noreferrer" />} nativeButton={false}>
            수퍼 얼리버드 등록하기
          </Button>
          <Button size="lg" className="bg-white hover:bg-gray-100 text-[#0A2540] h-14 w-56 text-lg font-bold" render={<a href={GOOGLE_FORM_URL} target="_blank" rel="noopener noreferrer" />} nativeButton={false}>
            무료 OT 신청하기
          </Button>
        </div>
      </div>
    </section>
  );
}
