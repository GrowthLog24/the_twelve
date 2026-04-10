import { Header } from "@/components/Header";
import { StickyCTA } from "@/components/StickyCTA";
import { HeroSection } from "@/components/sections/HeroSection";
import { WhySection } from "@/components/sections/WhySection";
import { PlansSection } from "@/components/sections/PlansSection";
import { AttendanceSection } from "@/components/sections/AttendanceSection";
import { MeetupSection } from "@/components/sections/MeetupSection";
import { LeaderSection } from "@/components/sections/LeaderSection";
import { StatsSection } from "@/components/sections/StatsSection";
import { OTSection } from "@/components/sections/OTSection";
import { ToolsSection } from "@/components/sections/ToolsSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { FinalSection } from "@/components/sections/FinalSection";

export default function Home() {
  return (
    <>
      <Header />

      <main className="scroll-smooth" style={{ scrollSnapType: "y proximity" }}>
        <HeroSection />
        <WhySection />
        <PlansSection />
        <AttendanceSection />
        <MeetupSection />
        <LeaderSection />
        <StatsSection />
        <OTSection />
        <ToolsSection />
        <FAQSection />
        <FinalSection />
      </main>

      <StickyCTA />
    </>
  );
}
