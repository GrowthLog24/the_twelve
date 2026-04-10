"use client";

import { useEffect, useState } from "react";

export function CountdownTimer() {
  const [mounted, setMounted] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    setMounted(true);
    // Target date: April 17, 2026, 23:59:59
    const targetDate = new Date("2026-04-17T23:59:59").getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(interval);
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  if (!mounted) {
    return <div className="text-sm font-bold text-center p-2 opacity-0">로딩 중...</div>;
  }

  return (
    <div className="bg-[#D4AF77]/10 text-[#D4AF77] font-bold text-center p-3 rounded-md mb-4 text-sm md:text-base flex justify-center items-center gap-2">
      <span>⏳ 수퍼 얼리버드 마감까지</span>
      <span className="bg-[#0A2540] text-white px-2 py-1 rounded">
        {timeLeft.days}일 {timeLeft.hours}시간 {timeLeft.minutes}분 {timeLeft.seconds}초
      </span>
    </div>
  );
}
