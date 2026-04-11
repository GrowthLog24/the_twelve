"use client";

import { useEffect, useState } from "react";
import { useCountdown } from "@/hooks/useCountdown";

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
      {/* Scroll indicator */}
      <div className="flex justify-center pb-2">
        <div className="animate-bounce text-gray-400">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M7 10l5 5 5-5" />
          </svg>
        </div>
      </div>

      <div className="bg-navy">
      <div className="inner py-5">
        {/* Countdown */}
        <p className="text-white text-center text-base font-bold mb-4">
          ⏳ 수퍼 얼리버드 마감까지{"  "}
          <span className="tabular-nums ml-1 text-gold">
            {pad(timeLeft.days)} : {pad(timeLeft.hours)} : {pad(timeLeft.minutes)} : {pad(timeLeft.seconds)}
          </span>
        </p>

        {/* Buttons */}
        <div className="flex gap-4">
          <a
            href={GOOGLE_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-gold hover:bg-gold-hover text-white font-extrabold text-lg rounded-md shadow-[0_4px_4px_rgba(0,0,0,0.25)] transition-colors flex items-center justify-center text-center leading-snug py-4"
          >
            <span>수퍼 얼리버드<br />신청하기 <span className="font-normal text-sm">(4/17 마감)</span></span>
          </a>
          <a
            href={GOOGLE_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-white hover:bg-gray-100 text-navy font-extrabold text-lg rounded-md shadow-[0_4px_4px_rgba(0,0,0,0.25)] transition-colors flex items-center justify-center text-center py-4"
          >
            무료 OT 참석하기
          </a>
        </div>
      </div>
      </div>
    </div>
  );
}
