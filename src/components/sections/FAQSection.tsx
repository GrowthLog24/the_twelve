import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FAQSection() {
  return (
    <section id="faq" className="snap-section sec-bg-alt">
      <div className="inner">
        <p data-reveal className="section-label">FAQ</p>
        <h2 data-reveal data-reveal-delay="60">자주 묻는 질문</h2>
        <div className="section-divider mb-8" />
        <div data-reveal data-reveal-delay="120" className="lg:overflow-y-auto lg:max-h-[calc(100dvh-12rem)] faq-scroll">
          <Accordion className="w-full">
            <AccordionItem value="faq-1">
              <AccordionTrigger className="text-left font-bold text-base py-3 cursor-pointer">Q. 오프라인은 매일 가야 하나요?</AccordionTrigger>
              <AccordionContent className="text-gray-600 text-sm pb-4">
                오전 9:00~11:30은 필수 출석이며, 월 2회 개인 일정 양해 가능합니다. 이후 오후 6시까지 자습 공간으로 자유롭게 이용 가능합니다.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="faq-2">
              <AccordionTrigger className="text-left font-bold text-base py-3 cursor-pointer">Q. 직장인도 온라인으로 참여 가능한가요?</AccordionTrigger>
              <AccordionContent className="text-gray-600 text-sm pb-4">
                네, 온라인 A(저녁 라이브)과 온라인 B(자율 인증) 중 선택 가능합니다.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="faq-3">
              <AccordionTrigger className="text-left font-bold text-base py-3 cursor-pointer">Q. VIP 섀도우 참여는?</AccordionTrigger>
              <AccordionContent className="text-gray-600 text-sm pb-4">
                오프라인 회원 중 신청·심사 후 실제 자산 컨설팅 현장 동행 기회를 드립니다.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="faq-4">
              <AccordionTrigger className="text-left font-bold text-base py-3 cursor-pointer">Q. 교재는 제공되나요?</AccordionTrigger>
              <AccordionContent className="text-gray-600 text-sm pb-4">
                별도 교재 없이 수강 강의 교재나 시험지로 자유롭게 독학합니다.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="faq-5">
              <AccordionTrigger className="text-left font-bold text-base py-3 cursor-pointer">Q. 환불 정책은?</AccordionTrigger>
              <AccordionContent className="text-gray-600 text-sm pb-4">
                1차 정기모임 전 취소 시 100% 환불합니다.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="faq-6">
              <AccordionTrigger className="text-left font-bold text-base py-3 cursor-pointer">Q. 운영진으로 참여할 수 있나요?</AccordionTrigger>
              <AccordionContent className="text-gray-600 text-sm pb-4">
                OT 신청 폼에서 운영진 지원 의사를 표시해주시면 별도 안내드립니다.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="faq-7">
              <AccordionTrigger className="text-left font-bold text-base py-3 cursor-pointer">Q. 합격 후 실무 교육은?</AccordionTrigger>
              <AccordionContent className="text-gray-600 text-sm pb-4">
                시험 후 12월~2월 실무 교육 진행. 1기 회원은 50% 할인 참여 가능합니다.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
}
