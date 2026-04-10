"use client";

import { useState } from "react";

const faqs = [
  { q: "오프라인은 매일 가야 하나요?", a: "오전 9:00–11:30은 필수 출석입니다. 월 2회까지 개인 일정 인정. 이후 오후 6시까지는 자유롭게 자습 공간으로 이용하실 수 있습니다." },
  { q: "직장인인데 온라인으로 가능한가요?", a: "온라인 A (저녁 9–11시 라이브 출석형)와 온라인 B (자율 인증형) 중 선택 가능합니다. 직장인·지방 거주자에게 적합합니다." },
  { q: "VIP 섀도우 참여는 어떻게 진행되나요?", a: "오프라인 회원 중 희망자가 신청하면 심사 후 실제 자산 컨설팅 현장 동행 기회를 드립니다. 시험 일정에 방해되지 않는 선에서 조율합니다." },
  { q: "교재는 제공되나요?", a: "별도 교재 제공 없이 수강하시는 강의의 교재나 시험지로 자유롭게 독학합니다." },
  { q: "환불 정책은 어떻게 되나요?", a: "1차 정기모임 전에 취소하는 경우 100% 환불해드립니다." },
  { q: "합격 후 실무 교육은 언제 시작하나요?", a: "시험 후 11월 한 달 휴식 후 12월–2월 합격생 대상 실무 교육 진행. 1기 회원은 50% 할인 적용." },
  { q: "운영진으로 참여할 수 있나요?", a: "OT 신청 폼에서 운영진 지원 의사를 표시해주세요. 별도 안내드립니다." },
];

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <ul className="faq-wrap rv" id="faq" style={{ listStyle: "none" }}>
      {faqs.map((item, i) => (
        <li
          key={i}
          className={`faq-item${openIdx === i ? " open" : ""}`}
          onClick={() => setOpenIdx(openIdx === i ? null : i)}
        >
          <div className="faq-q">
            {item.q}
            <span className="faq-ico">+</span>
          </div>
          <div className="faq-a">{item.a}</div>
        </li>
      ))}
    </ul>
  );
}
