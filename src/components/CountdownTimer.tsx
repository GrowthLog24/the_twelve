"use client";

import { useCountdown } from "@/hooks/useCountdown";

const TARGET_DATE = "2026-04-17T23:59:59";

export function CountdownTimer() {
  const { mounted, timeLeft } = useCountdown(TARGET_DATE);

  if (!mounted) {
    return <div className="text-sm font-bold text-center p-2 opacity-0">loading</div>;
  }

  const pad = (n: number) => String(n).padStart(2, "0");

  return (
    <div className="bg-white text-navy font-bold text-center p-3 rounded-md mb-4 text-sm md:text-base flex justify-center items-center gap-3 border border-gold shadow-md">
      <span>수퍼 얼리버드 마감까지</span>
      <span className="px-3 py-1 rounded font-mono tracking-wider">
        {pad(timeLeft.days)}
        <span className="text-gold mx-0.5">:</span>
        {pad(timeLeft.hours)}
        <span className="text-gold mx-0.5">:</span>
        {pad(timeLeft.minutes)}
        <span className="text-gold mx-0.5">:</span>
        {pad(timeLeft.seconds)}
      </span>
    </div>
  );
}
