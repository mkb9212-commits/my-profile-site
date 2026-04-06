/**
 * 개발자 웹 이력서 — 인터랙션 스크립트
 *
 * 모듈 목록:
 *   initTypingAnimation  — Hero 직함 타이핑 효과
 *   initScrollSpy        — 네비 배경 전환 + 활성 링크 하이라이트
 *   initFadeIn           — IntersectionObserver 스크롤 페이드인
 *   initDarkMode         — 다크모드 토글 + localStorage 유지
 *   initMobileMenu       — 햄버거 메뉴 열기/닫기
 *   initBackToTop        — 플로팅 맨 위로 버튼
 */

/* =============================================
   타이핑 애니메이션
   ============================================= */
function initTypingAnimation() {
  const el = document.getElementById('typing-text');
  if (!el) return;

  const titles = [
    'Frontend Developer',
    'React Engineer',
    'UI/UX Enthusiast',
    'Problem Solver',
  ];
  let titleIdx = 0;
  let charIdx = 0;
  let isDeleting = false;
  let timeoutId = null;

  function tick() {
    const current = titles[titleIdx];

    if (isDeleting) {
      charIdx--;
      el.textContent = current.slice(0, charIdx);
    } else {
      charIdx++;
      el.textContent = current.slice(0, charIdx);
    }

    let delay = isDeleting ? 60 : 100;

    if (!isDeleting && charIdx === current.length) {
      // 완성 후 잠시 대기
      delay = 2000;
      isDeleting = true;
    } else if (isDeleting && charIdx === 0) {
      // 삭제 완료 → 다음 직함
      isDeleting = false;
      titleIdx = (titleIdx + 1) % titles.length;
      delay = 400;
    }

    timeoutId = setTimeout(tick, delay);
  }

  tick();
}

/* =============================================
   스크롤 스파이 — 네비 배경 + 활성 링크
   ============================================= */
function initScrollSpy() {
  const navbar = document.getElementById('navbar');
  const navLinks = document.querySelectorAll('[data-nav-link]');
  const sections = document.querySelectorAll('main > section[id]');

  if (!navbar) return;

  function onScroll() {
    // 네비 배경 전환
    if (window.scrollY > 50) {
      navbar.classList.add('navbar-scrolled');
    } else {
      navbar.classList.remove('navbar-scrolled');
    }

    // 현재 섹션 감지
    let currentId = '';
    sections.forEach(sec => {
      const top = sec.getBoundingClientRect().top;
      if (top <= 120) {
        currentId = sec.id;
      }
    });

    // 활성 링크 업데이트
    navLinks.forEach(link => {
      const href = link.getAttribute('href');
      if (href === `#${currentId}`) {
        link.classList.add('active', 'text-brand', 'dark:text-brand-dark');
      } else {
        link.classList.remove('active', 'text-brand', 'dark:text-brand-dark');
      }
    });
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  // 초기 실행
  onScroll();
}

/* =============================================
   스크롤 페이드인 — IntersectionObserver
   ============================================= */
function initFadeIn() {
  const targets = document.querySelectorAll('.fade-in');
  if (!targets.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          // 한 번 실행 후 관찰 해제 — 재진입 시 재생 방지
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.12,
      rootMargin: '0px 0px -40px 0px',
    }
  );

  targets.forEach(el => observer.observe(el));
}

/* =============================================
   다크모드 토글
   ============================================= */
function initDarkMode() {
  const btn = document.getElementById('dark-toggle');
  if (!btn) return;

  const html = document.documentElement;

  function updateLabel() {
    const isDark = html.classList.contains('dark');
    btn.setAttribute('aria-label', isDark ? '라이트모드 전환' : '다크모드 전환');
  }

  // 초기 aria-label 설정
  updateLabel();

  btn.addEventListener('click', () => {
    html.classList.toggle('dark');
    const isDark = html.classList.contains('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    updateLabel();
  });
}

/* =============================================
   모바일 햄버거 메뉴
   ============================================= */
function initMobileMenu() {
  const toggleBtn = document.getElementById('menu-toggle');
  const menu = document.getElementById('mobile-menu');
  const iconMenu = document.getElementById('icon-menu');
  const iconClose = document.getElementById('icon-close');

  if (!toggleBtn || !menu) return;

  function closeMenu() {
    menu.classList.add('hidden');
    toggleBtn.setAttribute('aria-expanded', 'false');
    toggleBtn.setAttribute('aria-label', '메뉴 열기');
    iconMenu.classList.remove('hidden');
    iconClose.classList.add('hidden');
  }

  function openMenu() {
    menu.classList.remove('hidden');
    toggleBtn.setAttribute('aria-expanded', 'true');
    toggleBtn.setAttribute('aria-label', '메뉴 닫기');
    iconMenu.classList.add('hidden');
    iconClose.classList.remove('hidden');
  }

  toggleBtn.addEventListener('click', () => {
    const isOpen = !menu.classList.contains('hidden');
    isOpen ? closeMenu() : openMenu();
  });

  // 메뉴 링크 클릭 시 자동 닫기
  menu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  // 외부 클릭 시 닫기
  document.addEventListener('click', (e) => {
    if (!menu.classList.contains('hidden') &&
        !menu.contains(e.target) &&
        !toggleBtn.contains(e.target)) {
      closeMenu();
    }
  });
}

/* =============================================
   맨 위로 버튼
   ============================================= */
function initBackToTop() {
  const btn = document.getElementById('back-to-top');
  if (!btn) return;

  function toggleVisibility() {
    if (window.scrollY > 400) {
      btn.classList.remove('hidden-btn');
    } else {
      btn.classList.add('hidden-btn');
    }
  }

  window.addEventListener('scroll', toggleVisibility, { passive: true });
  toggleVisibility();

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/* =============================================
   스무스 스크롤 — 앵커 링크
   ============================================= */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const targetId = anchor.getAttribute('href');
      if (targetId === '#') return;
      const target = document.querySelector(targetId);
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
}

/* =============================================
   초기화
   ============================================= */
document.addEventListener('DOMContentLoaded', () => {
  initTypingAnimation();
  initScrollSpy();
  initFadeIn();
  initDarkMode();
  initMobileMenu();
  initBackToTop();
  initSmoothScroll();
});
