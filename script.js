// ===== Trang giới thiệu bản thân — script.js =====

document.addEventListener('DOMContentLoaded', () => {

  /* Scroll reveal: các phần tự hiện dần khi cuộn tới */
  const revealEls = document.querySelectorAll('.reveal');

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        entry.target.style.transitionDelay = `${(i % 3) * 80}ms`;
        entry.target.classList.add('in-view');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

  revealEls.forEach(el => revealObserver.observe(el));

  /* Đổ bóng nhẹ cho thanh nav khi cuộn xuống */
  const header = document.getElementById('site-header');
  const onScroll = () => {
    header.style.boxShadow = window.scrollY > 12 ? '0 6px 16px rgba(33,29,26,0.08)' : 'none';
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

});
