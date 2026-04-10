"use client";

import { useEffect, useState } from "react";

export function StickyCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t shadow-lg px-4 py-3">
      <div style={{ maxWidth: 480, margin: "0 auto", display: "flex", gap: 10 }}>
        <a href="#ot-sec" className="sticky-btn-outline">
          무료 OT 신청
        </a>
        <a
          href="https://forms.gle/6emzu92WCEXXiAiz5"
          target="_blank"
          rel="noopener noreferrer"
          className="sticky-btn-gold"
        >
          얼리버드 등록하기
        </a>
      </div>
    </div>
  );
}
