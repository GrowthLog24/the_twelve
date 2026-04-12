import { Calendar, MapPin, CheckCircle2 } from "lucide-react";
import { MEETUP } from "@/data/content";

const ICONS = { calendar: Calendar, mapPin: MapPin } as const;

export function MeetupSection() {
  return (
    <section id="meeting" className="snap-section sec-bg">
      <div className="inner">
        <div className="flex flex-col lg:flex-row gap-10 items-center">
          <div data-reveal className="flex-1">
            <h2 className="title-compact mb-4 leading-snug">
              {MEETUP.title.map((line, i) => (
                <span key={i}>{line}{i < MEETUP.title.length - 1 && <br />}</span>
              ))}
            </h2>
            <p className="text-base text-gray-500 mb-6">{MEETUP.description}</p>

            <div className="space-y-3 bg-gradient-to-br from-white to-gold/5 p-5 rounded-xl border border-gold/30 shadow-[0_2px_16px_rgba(212,175,119,0.15)] border-r-[3px] border-r-gold">
              {MEETUP.schedule.map((s) => {
                const Icon = ICONS[s.icon];
                return (
                  <div key={s.label} className="flex items-center gap-3 text-sm">
                    <Icon className="text-gold w-5 h-5 shrink-0" />
                    <span className="font-semibold">{s.label}</span>
                  </div>
                );
              })}
            </div>
          </div>

          <div data-reveal data-reveal-delay="160" className="flex-1 bg-gradient-to-br from-white to-gold/5 p-6 rounded-2xl border border-gold/30 shadow-[0_2px_16px_rgba(212,175,119,0.15)] border-r-[3px] border-r-gold">
            <h3 className="text-lg font-bold mb-4">{MEETUP.topicsTitle}</h3>
            <ul className="space-y-2 text-gray-600 text-sm">
              {MEETUP.topics.map((t) => (
                <li key={t} className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-gold shrink-0 mt-0.5" /> {t}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
