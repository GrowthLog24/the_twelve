import { Hash, FileText, HardDrive, MessageSquare, MessageCircle } from "lucide-react";

export function ToolsSection() {
  return (
    <section id="tools" className="snap-section sec-bg">
      <div className="inner text-center">
        <h2 data-reveal className="text-3xl md:text-4xl font-bold text-[#0A2540] mb-3 break-keep">시스템으로 운영되는 커뮤니티</h2>
        <p data-reveal data-reveal-delay="100" className="text-base text-gray-500 mb-10">
          270명 개발자 커뮤니티 그로스로그 5기 운영 경험을 그대로 적용합니다.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          <div data-reveal data-reveal-delay="180" className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm text-center">
            <Hash className="w-7 h-7 text-[#D4AF77] mx-auto mb-2" />
            <h4 className="font-bold text-sm mb-1">Slack</h4>
            <p className="text-xs text-gray-500">실시간 질의응답</p>
          </div>
          <div data-reveal data-reveal-delay="260" className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm text-center">
            <FileText className="w-7 h-7 text-[#D4AF77] mx-auto mb-2" />
            <h4 className="font-bold text-sm mb-1">Notion</h4>
            <p className="text-xs text-gray-500">학습 로그·일정</p>
          </div>
          <div data-reveal data-reveal-delay="340" className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm text-center">
            <HardDrive className="w-7 h-7 text-[#D4AF77] mx-auto mb-2" />
            <h4 className="font-bold text-sm mb-1">Google Drive</h4>
            <p className="text-xs text-gray-500">강의 자료·녹화본</p>
          </div>
          <div data-reveal data-reveal-delay="420" className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm text-center">
            <MessageSquare className="w-7 h-7 text-[#D4AF77] mx-auto mb-2" />
            <h4 className="font-bold text-sm mb-1">카카오채널</h4>
            <p className="text-xs text-gray-500">공지·알림</p>
          </div>
          <div data-reveal data-reveal-delay="500" className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm text-center col-span-2 md:col-span-1">
            <MessageCircle className="w-7 h-7 text-[#D4AF77] mx-auto mb-2" />
            <h4 className="font-bold text-sm mb-1">오픈채팅</h4>
            <p className="text-xs text-gray-500">빠른 일상 소통</p>
          </div>
        </div>
      </div>
    </section>
  );
}
