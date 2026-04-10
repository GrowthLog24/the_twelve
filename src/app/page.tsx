import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CountdownTimer } from "@/components/CountdownTimer";
import { StickyCTA } from "@/components/StickyCTA";
import { Header } from "@/components/Header";
import { CheckCircle2, XCircle, Users, Briefcase, Rocket, Calendar, MapPin, Hash, FileText, HardDrive, MessageSquare, MessageCircle } from "lucide-react";

const GOOGLE_FORM_URL = "https://forms.gle/6emzu92WCEXXiAiz5";

export default function Home() {
  return (
    <>
      <Header />

      <main className="scroll-smooth" style={{ scrollSnapType: "y proximity" }}>
        {/* S1: HERO */}
        <section id="hero" className="snap-section-hero relative overflow-hidden">
          {/* Background image */}
          <img src="/hero-bg.jpg" alt="" className="absolute inset-0 w-full h-full object-cover" />
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/50" />

          <div className="inner relative z-10 text-center pt-20">
            <Badge className="bg-[#D4AF77] text-white mb-6 border-none hover:bg-[#c09f6a]">THE 12 1기 모집중</Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 text-white tracking-tight break-keep">
              당신의 인생에 부동산이라는<br />무기를 장착하십시오.
            </h1>
            <p className="text-xl md:text-2xl text-white font-bold mb-4 break-keep">
              수강생이 아닌, 미래의 협력 파트너를 찾습니다.
            </p>
            <p className="text-base md:text-lg mb-8 break-keep">
              <span className="text-[#D4AF77] font-semibold">THE 12 — 우리는 단순한 합격 스터디가 아닙니다.</span><br />
              <span className="text-gray-200">대한민국 부동산 네트워크의 새로운 에너지가 될 것입니다.</span>
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-3 mb-8 text-sm text-gray-300">
              <span className="flex items-center justify-center gap-1.5"><CheckCircle2 className="text-[#D4AF77] w-4 h-4" /> 17년차 전문가 직접 운영</span>
              <span className="flex items-center gap-1.5"><CheckCircle2 className="text-[#D4AF77] w-4 h-4" /> 강남역 17층 지정석</span>
              <span className="flex items-center gap-1.5"><CheckCircle2 className="text-[#D4AF77] w-4 h-4" /> 합격 후 실무 교육 연계</span>
            </div>

            <CountdownTimer />

            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
              <Button size="lg" className="bg-[#D4AF77] hover:bg-[#c09f6a] text-white font-bold text-lg h-14 px-8" render={<a href={GOOGLE_FORM_URL} target="_blank" rel="noopener noreferrer" />} nativeButton={false}>
                수퍼 얼리버드 신청하기
              </Button>
              <Button size="lg" className="bg-white hover:bg-gray-100 text-[#0A2540] font-bold text-lg h-14 px-8" render={<a href={GOOGLE_FORM_URL} target="_blank" rel="noopener noreferrer" />} nativeButton={false}>
                무료 OT 참석하기
              </Button>
            </div>
          </div>
        </section>

        {/* S2: WHY THE 12 */}
        <section id="why" className="snap-section bg-[#F5F5F5]">
          <div className="inner">
            <p className="text-sm font-bold text-[#D4AF77] tracking-widest mb-3">WHY THE 12</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0A2540] mb-3 leading-snug break-keep">
              왜 지금 공인중개사 시험인가?
            </h2>
            <div className="w-12 h-1 bg-[#0A2540] mb-6" />
            <p className="text-base text-gray-500 mb-10 break-keep">
              에어비앤비, 경매, 투자... 관심은 넘치지만 진짜 &lsquo;뼈대&rsquo;는 없는 상태로 단편적인 지식만 쌓고 있지는 않으신가요?
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-6 lg:p-8 border-t-4 border-[#D4AF77] shadow-sm">
                <p className="text-5xl font-extrabold text-gray-200 mb-4">01</p>
                <h3 className="text-lg font-bold text-[#0A2540] mb-3">두 번째 전문 영역</h3>
                <p className="text-sm text-gray-600 leading-relaxed">기존 커리어에 부동산 전문성을 더해 누구도 쉽게 넘볼 수 없는 경쟁력을 만드세요.</p>
              </div>
              <div className="bg-white rounded-xl p-6 lg:p-8 border-t-4 border-[#D4AF77] shadow-sm">
                <p className="text-5xl font-extrabold text-gray-200 mb-4">02</p>
                <h3 className="text-lg font-bold text-[#0A2540] mb-3">협력 파트너 네트워크</h3>
                <p className="text-sm text-gray-600 leading-relaxed">함께 공부한 동료가 미래의 투자·거래·사업 파트너가 됩니다.</p>
              </div>
              <div className="bg-white rounded-xl p-6 lg:p-8 border-t-4 border-[#D4AF77] shadow-sm">
                <p className="text-5xl font-extrabold text-gray-200 mb-4">03</p>
                <h3 className="text-lg font-bold text-[#0A2540] mb-3">실전으로 연결</h3>
                <p className="text-sm text-gray-600 leading-relaxed">1:1 컨설팅, VIP 현장 섀도우, 합격 후 실무 교육 및 채용 연계까지. 합격은 끝이 아닌 시작입니다.</p>
              </div>
            </div>
          </div>
        </section>

        {/* S3: PRICING */}
        <section id="program" className="snap-section bg-[#F5F5F5]">
          <div className="inner">
            <p className="text-sm font-bold text-[#D4AF77] tracking-widest mb-3">PROGRAM</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0A2540] mb-3 break-keep">나에게 맞는 과정을 선택하세요</h2>
            <div className="w-12 h-1 bg-[#0A2540] mb-10" />

            <div className="grid md:grid-cols-3 gap-8">
              {/* Offline Premium */}
              <div className="bg-white rounded-xl p-6 lg:p-8 border-t-4 border-[#D4AF77] relative overflow-visible shadow-sm">
                <span className="inline-block bg-[#D4AF77] text-white text-xs font-bold px-3 py-1 rounded-full mb-4">추천 · 최대 혜택</span>
                <h3 className="text-xl font-bold text-[#0A2540] mb-1">오프라인 프리미엄</h3>
                <p className="text-sm text-gray-500 mb-4">강남역 17층 · 오전 09:00~11:30 출석</p>
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-3xl font-extrabold text-[#D4AF77]">199만원</span>
                  <span className="text-sm text-gray-400 line-through">210만원</span>
                </div>
                <span className="inline-block text-xs text-[#D4AF77] border border-[#D4AF77] px-2 py-0.5 rounded mb-4">11만원 절약</span>
                <hr className="border-gray-200 mb-4" />
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2"><CheckCircle2 className="text-[#D4AF77] w-4 h-4 shrink-0" /> <span className="font-semibold text-[#0A2540]">오후 6시까지 지정석 자습</span></div>
                  <div className="flex items-center gap-2"><CheckCircle2 className="text-[#D4AF77] w-4 h-4 shrink-0" /> 정기모임 오프+온라인</div>
                  <div className="flex items-center gap-2"><CheckCircle2 className="text-[#D4AF77] w-4 h-4 shrink-0" /> 월 1회 개인 면담</div>
                  <div className="flex items-center gap-2"><CheckCircle2 className="text-[#D4AF77] w-4 h-4 shrink-0" /> VIP 현장 섀도우</div>
                  <div className="flex items-center gap-2"><CheckCircle2 className="text-[#D4AF77] w-4 h-4 shrink-0" /> 우수회원 채용 연계</div>
                </div>
              </div>

              {/* Online A */}
              <div className="bg-white rounded-xl p-6 lg:p-8 border-t-4 border-gray-200 shadow-sm">
                <h3 className="text-xl font-bold text-[#0A2540] mb-1 mt-2">온라인 A <span className="text-base font-normal text-gray-500">(출석형)</span></h3>
                <p className="text-sm text-gray-500 mb-4">저녁 구글밋 라이브 · 직장인 · 지방 거주자</p>
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-3xl font-extrabold text-[#D4AF77]">79만원</span>
                  <span className="text-sm text-gray-400 line-through">90만원</span>
                </div>
                <span className="inline-block text-xs text-[#D4AF77] border border-[#D4AF77] px-2 py-0.5 rounded mb-4">11만원 절약</span>
                <hr className="border-gray-200 mb-4" />
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2"><CheckCircle2 className="text-[#D4AF77] w-4 h-4 shrink-0" /> 정기모임 오프+온라인</div>
                  <div className="flex items-center gap-2"><CheckCircle2 className="text-[#D4AF77] w-4 h-4 shrink-0" /> 우수회원 채용 연계</div>
                  <div className="flex items-center gap-2 text-gray-300"><XCircle className="w-4 h-4 shrink-0" /> 지정석 자습</div>
                  <div className="flex items-center gap-2 text-gray-300"><XCircle className="w-4 h-4 shrink-0" /> 개인 면담</div>
                  <div className="flex items-center gap-2 text-gray-300"><XCircle className="w-4 h-4 shrink-0" /> VIP 섀도우</div>
                </div>
              </div>

              {/* Online B */}
              <div className="bg-white rounded-xl p-6 lg:p-8 border-t-4 border-gray-200 shadow-sm">
                <h3 className="text-xl font-bold text-[#0A2540] mb-1 mt-2">온라인 B <span className="text-base font-normal text-gray-500">(자율형)</span></h3>
                <p className="text-sm text-gray-500 mb-4">자율 인증 · 자기관리 잘 되는 분</p>
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-3xl font-extrabold text-[#D4AF77]">49만원</span>
                  <span className="text-sm text-gray-400 line-through">60만원</span>
                </div>
                <span className="inline-block text-xs text-[#D4AF77] border border-[#D4AF77] px-2 py-0.5 rounded mb-4">11만원 절약</span>
                <hr className="border-gray-200 mb-4" />
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2"><CheckCircle2 className="text-[#D4AF77] w-4 h-4 shrink-0" /> 정기모임 오프+온라인</div>
                  <div className="flex items-center gap-2"><CheckCircle2 className="text-[#D4AF77] w-4 h-4 shrink-0" /> 우수회원 채용 연계</div>
                  <div className="flex items-center gap-2 text-gray-300"><XCircle className="w-4 h-4 shrink-0" /> 지정석 자습</div>
                  <div className="flex items-center gap-2 text-gray-300"><XCircle className="w-4 h-4 shrink-0" /> 개인 면담</div>
                  <div className="flex items-center gap-2 text-gray-300"><XCircle className="w-4 h-4 shrink-0" /> VIP 섀도우</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* S4: ATTENDANCE */}
        <section id="attendance" className="snap-section bg-[#F5F5F5]">
          <div className="inner text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0A2540] mb-4 break-keep">
              합격은 &ldquo;루틴&rdquo;에서 결정됩니다
            </h2>
            <p className="text-base md:text-lg text-gray-500 mb-10">의지만으로는 6개월을 버티기 어렵습니다. 구조가 완주를 만듭니다.</p>

            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                <h3 className="text-lg font-bold text-[#D4AF77] mb-2">오프라인</h3>
                <p className="text-gray-600 text-sm">오전 9:00~11:30 강제 출석<br />이후 오후 6시까지 자율 자습</p>
              </div>
              <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                <h3 className="text-lg font-bold text-[#D4AF77] mb-2">온라인 A</h3>
                <p className="text-gray-600 text-sm">저녁 라이브 출석 인증</p>
              </div>
              <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                <h3 className="text-lg font-bold text-[#D4AF77] mb-2">온라인 B</h3>
                <p className="text-gray-600 text-sm">자율 공부 내역 인증<br />커뮤니티 기록 공유</p>
              </div>
            </div>

            <p className="mt-8 text-base font-bold text-[#0A2540] bg-white py-3 px-6 rounded-lg inline-block border border-gray-200 break-keep">
              &ldquo;오전 출석이 더트웰브의 가장 강력한 완주 장치입니다.&rdquo;
            </p>
          </div>
        </section>

        {/* S5: MONTHLY MEETING */}
        <section id="meeting" className="snap-section bg-white">
          <div className="inner">
            <div className="flex flex-col lg:flex-row gap-10 items-center">
              <div className="flex-1">
                <h2 className="text-3xl md:text-4xl font-bold text-[#0A2540] mb-4 leading-snug break-keep">
                  매월 첫째 금요일 저녁 7시 —<br />진짜 네트워크가 만들어지는 시간
                </h2>
                <p className="text-base text-gray-500 mb-6">시험 공부를 넘어, 함께 성장합니다.</p>

                <div className="space-y-3 bg-[#F5F5F5] p-5 rounded-xl">
                  <div className="flex items-center gap-3 text-sm">
                    <Calendar className="text-[#D4AF77] w-5 h-5 shrink-0" />
                    <span className="font-semibold text-[#0A2540]">매월 첫째 금요일 19:00 ~ 22:00</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <MapPin className="text-[#D4AF77] w-5 h-5 shrink-0" />
                    <span className="font-semibold text-[#0A2540]">강남역 더트웰브 오피스 (온라인 동시 참여)</span>
                  </div>
                </div>
              </div>

              <div className="flex-1 bg-[#F5F5F5] p-6 rounded-2xl">
                <h3 className="text-lg font-bold text-[#0A2540] mb-4">모임에서 다루는 것들</h3>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-[#D4AF77] shrink-0 mt-0.5" /> 투자·커리어 경험 공유</li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-[#D4AF77] shrink-0 mt-0.5" /> 과목별 공부법 & 고득점 전략</li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-[#D4AF77] shrink-0 mt-0.5" /> 서울 부동산 시장 분석</li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-[#D4AF77] shrink-0 mt-0.5" /> 경매 실무 & 프롭테크 트렌드</li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-[#D4AF77] shrink-0 mt-0.5" /> 실제 임장 투어 기획</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* S6: LEADER */}
        <section id="leader" className="snap-section bg-[#F5F5F5]">
          <div className="inner">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A2540] mb-8 text-center break-keep">
              17년 현장 경험의 전문가가<br />첫걸음을 함께 설계합니다
            </h2>

            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="md:w-1/4 w-full shrink-0 text-center">
                <div className="w-32 h-32 mx-auto bg-gray-200 rounded-full overflow-hidden flex items-center justify-center">
                  <Users className="w-12 h-12 text-gray-400" />
                </div>
                <h3 className="text-xl font-bold text-[#0A2540] mt-3">안혜린 대표</h3>
                <p className="text-[#D4AF77] text-sm font-semibold">THE 12 Founder</p>
                <p className="text-xs text-gray-500 mt-1">한양대 법학 / 서울대 도시계획<br />KAIST·Aalto Univ. 창업 과정</p>
              </div>

              <div className="md:w-3/4 w-full space-y-4">
                <div className="grid md:grid-cols-2 gap-2 text-sm text-gray-600">
                  <div className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-[#D4AF77] shrink-0 mt-0.5" /> 부동산 실무 17년 (시행·개발·컨설팅)</div>
                  <div className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-[#D4AF77] shrink-0 mt-0.5" /> 에이블하우스 18개 지점 → 직방 엑싯</div>
                  <div className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-[#D4AF77] shrink-0 mt-0.5" /> 국토부 청년주택 자문위원</div>
                  <div className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-[#D4AF77] shrink-0 mt-0.5" /> 서울시 스타트업 특별위원회</div>
                  <div className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-[#D4AF77] shrink-0 mt-0.5" /> 순천향대 겸임교수 4년</div>
                  <div className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-[#D4AF77] shrink-0 mt-0.5" /> Growth Log 270명 커뮤니티 운영</div>
                </div>

                <div className="bg-white p-5 rounded-xl border-l-4 border-[#D4AF77]">
                  <p className="text-[#0A2540] text-sm font-medium leading-relaxed break-keep">
                    &ldquo;내 주변 사람들의 부동산 투자를 내가 챙겨줄 수 있는 사람이 되고 싶습니다. 더트웰브는 그 마음을 공유하는 사람들이 서로의 평생 파트너가 되는 공간입니다.&rdquo;
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* S7: OT */}
        <section id="ot" className="snap-section bg-white">
          <div className="inner text-center">
            <Badge className="bg-[#D4AF77] text-white mb-4 border-none">선착순 무료</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A2540] mb-4 break-keep">먼저 OT에 참여해보세요</h2>
            <p className="text-base text-gray-500 mb-8 break-keep">
              프로그램 운영 방식과 커뮤니티 철학을 직접 확인하세요.<br className="hidden md:block" />
              OT 참석 후 등록 여부를 결정하셔도 됩니다.
            </p>

            <div className="flex flex-col gap-3 max-w-sm mx-auto mb-6">
              <div className="bg-[#F5F5F5] p-3 rounded-lg flex justify-between items-center text-sm"><strong>1차</strong> <span>4/17 (금) 19:00~20:30</span></div>
              <div className="bg-[#F5F5F5] p-3 rounded-lg flex justify-between items-center text-sm"><strong>2차</strong> <span>4/24 (금) 19:00~20:30</span></div>
              <div className="bg-[#F5F5F5] p-3 rounded-lg flex justify-between items-center text-sm"><strong>3차</strong> <span>4/30 (목) 19:00~20:30</span></div>
            </div>
            <p className="text-xs text-gray-400 mb-6">* 회당 참석 인원 확인 후 강남 지역 장소 안내</p>

            <p className="text-sm text-[#0A2540] bg-[#D4AF77]/15 py-2 px-4 rounded-lg font-bold mb-6 inline-block break-keep">
              수퍼 얼리버드(최대 11만원 추가 할인)는 4/17 OT 이전 등록자에게만 적용
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-3">
              <Button size="lg" className="bg-[#0A2540] hover:bg-[#1a385b] text-white h-12 px-8" render={<a href={GOOGLE_FORM_URL} target="_blank" rel="noopener noreferrer" />} nativeButton={false}>
                OT 신청하기
              </Button>
              <Button size="lg" className="bg-[#D4AF77] hover:bg-[#c09f6a] text-white h-12 px-8" render={<a href={GOOGLE_FORM_URL} target="_blank" rel="noopener noreferrer" />} nativeButton={false}>
                바로 등록하기
              </Button>
            </div>
          </div>
        </section>

        {/* S8: TOOLS */}
        <section id="tools" className="snap-section bg-[#F5F5F5]">
          <div className="inner text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A2540] mb-3 break-keep">시스템으로 운영되는 커뮤니티</h2>
            <p className="text-base text-gray-500 mb-10">
              270명 개발자 커뮤니티 그로스로그 5기 운영 경험을 그대로 적용합니다.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm text-center">
                <Hash className="w-7 h-7 text-[#D4AF77] mx-auto mb-2" />
                <h4 className="font-bold text-sm mb-1">Slack</h4>
                <p className="text-xs text-gray-500">실시간 질의응답</p>
              </div>
              <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm text-center">
                <FileText className="w-7 h-7 text-[#D4AF77] mx-auto mb-2" />
                <h4 className="font-bold text-sm mb-1">Notion</h4>
                <p className="text-xs text-gray-500">학습 로그·일정</p>
              </div>
              <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm text-center">
                <HardDrive className="w-7 h-7 text-[#D4AF77] mx-auto mb-2" />
                <h4 className="font-bold text-sm mb-1">Google Drive</h4>
                <p className="text-xs text-gray-500">강의 자료·녹화본</p>
              </div>
              <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm text-center">
                <MessageSquare className="w-7 h-7 text-[#D4AF77] mx-auto mb-2" />
                <h4 className="font-bold text-sm mb-1">카카오채널</h4>
                <p className="text-xs text-gray-500">공지·알림</p>
              </div>
              <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm text-center col-span-2 md:col-span-1">
                <MessageCircle className="w-7 h-7 text-[#D4AF77] mx-auto mb-2" />
                <h4 className="font-bold text-sm mb-1">오픈채팅</h4>
                <p className="text-xs text-gray-500">빠른 일상 소통</p>
              </div>
            </div>
          </div>
        </section>

        {/* S9: FAQ */}
        <section id="faq" className="snap-section bg-white">
          <div className="inner">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-[#0A2540] mb-8">FAQ</h2>
            <div className="lg:overflow-y-auto lg:max-h-[calc(100dvh-12rem)] faq-scroll">
              <Accordion className="w-full">
                <AccordionItem value="faq-1">
                  <AccordionTrigger className="text-left font-semibold text-base py-3">Q. 오프라인은 매일 가야 하나요?</AccordionTrigger>
                  <AccordionContent className="text-gray-600 text-sm pb-4">
                    오전 9:00~11:30은 필수 출석이며, 월 2회 개인 일정 양해 가능합니다. 이후 오후 6시까지 자습 공간으로 자유롭게 이용 가능합니다.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="faq-2">
                  <AccordionTrigger className="text-left font-semibold text-base py-3">Q. 직장인도 온라인으로 참여 가능한가요?</AccordionTrigger>
                  <AccordionContent className="text-gray-600 text-sm pb-4">
                    네, 온라인 A(저녁 라이브)과 온라인 B(자율 인증) 중 선택 가능합니다.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="faq-3">
                  <AccordionTrigger className="text-left font-semibold text-base py-3">Q. VIP 섀도우 참여는?</AccordionTrigger>
                  <AccordionContent className="text-gray-600 text-sm pb-4">
                    오프라인 회원 중 신청·심사 후 실제 자산 컨설팅 현장 동행 기회를 드립니다.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="faq-4">
                  <AccordionTrigger className="text-left font-semibold text-base py-3">Q. 교재는 제공되나요?</AccordionTrigger>
                  <AccordionContent className="text-gray-600 text-sm pb-4">
                    별도 교재 없이 수강 강의 교재나 시험지로 자유롭게 독학합니다.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="faq-5">
                  <AccordionTrigger className="text-left font-semibold text-base py-3">Q. 환불 정책은?</AccordionTrigger>
                  <AccordionContent className="text-gray-600 text-sm pb-4">
                    1차 정기모임 전 취소 시 100% 환불합니다.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="faq-6">
                  <AccordionTrigger className="text-left font-semibold text-base py-3">Q. 운영진으로 참여할 수 있나요?</AccordionTrigger>
                  <AccordionContent className="text-gray-600 text-sm pb-4">
                    OT 신청 폼에서 운영진 지원 의사를 표시해주시면 별도 안내드립니다.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="faq-7">
                  <AccordionTrigger className="text-left font-semibold text-base py-3">Q. 합격 후 실무 교육은?</AccordionTrigger>
                  <AccordionContent className="text-gray-600 text-sm pb-4">
                    시험 후 12월~2월 실무 교육 진행. 1기 회원은 50% 할인 참여 가능합니다.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>

        {/* S10: FINAL CTA */}
        <section id="cta" className="snap-section bg-[#0A2540] text-white text-center">
          <div className="inner">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-snug break-keep">
              부동산 네트워크의 새로운 에너지,<br />더트웰브와 함께 시작하세요.
            </h2>
            <p className="text-base md:text-lg text-gray-300 mb-10 leading-relaxed break-keep">
              2026년 10월 시험까지 6개월.<br />
              각자의 전문성을 가진 사람들이 부동산이라는 공통 언어로 모여,<br className="hidden md:block" />
              서로의 평생 파트너가 되는 여정입니다.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" className="bg-[#D4AF77] hover:bg-[#c09f6a] text-white h-14 w-56 text-lg font-bold" render={<a href={GOOGLE_FORM_URL} target="_blank" rel="noopener noreferrer" />} nativeButton={false}>
                수퍼 얼리버드 등록하기
              </Button>
              <Button size="lg" className="bg-white hover:bg-gray-100 text-[#0A2540] h-14 w-56 text-lg font-bold" render={<a href={GOOGLE_FORM_URL} target="_blank" rel="noopener noreferrer" />} nativeButton={false}>
                무료 OT 신청하기
              </Button>
            </div>
          </div>
        </section>
      </main>

      <StickyCTA />
    </>
  );
}
