"use client";

import { Button } from "@/components/ui/button";

export default function Nav() {
  return (
    <nav className="nav">
      <div className="nav-inner">
        <div className="nav-logo">
          THE <span>12</span>
        </div>
        <div className="nav-right">
          <span className="nav-label">4/17 수퍼 얼리버드 마감</span>
          <Button
            variant="outline"
            className="border-[#0A2540] text-[#0A2540] text-[13px] font-bold px-5 py-2 h-auto rounded-md"
            render={<a href="#ot-sec" />}
          >
            무료 OT 신청
          </Button>
          <Button
            className="bg-[#0A2540] hover:bg-[#0d2f54] text-white text-[13px] font-bold px-5 py-2 h-auto rounded-md"
            render={
              <a href="https://forms.gle/XXXXXXX" target="_blank" rel="noopener noreferrer" />
            }
          >
            수퍼 얼리버드 신청
          </Button>
        </div>
      </div>
    </nav>
  );
}
