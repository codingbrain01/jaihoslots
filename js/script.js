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

// classcursor-pointer
let cursorPointer = document.getElementsByClassName('cursor-pointer');
let readMoreHandler = function() {
    let read_more = getContent('read_more');
    let read_less = getContent('read_less');
    // spanRead More，Read Less
    if (this.getElementsByTagName('span')[0].innerHTML === read_more) {
        this.getElementsByTagName('span')[0].innerHTML = read_less;
        // pspan，span
        this.previousElementSibling.getElementsByTagName('span')[1].style.display = 'inline';
        this.previousElementSibling.getElementsByTagName('span')[0].innerHTML = '';
    } else {
        this.getElementsByTagName('span')[0].innerHTML = read_more;
        // pspan，span...
        this.previousElementSibling.getElementsByTagName('span')[1].style.display = 'none';
        this.previousElementSibling.getElementsByTagName('span')[0].innerHTML = '...';
    }
};
for (let i = 0; i < cursorPointer.length; i++) {
    cursorPointer[i].onclick = readMoreHandler;
}