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
    <div className="countdown-frost inline-flex flex-col sm:flex-row items-center gap-4 sm:gap-8 px-8 py-5 rounded-2xl">
      <span className="text-sm font-semibold text-white/90">수퍼 얼리버드 마감까지</span>
      <div className="flex items-center gap-4">
        <div className="text-center">
          <span className="block text-3xl sm:text-4xl font-bold tabular-nums text-white">{pad(timeLeft.days)}</span>
          <span className="text-xs text-white/60 uppercase tracking-wider">Days</span>
        </div>
        <span className="text-gold text-2xl font-light">:</span>
        <div className="text-center">
          <span className="block text-3xl sm:text-4xl font-bold tabular-nums text-white">{pad(timeLeft.hours)}</span>
          <span className="text-xs text-white/60 uppercase tracking-wider">Hours</span>
        </div>
        <span className="text-gold text-2xl font-light">:</span>
        <div className="text-center">
          <span className="block text-3xl sm:text-4xl font-bold tabular-nums text-white">{pad(timeLeft.minutes)}</span>
          <span className="text-xs text-white/60 uppercase tracking-wider">Mins</span>
        </div>
        <span className="text-gold text-2xl font-light">:</span>
        <div className="text-center">
          <span className="block text-3xl sm:text-4xl font-bold tabular-nums text-white">{pad(timeLeft.seconds)}</span>
          <span className="text-xs text-white/60 uppercase tracking-wider">Secs</span>
        </div>
      </div>
    </div>
  );
}
