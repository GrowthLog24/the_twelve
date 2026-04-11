import { Users, CheckCircle2 } from "lucide-react";

export function LeaderSection() {
  return (
    <section id="leader" className="snap-section sec-bg-alt">
      <div className="inner">
        <p data-reveal className="section-label">LEADER</p>
        <h2 data-reveal data-reveal-delay="60">
          17년 현장 경험의 전문가가<br />첫걸음을 함께 설계합니다
        </h2>
        <div className="section-divider mb-10" />

        <div className="flex flex-col md:flex-row gap-8 items-start">
          <div data-reveal data-reveal-delay="120" className="md:w-1/4 w-full shrink-0 text-center">
            <div className="w-32 h-32 mx-auto bg-gray-200 rounded-full overflow-hidden flex items-center justify-center">
              <Users className="w-12 h-12 text-gray-400" />
            </div>
            <h3 className="text-xl font-bold mt-3">안혜린 대표</h3>
            <p className="text-gold text-sm font-semibold">THE 12 Founder</p>
            <p className="text-xs text-gray-500 mt-1">한양대 법학 / 서울대 도시계획<br />KAIST·Aalto Univ. 창업 과정</p>
          </div>

          <div data-reveal data-reveal-delay="220" className="md:w-3/4 w-full space-y-4">
            <div className="grid md:grid-cols-2 gap-2 text-sm text-gray-600">
              <div className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-gold shrink-0 mt-0.5" /> 부동산 실무 17년 (시행·개발·컨설팅)</div>
              <div className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-gold shrink-0 mt-0.5" /> 에이블하우스 18개 지점 → 직방 엑싯</div>
              <div className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-gold shrink-0 mt-0.5" /> 국토부 청년주택 자문위원</div>
              <div className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-gold shrink-0 mt-0.5" /> 서울시 스타트업 특별위원회</div>
              <div className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-gold shrink-0 mt-0.5" /> 순천향대 겸임교수 4년</div>
              <div className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-gold shrink-0 mt-0.5" /> Growth Log 270명 커뮤니티 운영</div>
            </div>

            <div className="bg-white p-5 rounded-xl border-l-4 border-gold">
              <p className="text-sm font-medium leading-relaxed break-keep">
                &ldquo;내 주변 사람들의 부동산 투자를 내가 챙겨줄 수 있는 사람이 되고 싶습니다. 더트웰브는 그 마음을 공유하는 사람들이 서로의 평생 파트너가 되는 공간입니다.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
