export function WhySection() {
  return (
    <section id="why" className="snap-section sec-bg-alt">
      <div className="inner">
        <h2 data-reveal className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#D4AF77] mb-3 leading-snug break-keep tracking-widest">
          WHY THE12?
        </h2>
        <div className="w-12 h-1 bg-[#DFBE8C] mb-6" />
        <p data-reveal data-reveal-delay="100" className="text-base text-gray-500 mb-10 break-keep">
          에어비앤비, 경매, 투자... 관심은 넘치지만 진짜 &lsquo;뼈대&rsquo;는 없는 상태로 단편적인 지식만 쌓고 있지는 않으신가요?
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          <div data-reveal data-reveal-delay="180" className="bg-white rounded-xl p-6 lg:p-8 border-t-4 border-[#D4AF77] shadow-sm">
            <p className="text-5xl font-extrabold text-gray-200 mb-4">01</p>
            <h3 className="text-lg font-bold text-[#0A2540] mb-3">두 번째 전문 영역</h3>
            <p className="text-sm text-gray-600 leading-relaxed">기존 커리어에 부동산 전문성을 더해 누구도 쉽게 넘볼 수 없는 경쟁력을 만드세요.</p>
          </div>
          <div data-reveal data-reveal-delay="280" className="bg-white rounded-xl p-6 lg:p-8 border-t-4 border-[#D4AF77] shadow-sm">
            <p className="text-5xl font-extrabold text-gray-200 mb-4">02</p>
            <h3 className="text-lg font-bold text-[#0A2540] mb-3">협력 파트너 네트워크</h3>
            <p className="text-sm text-gray-600 leading-relaxed">함께 공부한 동료가 미래의 투자·거래·사업 파트너가 됩니다.</p>
          </div>
          <div data-reveal data-reveal-delay="380" className="bg-white rounded-xl p-6 lg:p-8 border-t-4 border-[#D4AF77] shadow-sm">
            <p className="text-5xl font-extrabold text-gray-200 mb-4">03</p>
            <h3 className="text-lg font-bold text-[#0A2540] mb-3">실전으로 연결</h3>
            <p className="text-sm text-gray-600 leading-relaxed">1:1 컨설팅, VIP 현장 섀도우, 합격 후 실무 교육 및 채용 연계까지. 합격은 끝이 아닌 시작입니다.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
