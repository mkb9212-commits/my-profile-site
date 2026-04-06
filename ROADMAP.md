# 개발자 웹 이력서 - ROADMAP

## 프로젝트 개요

HTML, CSS, JavaScript, TailwindCSS를 사용한 정적 개발자 웹 이력서 제작

---

## 기술 스택

- **HTML5** — 시맨틱 마크업
- **CSS3** — 커스텀 스타일, 애니메이션
- **JavaScript (Vanilla)** — 인터랙션, 스크롤 효과
- **TailwindCSS v3** — 유틸리티 기반 스타일링

---

## 이력서 구성 섹션

```
Hero          → 이름, 직함, 한줄 소개, CTA 버튼
About         → 자기소개 (3~4줄)
Skills        → 기술 스택 (언어, 프레임워크, 도구)
Experience    → 경력 사항 (회사, 기간, 주요 업무)
Projects      → 주요 프로젝트 (제목, 설명, 기술, 링크)
Education     → 학력
Contact       → 이메일, GitHub, LinkedIn
```

---

## 개발 단계

### Phase 1 — 프로젝트 초기화 (Day 1)

- [ ] 폴더 구조 생성
  ```
  resume/
  ├── index.html
  ├── css/
  │   └── style.css
  ├── js/
  │   └── main.js
  └── assets/
      └── images/
  ```
- [ ] TailwindCSS CDN 또는 CLI 설정
- [ ] 기본 HTML 보일러플레이트 작성
- [ ] Google Fonts 연결 (Inter 또는 Noto Sans KR)
- [ ] 색상 팔레트 및 디자인 토큰 정의

### Phase 2 — 레이아웃 & 네비게이션 (Day 1~2)

- [ ] 반응형 네비게이션 바 (데스크톱 + 모바일 햄버거 메뉴)
- [ ] 섹션별 앵커 링크
- [ ] 스크롤 시 네비게이션 스타일 변경 (투명 → 불투명)
- [ ] 푸터 작성

### Phase 3 — 핵심 섹션 개발 (Day 2~4)

#### Hero 섹션
- [ ] 이름, 직함 타이핑 애니메이션 (JS)
- [ ] 한줄 소개 문구
- [ ] "이력서 다운로드" + "연락하기" CTA 버튼
- [ ] 배경 그라디언트 또는 파티클 효과 (선택)

#### About 섹션
- [ ] 프로필 이미지 (원형)
- [ ] 자기소개 텍스트
- [ ] 핵심 역량 배지 (예: "문제 해결", "팀 협업")

#### Skills 섹션
- [ ] 카테고리별 기술 그룹핑 (Frontend / Backend / DevOps / Tools)
- [ ] 기술 아이콘 + 이름 카드 레이아웃
- [ ] 숙련도 표시 (프로그레스 바 또는 태그)

#### Experience 섹션
- [ ] 타임라인 레이아웃
- [ ] 각 경력 항목: 회사명, 직책, 기간, 담당 업무 (bullet)

#### Projects 섹션
- [ ] 프로젝트 카드 그리드 (3열 → 모바일 1열)
- [ ] 카드: 썸네일, 제목, 설명, 기술 태그, GitHub/Live 링크
- [ ] 호버 효과

#### Education 섹션
- [ ] 학교명, 전공, 졸업연도
- [ ] 관련 수료 과정 또는 자격증

#### Contact 섹션
- [ ] 이메일, GitHub, LinkedIn 아이콘 링크
- [ ] 간단한 문의 폼 (선택 — 정적이면 Formspree 연동)

### Phase 4 — 인터랙션 & UX (Day 4~5)

- [ ] 스크롤 진입 시 섹션 페이드인 애니메이션 (IntersectionObserver)
- [ ] 네비게이션 활성 섹션 하이라이트
- [ ] 스무스 스크롤
- [ ] 다크모드 토글 (선택)
- [ ] "맨 위로" 플로팅 버튼

### Phase 5 — 반응형 & 접근성 (Day 5~6)

- [ ] 브레이크포인트 검증: mobile(375px), tablet(768px), desktop(1280px)
- [ ] 이미지 alt 텍스트
- [ ] 키보드 내비게이션
- [ ] 색상 대비 WCAG AA 기준 충족
- [ ] `<meta>` SEO 태그 (description, og:image 등)

### Phase 6 — 최적화 & 배포 (Day 6~7)

- [ ] 이미지 압축 (WebP 변환)
- [ ] TailwindCSS 퍼지(PurgeCSS)로 CSS 최소화
- [ ] Lighthouse 점수 확인 (Performance 90+, Accessibility 90+)
- [ ] GitHub Pages 또는 Vercel 배포
- [ ] 커스텀 도메인 연결 (선택)

---

## 이력서 샘플 데이터

```yaml
name: 김개발
title: Frontend Developer
summary: "사용자 경험을 중심으로 생각하는 프론트엔드 개발자입니다."

skills:
  frontend: [HTML/CSS, JavaScript, React, TailwindCSS]
  backend:  [Node.js, Express, Python]
  tools:    [Git, Figma, VS Code, Docker]

experience:
  - company: "(주)테크스타트"
    role: Frontend Developer
    period: "2023.03 ~ 현재"
    tasks:
      - React 기반 SPA 개발 및 유지보수
      - TailwindCSS 디자인 시스템 구축
      - 페이지 로딩 속도 30% 개선

projects:
  - name: "Todo Master"
    desc: "할 일 관리 웹앱"
    tech: [React, TailwindCSS, LocalStorage]
    github: "https://github.com/..."
  - name: "Weather Now"
    desc: "날씨 정보 대시보드"
    tech: [Vanilla JS, OpenWeather API]
    github: "https://github.com/..."

education:
  school: "한국대학교"
  major: "컴퓨터공학과"
  grad: "2023.02"

contact:
  email: "dev@example.com"
  github: "github.com/kimdev"
  linkedin: "linkedin.com/in/kimdev"
```

---

## 완료 기준 (Definition of Done)

- [ ] 모든 6개 섹션 구현 완료
- [ ] 모바일/태블릿/데스크톱 레이아웃 정상 동작
- [ ] Lighthouse Performance ≥ 90
- [ ] GitHub Pages 또는 Vercel 배포 완료
- [ ] 이력서 PDF 다운로드 링크 제공
