"use client";

import Image from "next/image";

export default function Nav() {
  return (
    <nav className="nav-bar">
      <div className="nav-inner">
        <div className="nav-left">
          <a href="/" className="nav-logo" aria-label="THE 12 홈으로 이동">
            <span className="nav-logo-image">
              <Image
                src="/images/the12-logo.png"
                alt="THE 12 부동산 커뮤니티 로고"
                fill
                priority
                sizes="55px"
              />
            </span>
          </a>
        </div>

        <div className="nav-menu">
          <a href="#intro">소개</a>
          <a href="#program">프로그램</a>
          <a href="#leader">리더</a>
          <a href="#faq">FAQ</a>
        </div>

        <div className="nav-right" />
      </div>
    </nav>
  );
}