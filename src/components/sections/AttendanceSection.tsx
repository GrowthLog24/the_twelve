export function AttendanceSection() {
  return (
    <section id="attendance" className="snap-section sec-bg-alt">
      <div className="inner text-center">
        <h2 data-reveal className="mb-4">
          합격은 &ldquo;루틴&rdquo;에서 결정됩니다
        </h2>
        <p data-reveal data-reveal-delay="100" className="section-desc text-center">의지만으로는 6개월을 버티기 어렵습니다. 구조가 완주를 만듭니다.</p>

        <div className="grid md:grid-cols-3 gap-4">
          <div data-reveal data-reveal-delay="180" className="card card--bordered">
            <h3 className="text-lg font-bold text-gold mb-2">오프라인</h3>
            <p className="text-gray-600 text-sm">오전 9:00~11:30 강제 출석<br />이후 오후 6시까지 자율 자습</p>
          </div>
          <div data-reveal data-reveal-delay="280" className="card card--bordered">
            <h3 className="text-lg font-bold text-gold mb-2">온라인 A</h3>
            <p className="text-gray-600 text-sm">저녁 라이브 출석 인증</p>
          </div>
          <div data-reveal data-reveal-delay="380" className="card card--bordered">
            <h3 className="text-lg font-bold text-gold mb-2">온라인 B</h3>
            <p className="text-gray-600 text-sm">자율 공부 내역 인증<br />커뮤니티 기록 공유</p>
          </div>
        </div>

        <p data-reveal data-reveal-delay="460" className="mt-8 text-base font-bold bg-white py-3 px-6 rounded-lg inline-block border border-gray-200 break-keep">
          &ldquo;오전 출석이 더트웰브의 가장 강력한 완주 장치입니다.&rdquo;
        </p>
      </div>
    </section>
  );
}
