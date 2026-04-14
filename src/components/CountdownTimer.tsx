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
    <div className="inline-flex flex-col sm:flex-row items-center gap-3 sm:gap-6 bg-white/10 backdrop-blur-sm text-white px-6 py-4 rounded-xl">
      <span className="text-sm font-medium text-white/80">수퍼 얼리버드 마감까지</span>
      <div className="flex items-center gap-2 sm:gap-3">
        <div className="text-center">
          <span className="block text-2xl sm:text-3xl font-bold tabular-nums">{pad(timeLeft.days)}</span>
          <span className="text-[10px] text-white/60 uppercase tracking-wider">Days</span>
        </div>
        <span className="text-gold text-xl font-light">:</span>
        <div className="text-center">
          <span className="block text-2xl sm:text-3xl font-bold tabular-nums">{pad(timeLeft.hours)}</span>
          <span className="text-[10px] text-white/60 uppercase tracking-wider">Hours</span>
        </div>
        <span className="text-gold text-xl font-light">:</span>
        <div className="text-center">
          <span className="block text-2xl sm:text-3xl font-bold tabular-nums">{pad(timeLeft.minutes)}</span>
          <span className="text-[10px] text-white/60 uppercase tracking-wider">Mins</span>
        </div>
        <span className="text-gold text-xl font-light">:</span>
        <div className="text-center">
          <span className="block text-2xl sm:text-3xl font-bold tabular-nums">{pad(timeLeft.seconds)}</span>
          <span className="text-[10px] text-white/60 uppercase tracking-wider">Secs</span>
        </div>
      </div>
    </div>
  );
}
