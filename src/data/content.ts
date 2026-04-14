/* ─── 콘텐츠 데이터 ──────────────────────────────────
   텍스트 수정은 이 파일만 변경하면 됩니다.
   title 배열의 각 항목은 <br />로 줄바꿈됩니다.
──────────────────────────────────────────────────── */

export const GOOGLE_FORM_URL = "https://forms.gle/6emzu92WCEXXiAiz5";

/* ─── Hero ──────────────────────────────────────── */
export const HERO = {
  badge: "THE 12 1기 모집중",
  title: ["당신의 인생에 부동산이라는", "무기를 장착하십시오."],
  subtitle: "수강생이 아닌, 미래의 협력 파트너를 찾습니다.",
  description: {
    gold: "THE 12 — 우리는 단순한 합격 스터디가 아닙니다.",
    light: "대한민국 부동산 네트워크의 새로운 에너지가 될 것입니다.",
  },
  features: [
    "17년차 전문가 직접 운영",
    "강남역 17층 지정석",
    "합격 후 실무 교육 연계",
  ],
  cta: {
    primary: "수퍼 얼리버드 신청하기",
    secondary: "무료 OT 참석하기",
  },
};

/* ─── Why ───────────────────────────────────────── */
export const WHY = {
  label: "WHY",
  title: "WHY **THE12**?",
  description:
    "에어비앤비, 경매, 투자... 관심은 넘치지만 진짜 '뼈대'는 없는 상태로 단편적인 지식만 쌓고 있지는 않으신가요?",
  cards: [
    {
      num: "01",
      title: "두 번째 전문 영역",
      desc: "기존 커리어에 부동산 전문성을 더해 누구도 쉽게 넘볼 수 없는 경쟁력을 만드세요.",
    },
    {
      num: "02",
      title: "협력 파트너 네트워크",
      desc: "함께 공부한 동료가 미래의 투자·거래·사업 파트너가 됩니다.",
    },
    {
      num: "03",
      title: "실전으로 연결",
      desc: "1:1 컨설팅, VIP 현장 섀도우, 합격 후 실무 교육 및 채용 연계까지. 합격은 끝이 아닌 시작입니다.",
    },
  ],
};

/* ─── Plans (Program) ───────────────────────────── */
export const PLANS = {
  label: "PROGRAM",
  title: "나에게 맞는 **과정**을 선택하세요",
  items: [
    {
      name: "오프라인 프리미엄",
      badge: "추천 · 최대 혜택",
      subtitle: "강남역 17층 · 오전 09:00~11:30 출석",
      price: "199만원",
      originalPrice: "210만원",
      discount: "11만원 절약",
      accent: true,
      features: [
        { text: "오후 6시까지 지정석 자습", included: true, bold: true },
        { text: "정기모임 오프+온라인", included: true },
        { text: "월 1회 개인 면담", included: true },
        { text: "VIP 현장 섀도우", included: true },
        { text: "우수회원 채용 연계", included: true },
      ],
    },
    {
      name: "온라인 A",
      nameTag: "(출석형)",
      subtitle: "저녁 구글밋 라이브 · 직장인 · 지방 거주자",
      price: "79만원",
      originalPrice: "90만원",
      discount: "11만원 절약",
      accent: false,
      features: [
        { text: "정기모임 오프+온라인", included: true },
        { text: "우수회원 채용 연계", included: true },
        { text: "지정석 자습", included: false },
        { text: "개인 면담", included: false },
        { text: "VIP 섀도우", included: false },
      ],
    },
    {
      name: "온라인 B",
      nameTag: "(자율형)",
      subtitle: "자율 인증 · 자기관리 잘 되는 분",
      price: "49만원",
      originalPrice: "60만원",
      discount: "11만원 절약",
      accent: false,
      features: [
        { text: "정기모임 오프+온라인", included: true },
        { text: "우수회원 채용 연계", included: true },
        { text: "지정석 자습", included: false },
        { text: "개인 면담", included: false },
        { text: "VIP 섀도우", included: false },
      ],
    },
  ],
};

/* ─── Attendance ────────────────────────────────── */
export const ATTENDANCE = {
  title: "합격은 **루틴**에서 결정됩니다",
  description: "의지만으로는 6개월을 버티기 어렵습니다. 구조가 완주를 만듭니다.",
  cards: [
    { title: "오프라인", desc: "오전 9:00~11:30 강제 출석\n이후 오후 6시까지 자율 자습" },
    { title: "온라인 A", desc: "저녁 라이브 출석 인증" },
    { title: "온라인 B", desc: "자율 공부 내역 인증\n커뮤니티 기록 공유" },
  ],
  quote: "오전 출석이 더트웰브의 가장 강력한 완주 장치입니다.",
};

/* ─── Meetup ────────────────────────────────────── */
export const MEETUP = {
  title: ["매월 첫째 금요일 저녁 7시 —", "**진짜 네트워크**가 만들어지는 시간"],
  description: "시험 공부를 넘어, 함께 성장합니다.",
  schedule: [
    { label: "매월 첫째 금요일 19:00 ~ 22:00", icon: "calendar" as const },
    { label: "강남역 더트웰브 오피스 (온라인 동시 참여)", icon: "mapPin" as const },
  ],
  topicsTitle: "모임에서 다루는 것들",
  topics: [
    "투자·커리어 경험 공유",
    "과목별 공부법 & 고득점 전략",
    "서울 부동산 시장 분석",
    "경매 실무 & 프롭테크 트렌드",
    "실제 임장 투어 기획",
  ],
};

/* ─── Leader ────────────────────────────────────── */
export const LEADER = {
  label: "LEADER",
  title: ["**17년 현장 경험**의 전문가가", "첫걸음을 **함께 설계**합니다"],
  profile: {
    name: "안혜린 대표",
    role: "THE 12 Founder",
    education: "한양대 법학 / 서울대 도시계획\nKAIST·Aalto Univ. 창업 과정",
  },
  credentials: [
    "부동산 실무 17년 (시행·개발·컨설팅)",
    "에이블하우스 18개 지점 → 직방 엑싯",
    "국토부 청년주택 자문위원",
    "서울시 스타트업 특별위원회",
    "순천향대 겸임교수 4년",
    "Growth Log 270명 커뮤니티 운영",
  ],
  quote: [
    "내 주변 사람들의 부동산 투자를 내가 챙겨줄 수 있는 사람이 되고 싶습니다.",
    "더트웰브는 그 마음을 공유하는 사람들이 서로의 평생 파트너가 되는 공간입니다.",
  ],
};

/* ─── Stats ─────────────────────────────────────── */
export const STATS = {
  title: "**숫자**로 증명하는 **더트웰브**",
  items: [
    { n: "17", label: "부동산 실무 경력", caption: "쉐어하우스·임대·시행·개발·컨설팅" },
    { n: "18", label: "에이블하우스 지점 운영", caption: "코티에이블 창업 → 직방 자산 엑싯" },
    { n: "335", label: "커뮤니티 누적 회원", caption: "Growth Log 5기 운영" },
    { n: "6", label: "시험까지", caption: "2026년 10월 31일 시험" },
  ],
};

/* ─── OT ────────────────────────────────────────── */
export const OT = {
  badge: "선착순 무료",
  title: "먼저 OT에 참여해보세요",
  description: "프로그램 운영 방식과 커뮤니티 철학을 직접 확인하세요.\nOT 참석 후 등록 여부를 결정하셔도 됩니다.",
  schedule: [
    { round: "1차", date: "4/17 (금) 19:00~20:30" },
    { round: "2차", date: "4/24 (금) 19:00~20:30" },
    { round: "3차", date: "4/30 (목) 19:00~20:30" },
  ],
  notice: "* 회당 참석 인원 확인 후 강남 지역 장소 안내",
  earlyBird: "수퍼 얼리버드(최대 11만원 추가 할인)는 4/17 OT 이전 등록자에게만 적용",
  cta: {
    primary: "OT 신청하기",
    secondary: "바로 등록하기",
  },
};

/* ─── Tools ─────────────────────────────────────── */
export const TOOLS = {
  title: "시스템으로 운영되는 커뮤니티",
  description: "270명 개발자 커뮤니티 그로스로그 5기 운영 경험을 그대로 적용합니다.",
  items: [
    { icon: "hash" as const, name: "Slack", desc: "실시간 질의응답" },
    { icon: "fileText" as const, name: "Notion", desc: "학습 로그·일정" },
    { icon: "hardDrive" as const, name: "Google Drive", desc: "강의 자료·녹화본" },
    { icon: "messageSquare" as const, name: "카카오채널", desc: "공지·알림" },
    { icon: "messageCircle" as const, name: "오픈채팅", desc: "빠른 일상 소통" },
  ],
};

/* ─── FAQ ───────────────────────────────────────── */
export const FAQ = {
  label: "FAQ",
  title: "자주 묻는 질문",
  items: [
    {
      q: "Q. 오프라인은 매일 가야 하나요?",
      a: "오전 9:00~11:30은 필수 출석이며, 월 2회 개인 일정 양해 가능합니다. 이후 오후 6시까지 자습 공간으로 자유롭게 이용 가능합니다.",
    },
    {
      q: "Q. 직장인도 온라인으로 참여 가능한가요?",
      a: "네, 온라인 A(저녁 라이브)과 온라인 B(자율 인증) 중 선택 가능합니다.",
    },
    {
      q: "Q. VIP 섀도우 참여는?",
      a: "오프라인 회원 중 신청·심사 후 실제 자산 컨설팅 현장 동행 기회를 드립니다.",
    },
    {
      q: "Q. 교재는 제공되나요?",
      a: "별도 교재 없이 수강 강의 교재나 시험지로 자유롭게 독학합니다.",
    },
    {
      q: "Q. 환불 정책은?",
      a: "1차 정기모임 전 취소 시 100% 환불합니다.",
    },
    {
      q: "Q. 운영진으로 참여할 수 있나요?",
      a: "OT 신청 폼에서 운영진 지원 의사를 표시해주시면 별도 안내드립니다.",
    },
    {
      q: "Q. 합격 후 실무 교육은?",
      a: "시험 후 12월~2월 실무 교육 진행. 1기 회원은 50% 할인 참여 가능합니다.",
    },
  ],
};

/* ─── Final CTA ─────────────────────────────────── */
export const FINAL = {
  title: ["**부동산 네트워크**의 새로운 에너지,", "**더트웰브**와 함께 시작하세요."],
  description: [
    "2026년 10월 시험까지 6개월.",
    "각자의 전문성을 가진 사람들이 부동산이라는 공통 언어로 모여,",
    "서로의 평생 파트너가 되는 여정입니다.",
  ],
  cta: {
    primary: "수퍼 얼리버드 등록하기",
    secondary: "무료 OT 신청하기",
  },
};
