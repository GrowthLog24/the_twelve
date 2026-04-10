"use client";

import { useEffect, useState } from "react";
import { Button } from "./ui/button";

export function StickyCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky CTA after scrolling down 300px
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t shadow-lg p-4 animate-in slide-in-from-bottom-full duration-300">
      <div className="max-w-md mx-auto flex gap-3">
        <Button variant="outline" className="flex-1 border-[#0A2540] text-[#0A2540]" render={<a href="https://forms.gle/6emzu92WCEXXiAiz5" target="_blank" rel="noopener noreferrer" />} nativeButton={false}>
          무료 OT 신청
        </Button>
        <Button className="flex-1 bg-[#D4AF77] hover:bg-[#b08e5e] text-white font-bold" render={<a href="https://forms.gle/6emzu92WCEXXiAiz5" target="_blank" rel="noopener noreferrer" />} nativeButton={false}>
          얼리버드 등록하기
        </Button>
      </div>
    </div>
  );
}
