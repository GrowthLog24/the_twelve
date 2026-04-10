"use client";

import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";

const NAV_ITEMS = [
  { label: "소개", id: "why" },
  { label: "프로그램", id: "program" },
  { label: "대표 소개", id: "leader" },
  { label: "FAQ", id: "faq" },
];

const GOOGLE_FORM_URL = "https://forms.gle/6emzu92WCEXXiAiz5";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Track which section is currently in view
  useEffect(() => {
    const sectionIds = NAV_ITEMS.map((item) => item.id);
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        },
        { threshold: 0.4 }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
    setMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 h-16 transition-all duration-300 ${
        scrolled
          ? "bg-white shadow-sm"
          : "bg-white"
      }`}
    >
      <div className="inner h-full flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => scrollToSection("hero")}
          className="shrink-0"
        >
          <img src="/logo.svg" alt="THE 12" className="h-5" />
        </button>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`relative text-sm font-medium cursor-pointer transition-colors py-1
                ${activeSection === item.id
                  ? "text-[#0A2540] font-bold"
                  : "text-gray-400 hover:text-[#0A2540]"
                }
              `}
            >
              {item.label}
              <span
                className={`absolute bottom-0 left-0 h-[2px] bg-[#D4AF77] transition-all duration-300
                  ${activeSection === item.id ? "w-full" : "w-0 group-hover:w-full"}
                `}
              />
            </button>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:block">
          <Button
            size="sm"
            className="bg-[#D4AF77] hover:bg-[#c09f6a] text-white font-bold px-5"
            render={<a href={GOOGLE_FORM_URL} target="_blank" rel="noopener noreferrer" />}
            nativeButton={false}
          >
            OT 신청하기
          </Button>
        </div>

        {/* Mobile/Tablet hamburger */}
        <button
          className="lg:hidden p-2 text-[#0A2540]"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="메뉴"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile/Tablet dropdown */}
      {menuOpen && (
        <div className="lg:hidden bg-white border-t shadow-lg">
          <div className="px-6 py-4 flex flex-col gap-3">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-left text-base font-medium py-2 transition-colors ${
                  activeSection === item.id
                    ? "text-[#0A2540] font-bold"
                    : "text-gray-500 hover:text-[#0A2540]"
                }`}
              >
                {item.label}
              </button>
            ))}
            <Button
              className="bg-[#D4AF77] hover:bg-[#c09f6a] text-white font-bold mt-2"
              render={<a href={GOOGLE_FORM_URL} target="_blank" rel="noopener noreferrer" />}
              nativeButton={false}
            >
              OT 신청하기
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
