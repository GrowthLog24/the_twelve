"use client";

import { useEffect, useState } from "react";

function calcTimeLeft() {
  const targetDate = new Date("2026-04-17T23:59:59").getTime();
  const distance = targetDate - Date.now();
  if (distance <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  return {
    days: Math.floor(distance / (1000 * 60 * 60 * 24)),
    hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
    seconds: Math.floor((distance % (1000 * 60)) / 1000),
  };
}

function pad(n: number) {
  return String(n).padStart(2, "0");
}

export function CountdownTimer() {
  const [mounted, setMounted] = useState(false);
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    setMounted(true);
    setTimeLeft(calcTimeLeft());

    const interval = setInterval(() => {
      const next = calcTimeLeft();
      setTimeLeft(next);
      if (!next.days && !next.hours && !next.minutes && !next.seconds) clearInterval(interval);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const t = mounted ? timeLeft : { days: 0, hours: 0, minutes: 0, seconds: 0 };

  return (
    <div className="cd-card">
      <div className="cd-eyebrow">수퍼 얼리버드 마감까지</div>
      <div className="cd-nums">
        <div className="cd-block">
          <span className="cd-n">{pad(t.days)}</span>
          <div className="cd-u">일</div>
        </div>
        <div className="cd-sep">:</div>
        <div className="cd-block">
          <span className="cd-n">{pad(t.hours)}</span>
          <div className="cd-u">시간</div>
        </div>
        <div className="cd-sep">:</div>
        <div className="cd-block">
          <span className="cd-n">{pad(t.minutes)}</span>
          <div className="cd-u">분</div>
        </div>
        <div className="cd-sep">:</div>
        <div className="cd-block">
          <span className="cd-n">{pad(t.seconds)}</span>
          <div className="cd-u">초</div>
        </div>
      </div>
      <div className="cd-note">
        4월 17일 1차 OT 이전 등록자 한정<br />최대 할인 적용
      </div>
      <a className="btn-primary" href="https://forms.gle/XXXXXXX" target="_blank" rel="noopener noreferrer">
        수퍼 얼리버드 신청하기
      </a>
      <a className="btn-line" href="#ot-sec">
        무료 OT 먼저 신청하기
      </a>
    </div>
  );
}
