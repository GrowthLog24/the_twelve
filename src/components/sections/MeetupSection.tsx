import { Calendar, MapPin, CheckCircle2 } from "lucide-react";

export function MeetupSection() {
  return (
    <section id="meeting" className="snap-section sec-bg">
      <div className="inner">
        <div className="flex flex-col lg:flex-row gap-10 items-center">
          <div data-reveal className="flex-1">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A2540] mb-4 leading-snug break-keep">
              매월 첫째 금요일 저녁 7시 —<br />
              진짜 네트워크가 만들어지는 시간
            </h2>
            <p className="text-base text-gray-500 mb-6">시험 공부를 넘어, 함께 성장합니다.</p>

            <div className="space-y-3 bg-[#F5F5F5] p-5 rounded-xl">
              <div className="flex items-center gap-3 text-sm">
                <Calendar className="text-[#D4AF77] w-5 h-5 shrink-0" />
                <span className="font-semibold text-[#0A2540]">매월 첫째 금요일 19:00 ~ 22:00</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <MapPin className="text-[#D4AF77] w-5 h-5 shrink-0" />
                <span className="font-semibold text-[#0A2540]">강남역 더트웰브 오피스 (온라인 동시 참여)</span>
              </div>
            </div>
          </div>

          <div data-reveal data-reveal-delay="160" className="flex-1 bg-[#F5F5F5] p-6 rounded-2xl">
            <h3 className="text-lg font-bold text-[#0A2540] mb-4">모임에서 다루는 것들</h3>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-[#D4AF77] shrink-0 mt-0.5" /> 투자·커리어 경험 공유</li>
              <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-[#D4AF77] shrink-0 mt-0.5" /> 과목별 공부법 & 고득점 전략</li>
              <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-[#D4AF77] shrink-0 mt-0.5" /> 서울 부동산 시장 분석</li>
              <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-[#D4AF77] shrink-0 mt-0.5" /> 경매 실무 & 프롭테크 트렌드</li>
              <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-[#D4AF77] shrink-0 mt-0.5" /> 실제 임장 투어 기획</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
