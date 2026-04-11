import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const GOOGLE_FORM_URL = "https://forms.gle/6emzu92WCEXXiAiz5";

export function OTSection() {
  return (
    <section id="ot" className="snap-section sec-bg-alt">
      <div className="inner text-center">
        <div data-reveal>
          <Badge className="bg-gold text-white mb-4 border-none">선착순 무료</Badge>
        </div>
        <h2 data-reveal data-reveal-delay="80" className="mb-4">먼저 OT에 참여해보세요</h2>
        <p data-reveal data-reveal-delay="160" className="section-desc text-center">
          프로그램 운영 방식과 커뮤니티 철학을 직접 확인하세요.<br className="hidden md:block" />
          OT 참석 후 등록 여부를 결정하셔도 됩니다.
        </p>

        <div data-reveal data-reveal-delay="240" className="flex flex-col gap-3 max-w-sm mx-auto mb-6">
          <div className="bg-gray-100 p-3 rounded-lg flex justify-between items-center text-sm"><strong>1차</strong> <span>4/17 (금) 19:00~20:30</span></div>
          <div className="bg-gray-100 p-3 rounded-lg flex justify-between items-center text-sm"><strong>2차</strong> <span>4/24 (금) 19:00~20:30</span></div>
          <div className="bg-gray-100 p-3 rounded-lg flex justify-between items-center text-sm"><strong>3차</strong> <span>4/30 (목) 19:00~20:30</span></div>
        </div>
        <p className="text-xs text-gray-400 mb-6">* 회당 참석 인원 확인 후 강남 지역 장소 안내</p>

        <p className="text-sm bg-gold/15 py-2 px-4 rounded-lg font-bold mb-6 inline-block break-keep">
          수퍼 얼리버드(최대 11만원 추가 할인)는 4/17 OT 이전 등록자에게만 적용
        </p>

        <div data-reveal data-reveal-delay="400" className="flex flex-col sm:flex-row justify-center gap-3">
          <Button size="lg" className="bg-navy hover:bg-[#1a385b] text-white h-12 px-8" render={<a href={GOOGLE_FORM_URL} target="_blank" rel="noopener noreferrer" />} nativeButton={false}>
            OT 신청하기
          </Button>
          <Button size="lg" className="bg-gold hover:bg-gold-hover text-white h-12 px-8" render={<a href={GOOGLE_FORM_URL} target="_blank" rel="noopener noreferrer" />} nativeButton={false}>
            바로 등록하기
          </Button>
        </div>
      </div>
    </section>
  );
}
