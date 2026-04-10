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
import { CheckCircle2, XCircle, Users, Briefcase, Rocket, Calendar, MapPin, Hash, FileText, HardDrive, MessageSquare, MessageCircle } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F5F5F5] font-sans pb-24">
      {/* SECTION 1: HERO */}
      <section className="bg-[#0A2540] text-white py-20 px-6 relative overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10">
          <Badge className="bg-[#D4AF77] text-white mb-6 border-none hover:bg-[#c09f6a]">THE 12 1기 모집중</Badge>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 break-keep">
            당신의 인생에 부동산이라는 <br className="hidden md:block"/>무기를 장착하십시오.
            <span className="block text-2xl md:text-3xl mt-4 font-normal text-gray-200">
              수강생이 아닌, 미래의 협력 파트너를 찾습니다.
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-[#D4AF77] mb-8 font-semibold break-keep">
            THE 12 — 우리는 단순한 합격 스터디가 아닙니다.<br className="hidden md:block" />
            <span className="text-gray-300 font-light">대한민국 부동산 네트워크의 새로운 에너지가 될 것입니다.</span>
          </p>

          <div className="flex flex-col gap-3 mb-10 text-sm md:text-base">
            <div className="flex items-center gap-2"><CheckCircle2 className="text-[#D4AF77] w-5 h-5 shrink-0"/> 17년차 부동산 전문가 직접 운영</div>
            <div className="flex items-center gap-2"><CheckCircle2 className="text-[#D4AF77] w-5 h-5 shrink-0"/> 강남역 17층 지정석 + 오전 강제 출석 시스템</div>
            <div className="flex items-center gap-2"><CheckCircle2 className="text-[#D4AF77] w-5 h-5 shrink-0"/> 합격 후 실무 교육 50% 할인 + 채용 연계</div>
          </div>

          <CountdownTimer />

          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <Button size="lg" className="w-full sm:w-auto bg-[#D4AF77] hover:bg-[#b08e5e] text-white font-bold text-lg h-14" render={<a href="https://forms.gle/6emzu92WCEXXiAiz5" target="_blank" rel="noopener noreferrer" />} nativeButton={false}>
              수퍼 얼리버드 신청하기 (4/17 OT 전 마감)
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto border-white text-black hover:bg-gray-100 font-bold text-lg h-14" render={<a href="https://forms.gle/6emzu92WCEXXiAiz5" target="_blank" rel="noopener noreferrer" />} nativeButton={false}>
              무료 OT 참석하기
            </Button>
          </div>
        </div>
      </section>

      {/* SECTION 2: WHY THE 12? */}
      <section className="py-20 px-6 max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-[#0A2540] mb-8 leading-snug break-keep">
          부동산 시장은 힘들다는데, <br className="hidden md:block" />
          공인중개사 시험이 왜 여전히 <br className="hidden md:block" />
          가장 확실한 부동산 커리어의 초석인가?
        </h2>
        <div className="text-lg text-gray-600 mb-12 leading-relaxed space-y-6">
          <p>
            에어비앤비, 단기 수익화, 경매, 부동산 투자...<br/>
            관심은 넘치지만 진짜 '뼈대'는 없는 상태로<br/>
            단편적인 지식만 쌓고 있지는 않으신가요?
          </p>
          <p>
            공인중개사 시험은 단순한 자격증 시험이 아닙니다.<br/>
            부동산학개론·민법·중개사법·공법·공시세법·중개실무를 통해<br/>
            부동산의 법적구조, 도시계획, 세무 전략, 실전 거래까지<br/>
            총체적으로 이해하는 <strong>유일한 체계적 커리큘럼</strong>입니다.
          </p>
          <p className="font-bold text-[#0A2540]">
            돌아가는 것처럼 보여도,<br/>
            인생 전체를 놓고 보면 가장 앞서가는 길입니다.<br/>
            내 주변 모든 사람의 부동산을 평생 챙겨줄 수 있는 사람.<br/>
            더트웰브는 그 자리를 목표로 합니다.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <Briefcase className="w-8 h-8 text-[#D4AF77] mb-2"/>
              <CardTitle>두 번째 전문 영역</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 text-sm leading-relaxed">기존 커리어에 부동산 전문성을 더해 누구도 쉽게 넘볼 수 없는 경쟁력을 만드세요.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <Users className="w-8 h-8 text-[#D4AF77] mb-2"/>
              <CardTitle>협력 파트너 네트워크</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 text-sm leading-relaxed">함께 공부한 동료가 미래의 투자 파트너, 거래 파트너, 사업 파트너가 됩니다.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <Rocket className="w-8 h-8 text-[#D4AF77] mb-2"/>
              <CardTitle>실전으로 연결</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 text-sm leading-relaxed">시험 합격 후 실무 교육, VIP 컨설팅 현장 섀도우, 우수회원 채용 연계까지. 끝이 아닌 시작입니다.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* SECTION 3: PROGRAM PRICING/COMPARISON */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#0A2540] mb-12">나에게 맞는 방식을 선택하세요</h2>
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Offline */}
            <Card className="border-2 border-[#D4AF77] shadow-lg relative overflow-visible flex flex-col">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#D4AF77] text-white px-4 py-1 rounded-full text-sm font-bold whitespace-nowrap">RECOMMENDED</div>
              <CardHeader className="text-center pt-10">
                <CardTitle className="text-2xl text-[#0A2540]">오프라인 프리미엄</CardTitle>
                <CardDescription className="mt-2 font-medium">확실한 합격 + 최대 혜택 원하는 분</CardDescription>
                <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                  <div className="text-sm font-bold text-[#D4AF77] mb-1">수퍼 얼리버드</div>
                  <div className="text-3xl font-extrabold text-[#0A2540]">199<span className="text-lg">만원</span></div>
                  <div className="text-gray-500 text-sm mt-1 line-through">1기 특가 210만원</div>
                </div>
              </CardHeader>
              <CardContent className="flex-1 space-y-4">
                <div className="flex items-start gap-2 text-sm"><CheckCircle2 className="text-[#D4AF77] w-5 h-5 shrink-0 mt-0.5"/> <span className="font-semibold text-[#0A2540]">오전 9:00~11:30 오피스 출석</span></div>
                <div className="flex items-start gap-2 text-sm"><CheckCircle2 className="text-[#D4AF77] w-5 h-5 shrink-0 mt-0.5"/> <span className="font-semibold text-[#0A2540]">오후 6시까지 지정석 자습</span></div>
                <div className="flex items-start gap-2 text-sm"><CheckCircle2 className="text-[#D4AF77] w-5 h-5 shrink-0 mt-0.5"/> 오프+온라인 정기모임 각 1회</div>
                <div className="flex items-start gap-2 text-sm"><CheckCircle2 className="text-[#D4AF77] w-5 h-5 shrink-0 mt-0.5"/> 월 1회 개인 면담</div>
                <div className="flex items-start gap-2 text-sm"><CheckCircle2 className="text-[#D4AF77] w-5 h-5 shrink-0 mt-0.5"/> VIP 현장 섀도우 특권</div>
                <div className="flex items-start gap-2 text-sm"><CheckCircle2 className="text-[#D4AF77] w-5 h-5 shrink-0 mt-0.5"/> 우수회원 채용 연계</div>
              </CardContent>
            </Card>

            {/* Online A */}
            <Card className="flex flex-col">
              <CardHeader className="text-center pt-8">
                <CardTitle className="text-2xl text-[#0A2540]">온라인 A (출석형)</CardTitle>
                <CardDescription className="mt-2">직장인, 지방 거주자</CardDescription>
                <div className="mt-6 p-4">
                  <div className="text-sm font-bold text-[#0A2540] mb-1">수퍼 얼리버드</div>
                  <div className="text-3xl font-bold text-[#0A2540]">79<span className="text-lg">만원</span></div>
                  <div className="text-gray-400 text-sm mt-1 line-through">1기 특가 90만원</div>
                </div>
              </CardHeader>
              <CardContent className="flex-1 space-y-4">
                <div className="flex items-start gap-2 text-sm"><CheckCircle2 className="text-[#D4AF77] w-5 h-5 shrink-0 mt-0.5"/> 저녁 구글밋 라이브 출석</div>
                <div className="flex items-start gap-2 text-sm"><CheckCircle2 className="text-[#D4AF77] w-5 h-5 shrink-0 mt-0.5"/> 오프+온라인 정기모임 각 1회</div>
                <div className="flex items-start gap-2 text-sm"><CheckCircle2 className="text-[#D4AF77] w-5 h-5 shrink-0 mt-0.5"/> 우수회원 채용 연계</div>
                <div className="flex items-start gap-2 text-sm text-gray-300"><XCircle className="w-5 h-5 shrink-0 mt-0.5"/> 지정석 자습 공간</div>
                <div className="flex items-start gap-2 text-sm text-gray-300"><XCircle className="w-5 h-5 shrink-0 mt-0.5"/> 월 1회 개인 면담</div>
                <div className="flex items-start gap-2 text-sm text-gray-300"><XCircle className="w-5 h-5 shrink-0 mt-0.5"/> VIP 현장 섀도우 특권</div>
              </CardContent>
            </Card>

            {/* Online B */}
            <Card className="flex flex-col">
              <CardHeader className="text-center pt-8">
                <CardTitle className="text-2xl text-[#0A2540]">온라인 B (자율형)</CardTitle>
                <CardDescription className="mt-2">자기관리가 잘 되는 분</CardDescription>
                <div className="mt-6 p-4">
                  <div className="text-sm font-bold text-[#0A2540] mb-1">수퍼 얼리버드</div>
                  <div className="text-3xl font-bold text-[#0A2540]">49<span className="text-lg">만원</span></div>
                  <div className="text-gray-400 text-sm mt-1 line-through">1기 특가 60만원</div>
                </div>
              </CardHeader>
              <CardContent className="flex-1 space-y-4">
                <div className="flex items-start gap-2 text-sm"><CheckCircle2 className="text-[#D4AF77] w-5 h-5 shrink-0 mt-0.5"/> 자율 공부 내역 인증 공유</div>
                <div className="flex items-start gap-2 text-sm"><CheckCircle2 className="text-[#D4AF77] w-5 h-5 shrink-0 mt-0.5"/> 오프+온라인 정기모임 각 1회</div>
                <div className="flex items-start gap-2 text-sm"><CheckCircle2 className="text-[#D4AF77] w-5 h-5 shrink-0 mt-0.5"/> 우수회원 채용 연계</div>
                <div className="flex items-start gap-2 text-sm text-gray-300"><XCircle className="w-5 h-5 shrink-0 mt-0.5"/> 지정석 자습 공간</div>
                <div className="flex items-start gap-2 text-sm text-gray-300"><XCircle className="w-5 h-5 shrink-0 mt-0.5"/> 월 1회 개인 면담</div>
                <div className="flex items-start gap-2 text-sm text-gray-300"><XCircle className="w-5 h-5 shrink-0 mt-0.5"/> VIP 현장 섀도우 특권</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* SECTION 4: 출석 규칙 */}
      <section className="py-20 px-6 bg-[#0A2540] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">당신의 합격은 "루틴"에서 결정됩니다.</h2>
          <p className="text-lg text-gray-300 mb-10">의지만으로는 6개월을 버티기 어렵습니다. 더트웰브는 구조가 완주를 만들어냅니다.</p>
          
          <div className="grid md:grid-cols-3 gap-4 text-left">
            <div className="bg-white/10 p-6 rounded-xl border border-white/20">
              <h3 className="text-xl font-bold text-[#D4AF77] mb-3">오프라인</h3>
              <p className="text-gray-200">오전 9:00~11:30 강제 출석<br/>→ 이후 오후 6시까지 자율 자습</p>
            </div>
            <div className="bg-white/10 p-6 rounded-xl border border-white/20">
              <h3 className="text-xl font-bold text-[#D4AF77] mb-3">온라인 A</h3>
              <p className="text-gray-200">저녁 라이브 출석 인증</p>
            </div>
            <div className="bg-white/10 p-6 rounded-xl border border-white/20">
              <h3 className="text-xl font-bold text-[#D4AF77] mb-3">온라인 B</h3>
              <p className="text-gray-200">자율 공부 내역 인증<br/>→ 커뮤니티 기록 공유</p>
            </div>
          </div>
          
          <p className="mt-10 text-xl font-bold text-[#D4AF77] bg-[#D4AF77]/10 py-4 px-6 rounded-lg inline-block break-keep">
            "오전 출석이 더트웰브의 가장 강력한 완주 장치입니다."
          </p>
        </div>
      </section>

      {/* SECTION 5: 월 1회 정기모임 */}
      <section className="py-20 px-6 max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A2540] mb-6 leading-snug break-keep">
              매월 첫째 금요일 저녁 7시 —<br/>
              진짜 부동산 네트워크가 <br className="hidden md:block" />만들어지는 시간
            </h2>
            <p className="text-lg text-gray-600 mb-8 font-medium">시험 공부를 넘어, 함께 성장합니다.</p>
            
            <div className="space-y-4 mb-8 bg-gray-50 p-6 rounded-xl border">
              <div className="flex items-center gap-3">
                <Calendar className="text-[#D4AF77] w-6 h-6 shrink-0"/>
                <span className="font-semibold text-[#0A2540]">매월 첫째 금요일 19:00 ~ 22:00</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="text-[#D4AF77] w-6 h-6 shrink-0"/>
                <span className="font-semibold text-[#0A2540]">강남역 더트웰브 오피스 (온라인 동시 참여 가능)</span>
              </div>
            </div>
          </div>
          
          <div className="flex-1 bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
            <h3 className="text-xl font-bold text-[#0A2540] mb-6">모임에서 다루는 것들</h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-[#D4AF77] shrink-0 mt-0.5"/> 구성원 소개 및 투자·커리어 경험 공유</li>
              <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-[#D4AF77] shrink-0 mt-0.5"/> 과목별 공부 방법론 & 고득점 전략</li>
              <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-[#D4AF77] shrink-0 mt-0.5"/> 서울 지역별 부동산 시장 분석</li>
              <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-[#D4AF77] shrink-0 mt-0.5"/> 물건 유형별 특강 (주택·상가·건물·토지)</li>
              <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-[#D4AF77] shrink-0 mt-0.5"/> 경매 실무 & 프롭테크 트렌드</li>
              <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-[#D4AF77] shrink-0 mt-0.5"/> 실제 임장 투어 기획 및 진행</li>
              <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-[#D4AF77] shrink-0 mt-0.5"/> 원하는 구성원의 자발적 세미나 확장</li>
            </ul>
          </div>
        </div>
      </section>

      {/* SECTION 6: 리더 소개 */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0A2540] mb-12 text-center leading-snug break-keep">
            17년간 모든 현장을 직접 경험한 전문가가<br/>
            여러분의 첫걸음을 함께 설계합니다.
          </h2>
          
          <div className="flex flex-col md:flex-row gap-10 items-start">
            <div className="md:w-1/3 w-full shrink-0">
              <div className="aspect-[4/5] bg-gray-200 rounded-2xl overflow-hidden relative">
                <div className="absolute inset-0 flex items-center justify-center text-gray-400 bg-gradient-to-tr from-gray-300 to-gray-100">
                  <Users className="w-20 h-20 opacity-50" />
                </div>
              </div>
              <div className="mt-6 text-center md:text-left">
                <h3 className="text-2xl font-bold text-[#0A2540]">안혜린 대표</h3>
                <p className="text-[#D4AF77] font-semibold mt-1">THE 12 Founder</p>
              </div>
            </div>
            
            <div className="md:w-2/3 w-full space-y-8">
              <div>
                <h4 className="text-xl font-bold text-[#0A2540] mb-3 border-b pb-2">학력</h4>
                <ul className="text-gray-600 space-y-1">
                  <li>한양대학교 법학과</li>
                  <li>서울대학교 환경대학원 도시계획 전공</li>
                  <li>KAIST·Aalto University(핀란드) 창업 과정</li>
                  <li>한국방송통신대 컴퓨터과학과 재학 중</li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-xl font-bold text-[#0A2540] mb-3 border-b pb-2">경력 하이라이트</h4>
                <ul className="text-gray-600 space-y-2">
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-[#D4AF77] shrink-0 mt-0.5"/> 2010~현재: 부동산 실무 17년 (쉐어하우스·임대관리·시행·개발·컨설팅 전 영역)</li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-[#D4AF77] shrink-0 mt-0.5"/> 코티에이블 창업 → 에이블하우스 18개 지점 → 직방 자산매각·엑싯</li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-[#D4AF77] shrink-0 mt-0.5"/> 국토교통부 청년주택 자문위원</li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-[#D4AF77] shrink-0 mt-0.5"/> 서울시 스타트업 특별위원회 위원</li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-[#D4AF77] shrink-0 mt-0.5"/> 순천향대 겸임교수 (4년)</li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-[#D4AF77] shrink-0 mt-0.5"/> 디캠프 디데이 105개 팀 대상</li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-[#D4AF77] shrink-0 mt-0.5"/> Growth Log (개발자 커뮤니티) 창립자·운영자 — 270명, 5기 운영 중</li>
                </ul>
              </div>
              
              <div className="bg-[#F5F5F5] p-6 rounded-xl border-l-4 border-[#D4AF77]">
                <p className="text-[#0A2540] font-medium leading-relaxed break-keep">
                  "내 주변 사람들의 가장 소중한 부동산 투자는 내가 챙겨줄 수 있는 사람이 되고 싶습니다. 더트웰브는 그 마음을 공유하는 사람들이 모여 서로의 평생 파트너가 되는 공간입니다."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: OT 신청 */}
      <section className="py-20 px-6 max-w-4xl mx-auto text-center">
        <Badge className="bg-[#D4AF77] text-white mb-4">선착순 무료</Badge>
        <h2 className="text-3xl md:text-4xl font-bold text-[#0A2540] mb-6">먼저 OT에 참여해보세요</h2>
        <p className="text-lg text-gray-600 mb-8 break-keep">
          OT에서는 프로그램 운영 방식, 커뮤니티 철학, 기대치를 공유하고 실제 공간을 경험하실 수 있습니다.<br className="hidden md:block" />
          OT 참석 후 등록을 결정하셔도 됩니다.
        </p>

        <div className="flex justify-center gap-4 mb-8 text-left max-w-md mx-auto">
          <ul className="space-y-3 w-full">
            <li className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 flex justify-between items-center"><strong className="text-[#0A2540]">1차:</strong> <span>4월 17일 (금) 19:00 ~ 20:30</span></li>
            <li className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 flex justify-between items-center"><strong className="text-[#0A2540]">2차:</strong> <span>4월 24일 (금) 19:00 ~ 20:30</span></li>
            <li className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 flex justify-between items-center"><strong className="text-[#0A2540]">3차:</strong> <span>4월 30일 (목) 19:00 ~ 20:30</span></li>
          </ul>
        </div>
        <p className="text-sm text-gray-500 mb-6">* 회당 참석 인원 확인 후 강남 지역 장소 안내 예정입니다.</p>
        
        <p className="text-[#0A2540] bg-[#D4AF77]/20 py-3 px-6 rounded-lg font-bold mb-8 inline-block">
          🔥 단, 수퍼 얼리버드(최대 11만원 추가 할인)는 4월 17일 1차 OT 이전 등록자에게만 적용됩니다.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button size="lg" className="bg-[#0A2540] hover:bg-[#1a385b] text-white h-14 w-full sm:w-auto px-10 text-lg" render={<a href="https://forms.gle/6emzu92WCEXXiAiz5" target="_blank" rel="noopener noreferrer" />} nativeButton={false}>
            📅 OT 신청하기
          </Button>
          <Button size="lg" className="bg-[#D4AF77] hover:bg-[#b08e5e] text-white h-14 w-full sm:w-auto px-10 text-lg" render={<a href="https://forms.gle/6emzu92WCEXXiAiz5" target="_blank" rel="noopener noreferrer" />} nativeButton={false}>
            🔥 바로 등록하기
          </Button>
        </div>
      </section>

      {/* SECTION 8: 운영 툴 & 신뢰 섹션 */}
      <section className="bg-[#0A2540] py-20 px-6 text-white text-center">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 break-keep">커뮤니티는 말이 아니라 시스템으로 운영됩니다.</h2>
          <p className="text-lg text-gray-300 mb-12">
            300여명 개발자 커뮤니티 그로스로그 5기 운영 경험을 그대로 더트웰브에 적용합니다.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 text-left">
            <div className="bg-white/5 border border-white/10 p-5 rounded-xl text-center md:text-left flex flex-col items-center md:items-start">
              <Hash className="w-8 h-8 text-[#D4AF77] mb-3"/>
              <h4 className="font-bold text-lg mb-1">Slack</h4>
              <p className="text-sm text-gray-400 break-keep">실시간 질의응답, 채널별 소통</p>
            </div>
            <div className="bg-white/5 border border-white/10 p-5 rounded-xl text-center md:text-left flex flex-col items-center md:items-start">
              <FileText className="w-8 h-8 text-[#D4AF77] mb-3"/>
              <h4 className="font-bold text-lg mb-1">Notion</h4>
              <p className="text-sm text-gray-400 break-keep">학습 로그, 일정, 자료 아카이브</p>
            </div>
            <div className="bg-white/5 border border-white/10 p-5 rounded-xl text-center md:text-left flex flex-col items-center md:items-start">
              <HardDrive className="w-8 h-8 text-[#D4AF77] mb-3"/>
              <h4 className="font-bold text-lg mb-1">Google Drive</h4>
              <p className="text-sm text-gray-400 break-keep">강의 자료, 녹화본</p>
            </div>
            <div className="bg-white/5 border border-white/10 p-5 rounded-xl text-center md:text-left flex flex-col items-center md:items-start">
              <MessageSquare className="w-8 h-8 text-[#D4AF77] mb-3"/>
              <h4 className="font-bold text-lg mb-1">카카오채널</h4>
              <p className="text-sm text-gray-400 break-keep">공지, 알림</p>
            </div>
            <div className="bg-white/5 border border-white/10 p-5 rounded-xl text-center md:text-left flex flex-col items-center md:items-start">
              <MessageCircle className="w-8 h-8 text-[#D4AF77] mb-3"/>
              <h4 className="font-bold text-lg mb-1">오픈채팅</h4>
              <p className="text-sm text-gray-400 break-keep">빠른 일상 소통</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 9: FAQ */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-[#0A2540] mb-10">FAQ</h2>
          <Accordion type="single" collapsible="true" className="w-full">
            <AccordionItem value="faq-1">
              <AccordionTrigger className="text-left font-semibold text-lg py-4">Q. 오프라인은 매일 가야 하나요?</AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed text-base pb-6">
                A. 오전 9:00~11:30은 필수 출석입니다. 월 2회 개인 일정 양해 가능합니다.<br/>
                이후 오후 6시까지는 자유롭게 강남 17층 지정석을 자습 공간으로 이용하실 수 있습니다.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="faq-2">
              <AccordionTrigger className="text-left font-semibold text-lg py-4">Q. 직장인인데 온라인으로 참여 가능한가요?</AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed text-base pb-6">
                A. 네, 온라인 A과정(저녁 9:00~11:00 라이브)과 온라인 B과정(자율 인증형) 중 선택 가능합니다.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="faq-3">
              <AccordionTrigger className="text-left font-semibold text-lg py-4">Q. VIP 섀도우 참여는 어떻게 진행되나요?</AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed text-base pb-6">
                A. 오프라인 회원 중 희망 인원이 신청하면 심사 후 실제 자산 컨설팅 현장 동행 기회를 드립니다.<br/>
                시험 일정에 방해되지 않는 선에서 조율합니다.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="faq-4">
              <AccordionTrigger className="text-left font-semibold text-lg py-4">Q. 교재는 제공되나요?</AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed text-base pb-6">
                A. 별도 교재 제공 없이 수강하시는 강의의 교재나 시험지로 자유롭게 독학합니다.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="faq-5">
              <AccordionTrigger className="text-left font-semibold text-lg py-4">Q. 환불 정책은 어떻게 되나요?</AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed text-base pb-6">
                A. 1차 정기모임 전에 취소하는 경우 100% 환불해드립니다.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="faq-6">
              <AccordionTrigger className="text-left font-semibold text-lg py-4">Q. 운영진으로 참여할 수 있나요?</AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed text-base pb-6">
                A. OT 신청 폼에서 운영진 지원 의사를 표시해주세요. 별도 안내드립니다.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="faq-7">
              <AccordionTrigger className="text-left font-semibold text-lg py-4">Q. 합격 후 실무 교육은 언제 시작하나요?</AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed text-base pb-6">
                A. 시험 후 11월 한 달 휴식 후 12월부터 2월까지 합격생 대상 실무 교육을 진행합니다.<br/>
                1기 회원은 50% 할인된 가격으로 참여 가능합니다.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* SECTION 10: 최종 CTA */}
      <section className="py-24 px-6 bg-[#F5F5F5] text-center border-t">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0A2540] mb-6 leading-snug break-keep">
            우리나라 부동산 네트워크의 새로운 에너지,<br/>
            더트웰브와 함께 시작하세요.
          </h2>
          <p className="text-lg text-gray-600 mb-10 leading-relaxed break-keep">
            2026년 10월 31일 시험까지 정확히 6개월.<br/>
            지금 이 순간이 가장 단단한 초석을 다질 타이밍입니다.<br/><br/>
            더트웰브 1기는 단순히 시험을 함께 준비하는 모임이 아닙니다.<br/>
            각자의 전문성을 가진 사람들이 부동산이라는 공통 언어로 모여,<br/>
            서로의 평생 파트너가 되는 여정입니다.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="bg-[#D4AF77] hover:bg-[#b08e5e] text-white h-14 w-full sm:w-auto px-8 text-lg" render={<a href="https://forms.gle/6emzu92WCEXXiAiz5" target="_blank" rel="noopener noreferrer" />} nativeButton={false}>
              🔥 수퍼 얼리버드 지금 등록하기
            </Button>
            <Button size="lg" variant="outline" className="border-[#0A2540] text-[#0A2540] hover:bg-gray-100 font-bold h-14 w-full sm:w-auto px-8 text-lg" render={<a href="https://forms.gle/6emzu92WCEXXiAiz5" target="_blank" rel="noopener noreferrer" />} nativeButton={false}>
              📅 무료 OT 먼저 신청하기
            </Button>
          </div>
        </div>
      </section>

      <StickyCTA />
    </div>
  );
}
