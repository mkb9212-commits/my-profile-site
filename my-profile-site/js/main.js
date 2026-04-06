/* =============================================
   Pio 프로필 사이트 — 인터랙션
   ============================================= */

/* 타이핑 애니메이션 */
function initTypingAnimation() {
  const el = document.getElementById('typing-text');
  if (!el) return;

  const titles = [
    '구글애즈 캠페인 전문가',
    'Google Ads Specialist',
    '디지털 마케팅 전문가',
    'Marketing Strategist',
    'Performance Marketer',
  ];
  let idx = 0, charIdx = 0, isDeleting = false;

  function tick() {
    const current = titles[idx];
    el.textContent = isDeleting ? current.slice(0, charIdx--) : current.slice(0, charIdx++);

    let delay = isDeleting ? 55 : 95;
    if (!isDeleting && charIdx === current.length + 1) { delay = 2000; isDeleting = true; }
    else if (isDeleting && charIdx < 0) { isDeleting = false; idx = (idx + 1) % titles.length; delay = 350; }

    setTimeout(tick, delay);
  }
  tick();
}

/* 스크롤 스파이 — 네비 배경 + 활성 링크 */
function initScrollSpy() {
  const navbar = document.getElementById('navbar');
  const links = document.querySelectorAll('[data-nav-link]');
  const sections = document.querySelectorAll('main > section[id]');
  if (!navbar) return;

  function onScroll() {
    navbar.classList.toggle('navbar-scrolled', window.scrollY > 50);

    let current = '';
    sections.forEach(s => { if (s.getBoundingClientRect().top <= 120) current = s.id; });
    links.forEach(l => {
      const active = l.getAttribute('href') === `#${current}`;
      l.classList.toggle('active', active);
      l.classList.toggle('text-brand', active);
    });
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

/* 페이드인 */
function initFadeIn() {
  const obs = new IntersectionObserver(
    entries => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); } }),
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  );
  document.querySelectorAll('.fade-in').forEach(el => obs.observe(el));
}

/* 다크모드 — 항상 다크 컨셉, 토글 없음 */
function initDarkMode() {
  // 다크 컨셉 전용 사이트 — 별도 처리 불필요
}

/* 햄버거 메뉴 */
function initMobileMenu() {
  const btn = document.getElementById('menu-toggle');
  const menu = document.getElementById('mobile-menu');
  const iconMenu = document.getElementById('icon-menu');
  const iconClose = document.getElementById('icon-close');
  if (!btn || !menu) return;

  const close = () => {
    menu.classList.add('hidden');
    btn.setAttribute('aria-expanded', 'false');
    btn.setAttribute('aria-label', '메뉴 열기');
    iconMenu.classList.remove('hidden');
    iconClose.classList.add('hidden');
  };
  const open = () => {
    menu.classList.remove('hidden');
    btn.setAttribute('aria-expanded', 'true');
    btn.setAttribute('aria-label', '메뉴 닫기');
    iconMenu.classList.add('hidden');
    iconClose.classList.remove('hidden');
  };

  btn.addEventListener('click', () => menu.classList.contains('hidden') ? open() : close());
  menu.querySelectorAll('a').forEach(a => a.addEventListener('click', close));
  document.addEventListener('click', e => {
    if (!menu.classList.contains('hidden') && !menu.contains(e.target) && !btn.contains(e.target)) close();
  });
}

/* 맨 위로 버튼 */
function initBackToTop() {
  const btn = document.getElementById('back-to-top');
  if (!btn) return;
  window.addEventListener('scroll', () => btn.classList.toggle('hidden-btn', window.scrollY < 400), { passive: true });
  btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

/* 스무스 스크롤 */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const t = document.querySelector(a.getAttribute('href'));
      if (!t) return;
      e.preventDefault();
      t.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
}

/* 초기화 */
document.addEventListener('DOMContentLoaded', () => {
  initTypingAnimation();
  initScrollSpy();
  initFadeIn();
  initDarkMode();
  initMobileMenu();
  initBackToTop();
  initSmoothScroll();
});
