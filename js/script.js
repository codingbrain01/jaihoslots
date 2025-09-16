
document.addEventListener('DOMContentLoaded', () => {
  const backToTop = document.querySelector('.scroll-to-top');
  const apkBars   = document.querySelectorAll('.apk-download');

  if (!backToTop) return;

  function handleScroll() {
    const y = window.scrollY || window.pageYOffset;

    if (y > 100) {
      backToTop.style.visibility = 'visible';
      backToTop.style.opacity    = '1';
      apkBars.forEach(el => el.style.transform = 'none');
    } else {
      backToTop.style.visibility = 'hidden';
      backToTop.style.opacity    = '0';
      apkBars.forEach(el => el.style.transform = 'translateY(140%)');
    }
  }

  backToTop.addEventListener('click', () =>
    window.scrollTo({ top: 0, behavior: 'smooth' })
  );

  window.addEventListener('scroll', handleScroll);
  window.addEventListener('load', handleScroll); // run once on page load
});
