"use client";

import { useEffect, useState } from "react";
import { useCountdown } from "@/hooks/useCountdown";
import { Clock } from "lucide-react";

const TARGET_DATE = "2026-04-17T23:59:59";
const GOOGLE_FORM_URL = "https://forms.gle/6emzu92WCEXXiAiz5";

export function StickyCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const [onLastSection, setOnLastSection] = useState(false);
  const { mounted, timeLeft } = useCountdown(TARGET_DATE);

  useEffect(() => {
    const hero = document.getElementById("hero");
    const cta = document.getElementById("cta");
    if (!hero || !cta) return;

    const heroObserver = new IntersectionObserver(
      ([entry]) => setIsVisible(!entry.isIntersecting),
      { threshold: 0.1 }
    );
    const ctaObserver = new IntersectionObserver(
      ([entry]) => setOnLastSection(entry.isIntersecting),
      { threshold: 0.3 }
    );

    heroObserver.observe(hero);
    ctaObserver.observe(cta);
    return () => {
      heroObserver.disconnect();
      ctaObserver.disconnect();
    };
  }, []);

  if (!isVisible || !mounted || onLastSection) return null;

  const pad = (n: number) => String(n).padStart(2, "0");

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 animate-in slide-in-from-bottom-full duration-300">
      <div className="bg-navy/95 backdrop-blur-sm">
        <div className="inner py-4">
          {/* Countdown */}
          <p className="text-white text-center text-sm font-medium mb-3 flex items-center justify-center gap-2">
            <Clock className="w-4 h-4 text-gold" />
            수퍼 얼리버드 마감까지
            <span className="tabular-nums font-bold text-gold">
              {pad(timeLeft.days)}일 {pad(timeLeft.hours)}:{pad(timeLeft.minutes)}:{pad(timeLeft.seconds)}
            </span>
          </p>

          {/* Buttons */}
          <div className="flex gap-3">
            <a
              href={GOOGLE_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-gold hover:bg-gold-hover text-white font-bold text-base rounded-lg transition-colors flex items-center justify-center text-center py-3.5"
            >
              수퍼 얼리버드 신청
            </a>
            <a
              href={GOOGLE_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-white/10 hover:bg-white/20 text-white font-bold text-base rounded-lg transition-colors flex items-center justify-center text-center py-3.5 border border-white/20"
            >
              무료 OT 참석
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
