import Nav from "@/components/Nav";
import { CountdownTimer } from "@/components/CountdownTimer";
import FAQ from "@/components/FAQ";
import ScrollReveal from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <>
      <ScrollReveal />
      <Nav />

      {/* ── Hero ── */}
      <section className="hero">
        <div className="hero-inner">
          <div className="hero-left">
            <div className="tag">2026 공인중개사 1기 · THE 12</div>
            <h1>
              당신의 인생에
              <br />
              <strong>부동산이라는 무기</strong>를<br />
              장착하십시오.
            </h1>
            <p className="hero-desc">
              수강생이 아닌, 미래의 협력 파트너를 찾습니다.
              <br />
              강남역 17층 · 소규모 정예 · 17년 전문가 직접 운영
            </p>
            <div className="hero-nums">
              <div className="hero-num">
                <div className="n">
                  17
                  <span
                    style={{
                      fontSize: "0.48em",
                      fontWeight: 400,
                      color: "rgba(255,255,255,.38)",
                    }}
                  >
                    년
                  </span>
                </div>
                <div className="l">부동산 실무 경력</div>
              </div>
              <div className="hero-num">
                <div className="n">
                  6
                  <span
                    style={{
                      fontSize: "0.48em",
                      fontWeight: 400,
                      color: "rgba(255,255,255,.38)",
                    }}
                  >
                    개월
                  </span>
                </div>
                <div className="l">시험까지</div>
              </div>
              <div className="hero-num">
                <div className="n">
                  335
                  <span
                    style={{
                      fontSize: "0.48em",
                      fontWeight: 400,
                      color: "rgba(255,255,255,.38)",
                    }}
                  >
                    명
                  </span>
                </div>
                <div className="l">커뮤니티 누적</div>
              </div>
            </div>
          </div>

          {/* Countdown box */}
          <div className="hero-right">
            <CountdownTimer />
          </div>
        </div>

        {/* Trust strip */}
        <div className="trust-strip">
          <div className="trust-inner">
            <div className="t-item">
              <div className="t-dot" />
              <div>
                <strong>17년 부동산 전문가 직접 운영</strong>
                <p>법·도시계획·스타트업 엑싯·프롭테크</p>
              </div>
            </div>
            <div className="t-item">
              <div className="t-dot" />
              <div>
                <strong>강남역 17층 지정석</strong>
                <p>오전 출석관리 + 오후 6시까지 자습</p>
              </div>
            </div>
            <div className="t-item">
              <div className="t-dot" />
              <div>
                <strong>1:1 맞춤 면담</strong>
                <p>실무수습형 섀도우 참관 기회 제공</p>
              </div>
            </div>
            <div className="t-item">
              <div className="t-dot" />
              <div>
                <strong>합격 후 실무교육 50% 할인</strong>
                <p>우수 회원 채용 연계</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Why ── */}
      <section className="sec">
        <div className="wrap">
          <div className="sh rv">
            <span className="kicker">WHY THE 12</span>
            <h2>왜 지금 공인중개사 시험인가?</h2>
            <div className="divider" />
            <p>
              에어비앤비, 경매, 투자… 관심은 넘치지만 진짜 '뼈대'는 없는
              상태로 단편적인 지식만 쌓고 있지는 않으신가요?
            </p>
          </div>
          <div className="why-grid">
            {[
              {
                n: "01",
                title: "두 번째 전문 영역",
                desc: "기존 커리어에 부동산 전문성을 더해 누구도 쉽게 넘볼 수 없는 경쟁력을 만드세요.",
                delay: "d1",
              },
              {
                n: "02",
                title: "협력 파트너 네트워크",
                desc: "함께 공부한 동료가 미래의 투자·거래·사업 파트너가 됩니다.",
                delay: "d2",
              },
              {
                n: "03",
                title: "실전으로 연결",
                desc: "1:1 컨설팅, VIP 현장 섀도우, 합격 후 실무 교육 및 채용 연계까지. 합격은 끝이 아닌 시작입니다.",
                delay: "d3",
              },
            ].map((c) => (
              <div key={c.n} className={`why-card rv ${c.delay}`}>
                <div className="why-n">{c.n}</div>
                <h3>{c.title}</h3>
                <p>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Plans ── */}
      <section className="sec sec-gray">
        <div className="wrap">
          <div className="sh rv">
            <span className="kicker">PROGRAM</span>
            <h2>나에게 맞는 과정을 선택하세요</h2>
            <div className="divider" />
          </div>
          <div className="plans-grid">
            {/* 오프라인 프리미엄 */}
            <div className="plan feat rv d1">
              <div className="plan-badge">추천 · 최대 혜택</div>
              <h3>오프라인 프리미엄</h3>
              <div className="psub">강남역 17층 · 오전 09:00–11:30 출석</div>
              <div className="price-row">
                <span className="price">199만원</span>
                <span className="orig">210만원</span>
              </div>
              <div className="save">11만원 절약</div>
              <hr />
              <div className="feats">
                <span className="fy">오후 6시까지 지정석 자습</span>
                <span className="fy">월 1회 1:1 개인 면담</span>
                <span className="fy">VIP 컨설팅 섀도우 특권</span>
                <span className="fy">우수 회원 채용 연계</span>
                <span className="fy">월 1회 정기모임 (오프+온라인)</span>
              </div>
            </div>
            {/* 온라인 A */}
            <div className="plan rv d2">
              <h3>
                온라인 A{" "}
                <span
                  style={{
                    fontSize: 13,
                    fontWeight: 500,
                    color: "var(--muted)",
                  }}
                >
                  (출석형)
                </span>
              </h3>
              <div className="psub">저녁 구글밋 라이브 · 직장인 · 지방 거주자</div>
              <div className="price-row">
                <span className="price">79만원</span>
                <span className="orig">90만원</span>
              </div>
              <div className="save">11만원 절약</div>
              <hr />
              <div className="feats">
                <span className="fy">저녁 라이브 출석 (구글밋)</span>
                <span className="fy">월 1회 정기모임</span>
                <span className="fn">지정석 자습 공간</span>
                <span className="fn">개인 면담 · 섀도우</span>
              </div>
            </div>
            {/* 온라인 B */}
            <div className="plan rv d3">
              <h3>
                온라인 B{" "}
                <span
                  style={{
                    fontSize: 13,
                    fontWeight: 500,
                    color: "var(--muted)",
                  }}
                >
                  (자율형)
                </span>
              </h3>
              <div className="psub">자율 인증 · 자기관리 잘 되는 분</div>
              <div className="price-row">
                <span className="price">49만원</span>
                <span className="orig">60만원</span>
              </div>
              <div className="save">11만원 절약</div>
              <hr />
              <div className="feats">
                <span className="fy">자율 공부 내역 인증</span>
                <span className="fy">월 1회 정기모임</span>
                <span className="fn">지정석 자습 공간</span>
                <span className="fn">개인 면담 · 섀도우</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── OT ── */}
      <section className="sec" id="ot-sec">
        <div className="wrap">
          <div className="sh rv">
            <span className="kicker">FREE OT</span>
            <h2>먼저 OT에 참여해보세요</h2>
            <div className="divider" />
            <p>무료 참여 · OT 후 등록을 결정하셔도 됩니다</p>
          </div>
          <div className="ot-alert rv">
            <span className="ic">⚡</span>
            <div>
              수퍼 얼리버드 최대 11만원 추가 할인은{" "}
              <strong>4월 17일 1차 OT 이전 등록자에게만</strong> 적용됩니다.
            </div>
          </div>
          <div className="ot-grid">
            {[
              {
                mo: "4월",
                dy: "17",
                dw: "금요일",
                title: "1차 OT · 19:00–20:30",
                desc: "수퍼 얼리버드 마감일\n강남 지역 장소 별도 안내",
                delay: "d1",
              },
              {
                mo: "4월",
                dy: "24",
                dw: "금요일",
                title: "2차 OT · 19:00–20:30",
                desc: "강남 지역 장소 별도 안내",
                delay: "d2",
              },
              {
                mo: "4월",
                dy: "30",
                dw: "목요일",
                title: "3차 OT · 19:00–20:30",
                desc: "강남 지역 장소 별도 안내",
                delay: "d3",
              },
            ].map((ot) => (
              <div key={ot.dy} className={`ot-card rv ${ot.delay}`}>
                <div className="ot-top">
                  <div className="ot-mo">{ot.mo}</div>
                  <div className="ot-dy">{ot.dy}</div>
                  <div className="ot-dw">{ot.dw}</div>
                </div>
                <div className="ot-bot">
                  <strong>{ot.title}</strong>
                  <p style={{ whiteSpace: "pre-line" }}>{ot.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="ot-btns rv">
            <Button
              className="bg-[#D4AF77] hover:bg-[#c59e62] text-white font-bold flex-1 min-w-[150px] py-4 h-auto rounded-lg text-[14px]"
              render={
                <a
                  href="https://forms.gle/6emzu92WCEXXiAiz5"
                  target="_blank"
                  rel="noopener noreferrer"
                />
              }
            >
              OT 신청하기 (구글폼)
            </Button>
            <Button
              variant="outline"
              className="border-[#0A2540] text-[#0A2540] flex-1 min-w-[150px] py-4 h-auto rounded-lg text-[14px]"
              render={
                <a
                  href="https://forms.gle/6emzu92WCEXXiAiz5"
                  target="_blank"
                  rel="noopener noreferrer"
                />
              }
            >
              바로 등록하기
            </Button>
          </div>
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="sec sec-navy">
        <div className="wrap">
          <div className="sh sh-center rv">
            <span className="kicker">NUMBERS</span>
            <h2>숫자로 증명하는 더트웰브</h2>
            <div
              className="divider"
              style={{ marginLeft: "auto", marginRight: "auto" }}
            />
          </div>
          <div className="stats-grid rv">
            <div className="stat">
              <div className="n">
                17<sup>년</sup>
              </div>
              <div className="l">부동산 실무 경력</div>
              <div className="c">쉐어하우스·임대·시행·개발·컨설팅</div>
            </div>
            <div className="stat">
              <div className="n">
                18<sup>곳</sup>
              </div>
              <div className="l">에이블하우스 지점 운영</div>
              <div className="c">코티에이블 창업 → 직방 자산 엑싯</div>
            </div>
            <div className="stat">
              <div className="n">
                335<sup>명</sup>
              </div>
              <div className="l">커뮤니티 누적 회원</div>
              <div className="c">Growth Log 5기 운영</div>
            </div>
            <div className="stat">
              <div className="n">
                6<sup>개월</sup>
              </div>
              <div className="l">시험까지</div>
              <div className="c">2026년 10월 31일 시험</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Leader ── */}
      <section className="sec sec-gray">
        <div className="leader-grid">
          <div className="pbox rv-l">
            <div className="pava">안</div>
            <div>
              <div className="pname">안혜린 대표</div>
              <div className="ptitle">REAL ESTATE EXPERT · 17YRS</div>
              <div className="pedu">
                한양대학교 법학과
                <br />
                서울대학교 환경대학원 도시계획
                <br />
                KAIST · Aalto University 창업과정
              </div>
            </div>
          </div>
          <div className="rv-r">
            <div className="sh">
              <span className="kicker">LEADER</span>
              <h2>
                17년간 모든 현장을
                <br />
                직접 발로 뛴 전문가
              </h2>
              <div className="divider" />
              <p>여러분의 첫걸음을 함께 설계합니다</p>
            </div>
            <ul className="career">
              <li>부동산 실무 17년 — 쉐어하우스·임대관리·시행·개발·컨설팅 전 영역</li>
              <li>코티에이블 창업 → 에이블하우스 18개 지점 → 직방 자산 엑싯</li>
              <li>국토교통부 청년주택 자문위원</li>
              <li>서울시 스타트업 특별위원회 위원</li>
              <li>순천향대 겸임교수 4년</li>
              <li>디캠프 디데이 이지스자산운용 주관 105개 팀 중 대상</li>
              <li>개발자 커뮤니티 Growth Log 창립 · 현재 5기 운영 (누적 335명)</li>
            </ul>
            <div className="qbox">
              <p>
                "내 주변 사람들의 가장 소중한 부동산 투자는 내가 챙겨줄 수
                있는 사람이 되고 싶습니다."
                <br />
                "더트웰브는 그 마음을 공유하는
                사람들이 모여 서로의 평생 파트너가 되는 공간입니다."
              </p>
              <span className="by">— 안혜린 대표</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Tools ── */}
      <section className="sec">
        <div className="wrap">
          <div className="sh sh-center rv">
            <span className="kicker">SYSTEM</span>
            <h2>커뮤니티는 시스템으로 운영됩니다</h2>
            <div
              className="divider"
              style={{ marginLeft: "auto", marginRight: "auto" }}
            />
            <p>
              350여명 개발자 커뮤니티 Growth Log 5기 운영 경험을 그대로
              적용합니다
            </p>
          </div>
          <div className="tools-grid">
            {[
              { ico: "💬", name: "Slack", desc: "실시간 질의응답 · 채널별 소통", d: "d1" },
              { ico: "📋", name: "Notion", desc: "학습 로그 · 일정 · 자료 아카이브", d: "d2" },
              { ico: "📁", name: "Google Drive", desc: "강의 자료 · 녹화본", d: "d3" },
              { ico: "📣", name: "카카오채널", desc: "공지 · 알림", d: "d4" },
              { ico: "💬", name: "오픈채팅", desc: "빠른 일상 소통", d: "d5" },
            ].map((t) => (
              <div key={t.name} className={`tcrd rv-p ${t.d}`}>
                <div className="ico">{t.ico}</div>
                <strong>{t.name}</strong>
                <p>{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="sec sec-gray">
        <div className="wrap">
          <div className="sh sh-center rv">
            <span className="kicker">FAQ</span>
            <h2>자주 묻는 질문</h2>
            <div
              className="divider"
              style={{ marginLeft: "auto", marginRight: "auto" }}
            />
          </div>
          <FAQ />
        </div>
      </section>

      {/* ── Final ── */}
      <section className="final">
        <div className="tag">더트웰브 1기 · 지금 시작하세요</div>
        <h2 className="rv">
          우리나라 부동산 네트워크의
          <br />새 에너지, 더트웰브.
        </h2>
        <p className="rv d1">
          2026년 10월 31일 시험까지 정확히 6개월.
          <br />
          지금 이 순간이 가장 단단한 초석을 다질 타이밍입니다.
        </p>
        <div className="final-btns rv d2">
          <Button
            className="bg-[#D4AF77] hover:bg-[#c59e62] text-white font-bold px-9 py-4 h-auto rounded-lg text-[15px]"
            render={
              <a
                href="https://forms.gle/6emzu92WCEXXiAiz5"
                target="_blank"
                rel="noopener noreferrer"
              />
            }
          >
            수퍼 얼리버드 지금 등록하기 · 4/17 마감
          </Button>
          <Button
            variant="outline"
            className="border-white/40 text-white bg-transparent hover:bg-white/10 hover:text-white px-9 py-4 h-auto rounded-lg text-[15px]"
            render={<a href="#ot-sec" />}
          >
            무료 OT 먼저 신청하기
          </Button>
        </div>
      </section>
    </>
  );
}
