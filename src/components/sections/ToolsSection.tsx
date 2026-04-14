import { Hash, FileText, HardDrive, MessageSquare, MessageCircle } from "lucide-react";
import { TOOLS } from "@/data/content";
import { renderTitle } from "@/utils/renderTitle";

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
        <h2 data-reveal>{renderTitle(TOOLS.title)}</h2>
        <p data-reveal data-reveal-delay="100" className="section-desc mx-auto">{TOOLS.description}</p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
          {TOOLS.items.map((t, i) => {
            const Icon = ICONS[t.icon];
            return (
              <div
                key={t.name}
                data-reveal
                data-reveal-delay={180 + i * 80}
                className={`card text-center py-8${i === TOOLS.items.length - 1 ? " col-span-2 md:col-span-1" : ""}`}
              >
                <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-6 h-6 text-gold" />
                </div>
                <h3 className="font-bold text-navy mb-1">{t.name}</h3>
                <p className="text-sm text-gray-500">{t.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
