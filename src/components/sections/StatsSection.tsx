const STATS = [
  {
    n: "17",
    label: "부동산 실무 경력",
    caption: "쉐어하우스·임대·시행·개발·컨설팅",
  },
  {
    n: "18",
    label: "에이블하우스 지점 운영",
    caption: "코티에이블 창업 → 직방 자산 엑싯",
  },
  {
    n: "335",
    label: "커뮤니티 누적 회원",
    caption: "Growth Log 5기 운영",
  },
  {
    n: "6",
    label: "시험까지",
    caption: "2026년 10월 31일 시험",
  },
];

export function StatsSection() {
  return (
    <section id="stats" className="snap-section sec-bg text-[#0A2540] text-center">
      <div className="inner">
        <p data-reveal className="text-sm font-bold text-[#D4AF77] tracking-widest mb-3">NUMBERS</p>
        <h2 data-reveal data-reveal-delay="80" className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3">
          숫자로 증명하는 더트웰브
        </h2>
        <div className="w-12 h-1 bg-[#D4AF77] mx-auto mb-12" />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {STATS.map((s, i) => (
            <div key={s.label} data-reveal data-reveal-delay={160 + i * 100} className="flex flex-col items-center">
              <div className="text-5xl md:text-6xl font-extrabold text-[#D4AF77] leading-none mb-1">
                {s.n}<span className="text-3xl md:text-4xl">{s.unit}</span>
              </div>
              <div className="text-base font-bold mt-3 mb-1">{s.label}</div>
              <div className="text-xs text-gray-500">{s.caption}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
