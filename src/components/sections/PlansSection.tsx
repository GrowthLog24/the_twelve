import { CheckCircle2, XCircle } from "lucide-react";

export function PlansSection() {
  return (
    <section id="program" className="snap-section sec-bg-alt">
      <div className="inner">
        <p data-reveal className="text-sm font-bold text-[#D4AF77] tracking-widest mb-3">PROGRAM</p>
        <h2 data-reveal data-reveal-delay="60" className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0A2540] mb-3 break-keep">나에게 맞는 과정을 선택하세요</h2>
        <div className="w-12 h-1 bg-[#DFBE8C] mb-10" />

        <div className="grid md:grid-cols-3 gap-8">
          {/* Offline Premium */}
          <div data-reveal data-reveal-delay="140" className="bg-white rounded-xl p-6 lg:p-8 border-t-4 border-[#D4AF77] relative overflow-visible shadow-sm">
            <span className="inline-block bg-[#D4AF77] text-white text-xs font-bold px-3 py-1 rounded-full mb-4">추천 · 최대 혜택</span>
            <h3 className="text-xl font-bold text-[#0A2540] mb-1">오프라인 프리미엄</h3>
            <p className="text-sm text-gray-500 mb-4">강남역 17층 · 오전 09:00~11:30 출석</p>
            <div className="flex items-baseline gap-2 mb-2">
              <span className="text-3xl font-extrabold text-[#D4AF77]">199만원</span>
              <span className="text-sm text-gray-400 line-through">210만원</span>
            </div>
            <span className="inline-block text-xs text-[#D4AF77] border border-[#D4AF77] px-2 py-0.5 rounded mb-4">11만원 절약</span>
            <hr className="border-gray-200 mb-4" />
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2"><CheckCircle2 className="text-[#D4AF77] w-4 h-4 shrink-0" /> <span className="font-semibold text-[#0A2540]">오후 6시까지 지정석 자습</span></div>
              <div className="flex items-center gap-2"><CheckCircle2 className="text-[#D4AF77] w-4 h-4 shrink-0" /> 정기모임 오프+온라인</div>
              <div className="flex items-center gap-2"><CheckCircle2 className="text-[#D4AF77] w-4 h-4 shrink-0" /> 월 1회 개인 면담</div>
              <div className="flex items-center gap-2"><CheckCircle2 className="text-[#D4AF77] w-4 h-4 shrink-0" /> VIP 현장 섀도우</div>
              <div className="flex items-center gap-2"><CheckCircle2 className="text-[#D4AF77] w-4 h-4 shrink-0" /> 우수회원 채용 연계</div>
            </div>
          </div>

          {/* Online A */}
          <div data-reveal data-reveal-delay="250" className="bg-white rounded-xl p-6 lg:p-8 border-t-4 border-gray-200 shadow-sm">
            <h3 className="text-xl font-bold text-[#0A2540] mb-1 mt-2">온라인 A <span className="text-base font-normal text-gray-500">(출석형)</span></h3>
            <p className="text-sm text-gray-500 mb-4">저녁 구글밋 라이브 · 직장인 · 지방 거주자</p>
            <div className="flex items-baseline gap-2 mb-2">
              <span className="text-3xl font-extrabold text-[#D4AF77]">79만원</span>
              <span className="text-sm text-gray-400 line-through">90만원</span>
            </div>
            <span className="inline-block text-xs text-[#D4AF77] border border-[#D4AF77] px-2 py-0.5 rounded mb-4">11만원 절약</span>
            <hr className="border-gray-200 mb-4" />
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2"><CheckCircle2 className="text-[#D4AF77] w-4 h-4 shrink-0" /> 정기모임 오프+온라인</div>
              <div className="flex items-center gap-2"><CheckCircle2 className="text-[#D4AF77] w-4 h-4 shrink-0" /> 우수회원 채용 연계</div>
              <div className="flex items-center gap-2 text-gray-300"><XCircle className="w-4 h-4 shrink-0" /> 지정석 자습</div>
              <div className="flex items-center gap-2 text-gray-300"><XCircle className="w-4 h-4 shrink-0" /> 개인 면담</div>
              <div className="flex items-center gap-2 text-gray-300"><XCircle className="w-4 h-4 shrink-0" /> VIP 섀도우</div>
            </div>
          </div>

          {/* Online B */}
          <div data-reveal data-reveal-delay="360" className="bg-white rounded-xl p-6 lg:p-8 border-t-4 border-gray-200 shadow-sm">
            <h3 className="text-xl font-bold text-[#0A2540] mb-1 mt-2">온라인 B <span className="text-base font-normal text-gray-500">(자율형)</span></h3>
            <p className="text-sm text-gray-500 mb-4">자율 인증 · 자기관리 잘 되는 분</p>
            <div className="flex items-baseline gap-2 mb-2">
              <span className="text-3xl font-extrabold text-[#D4AF77]">49만원</span>
              <span className="text-sm text-gray-400 line-through">60만원</span>
            </div>
            <span className="inline-block text-xs text-[#D4AF77] border border-[#D4AF77] px-2 py-0.5 rounded mb-4">11만원 절약</span>
            <hr className="border-gray-200 mb-4" />
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2"><CheckCircle2 className="text-[#D4AF77] w-4 h-4 shrink-0" /> 정기모임 오프+온라인</div>
              <div className="flex items-center gap-2"><CheckCircle2 className="text-[#D4AF77] w-4 h-4 shrink-0" /> 우수회원 채용 연계</div>
              <div className="flex items-center gap-2 text-gray-300"><XCircle className="w-4 h-4 shrink-0" /> 지정석 자습</div>
              <div className="flex items-center gap-2 text-gray-300"><XCircle className="w-4 h-4 shrink-0" /> 개인 면담</div>
              <div className="flex items-center gap-2 text-gray-300"><XCircle className="w-4 h-4 shrink-0" /> VIP 섀도우</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
