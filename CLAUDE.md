# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

---

## 언어 및 커뮤니케이션 규칙

- **기본 응답 언어**: 한국어
- **코드 주석**: 한국어로 작성
- **커밋 메시지**: 한국어로 작성 (Conventional Commits 형식)
- **문서화**: 한국어로 작성
- **변수명/함수명**: 영어 (코드 표준 준수)

---

## 프로젝트 개요

HTML, CSS, JavaScript, TailwindCSS를 사용한 **정적 개발자 웹 이력서**.  
빌드 도구 없이 브라우저에서 직접 실행되는 순수 정적 사이트.

---

## 기술 스택

| 역할 | 기술 |
|------|------|
| 마크업 | HTML5 (시맨틱 태그) |
| 스타일링 | TailwindCSS v3 (CDN) + `css/style.css` (커스텀) |
| 인터랙션 | Vanilla JavaScript (`js/main.js`) |
| 폰트 | Google Fonts (Inter / Noto Sans KR) |
| 배포 | GitHub Pages 또는 Vercel |

---

## 로컬 개발

빌드 도구가 없으므로 브라우저에서 직접 열거나 간단한 로컬 서버를 사용한다.

```bash
# Python 로컬 서버 (포트 8000)
python3 -m http.server 8000

# Node.js live-server 사용 시
npx live-server
```

Lighthouse 검사:
```bash
npx lighthouse http://localhost:8000 --view
```

---

## 프로젝트 구조

```
resume/
├── index.html          # 단일 페이지 — 모든 섹션 포함
├── css/
│   └── style.css       # TailwindCSS로 처리 안 되는 커스텀 스타일, 애니메이션
├── js/
│   └── main.js         # 스크롤 이벤트, 타이핑 애니메이션, IntersectionObserver
└── assets/
    └── images/         # WebP 형식 권장
```

---

## 아키텍처 핵심 원칙

### index.html 섹션 순서
`nav` → `#hero` → `#about` → `#skills` → `#experience` → `#projects` → `#education` → `#contact` → `footer`

### JavaScript (main.js) 책임 범위
- **타이핑 애니메이션**: Hero 섹션 직함 텍스트
- **스크롤 감지**: `IntersectionObserver`로 섹션 진입 시 페이드인 트리거
- **네비게이션**: 스크롤 위치에 따른 활성 링크 하이라이트 + 상단바 배경 전환
- **다크모드**: `localStorage`로 테마 상태 유지 (구현 시)

### CSS 우선순위
TailwindCSS 유틸리티 클래스를 우선 사용하고, Tailwind로 표현하기 어려운 커스텀 애니메이션이나 복잡한 선택자만 `style.css`에 작성한다.

---

## 커밋 메시지 형식

```
<타입>: <설명>

타입 목록: feat, fix, style, refactor, docs, chore
```

예시:
```
feat: Hero 섹션 타이핑 애니메이션 추가
style: Skills 카드 호버 효과 개선
fix: 모바일 햄버거 메뉴 토글 오류 수정
```

---

## 완료 기준 (Definition of Done)

- 모바일(375px) / 태블릿(768px) / 데스크톱(1280px) 레이아웃 정상 동작
- Lighthouse Performance ≥ 90, Accessibility ≥ 90
- 이미지는 WebP 형식, `alt` 텍스트 필수
- 배포 URL 동작 확인
