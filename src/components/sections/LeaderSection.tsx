import { User, Check } from "lucide-react";
import { LEADER } from "@/data/content";
import { renderTitle } from "@/utils/renderTitle";

export function LeaderSection() {
  return (
    <section id="leader" className="snap-section sec-bg-dark">
      <div className="inner">
        {/* 타이틀 - 왼쪽 정렬 */}
        <p data-reveal className="section-label">{LEADER.label}</p>
        <h2 data-reveal data-reveal-delay="60" className="text-white">
          {LEADER.title.map((line, i) => (
            <span key={i}>{renderTitle(line)}{i < LEADER.title.length - 1 && <br />}</span>
          ))}
        </h2>
        <div className="section-divider mb-12" />

        {/* 메인 컨텐츠 - 좌: 프로필, 우: 경력+인용문 */}
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">
          {/* 왼쪽: 프로필 */}
          <div data-reveal data-reveal-delay="120" className="lg:w-56 shrink-0 text-center">
            <div className="w-32 h-32 mx-auto bg-white/5 rounded-full overflow-hidden flex items-center justify-center">
              <User className="w-14 h-14 text-gold/60" />
            </div>
            <h3 className="text-xl font-bold text-white mt-5">{LEADER.profile.name}</h3>
            <p className="text-gold text-sm font-semibold mt-1">{LEADER.profile.role}</p>
            <p className="text-sm text-gray-400 mt-3 leading-relaxed">
              {LEADER.profile.education.split("\n").map((line, i) => (
                <span key={i}>{line}{i < LEADER.profile.education.split("\n").length - 1 && <br />}</span>
              ))}
            </p>
          </div>

          {/* 오른쪽: 경력 + 인용문 */}
          <div className="flex-1 space-y-8">
            {/* 경력 리스트 */}
            <div data-reveal data-reveal-delay="180" className="grid sm:grid-cols-2 gap-x-10 gap-y-3">
              {LEADER.credentials.map((c) => (
                <div key={c} className="flex items-start gap-3 text-gray-300">
                  <Check className="w-5 h-5 text-gold shrink-0 mt-0.5" strokeWidth={3} />
                  <span>{c}</span>
                </div>
              ))}
            </div>

            {/* 인용문 */}
            <div data-reveal data-reveal-delay="240" className="bg-white/5 p-6 lg:p-8 rounded-2xl">
              <p className="text-lg text-white/90 leading-relaxed break-keep italic font-serif">
                &ldquo;{LEADER.quote.map((line, i) => (
                  <span key={i}>{line}{i < LEADER.quote.length - 1 && <br />}</span>
                ))}&rdquo;
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
