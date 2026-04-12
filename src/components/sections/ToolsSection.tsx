import { Hash, FileText, HardDrive, MessageSquare, MessageCircle } from "lucide-react";
import { TOOLS } from "@/data/content";

const ICONS = {
  hash: Hash,
  fileText: FileText,
  hardDrive: HardDrive,
  messageSquare: MessageSquare,
  messageCircle: MessageCircle,
} as const;

export function ToolsSection() {
  return (
    <section id="tools" className="snap-section sec-bg">
      <div className="inner text-center">
        <h2 data-reveal>{TOOLS.title}</h2>
        <p data-reveal data-reveal-delay="100" className="section-desc text-center">{TOOLS.description}</p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {TOOLS.items.map((t, i) => {
            const Icon = ICONS[t.icon];
            return (
              <div
                key={t.name}
                data-reveal
                data-reveal-delay={180 + i * 80}
                className={`card card--bordered text-center${i === TOOLS.items.length - 1 ? " col-span-2 md:col-span-1" : ""}`}
              >
                <Icon className="w-7 h-7 text-gold mx-auto mb-2" />
                <h3 className="font-bold text-sm mb-1">{t.name}</h3>
                <p className="text-xs text-gray-500">{t.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
