import { Calendar, MapPin, CheckCircle2 } from "lucide-react";
import { MEETUP } from "@/data/content";

const ICONS = { calendar: Calendar, mapPin: MapPin } as const;

export function MeetupSection() {
  return (
    <section id="meeting" className="snap-section sec-bg">
      <div className="inner">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
          <div data-reveal className="flex-1">
            <h2 className="title-compact mb-4 leading-snug">
              {MEETUP.title.map((line, i) => (
                <span key={i}>{line}{i < MEETUP.title.length - 1 && <br />}</span>
              ))}
            </h2>
            <p className="text-gray-500 mb-8 leading-relaxed">{MEETUP.description}</p>

            <div className="space-y-4">
              {MEETUP.schedule.map((s) => {
                const Icon = ICONS[s.icon];
                return (
                  <div key={s.label} className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center shrink-0">
                      <Icon className="text-gold w-5 h-5" />
                    </div>
                    <span className="font-medium text-navy">{s.label}</span>
                  </div>
                );
              })}
            </div>
          </div>

          <div data-reveal data-reveal-delay="160" className="flex-1 card card--lg">
            <h3 className="text-xl font-bold text-navy mb-6">{MEETUP.topicsTitle}</h3>
            <ul className="space-y-4 text-gray-600">
              {MEETUP.topics.map((t) => (
                <li key={t} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
