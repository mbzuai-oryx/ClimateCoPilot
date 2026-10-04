(function () {
  const navToggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.site-nav');
  if (navToggle && nav) {
    navToggle.addEventListener('click', () => {
      const isOpen = nav.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', String(isOpen));
    });
  }

  const current = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.site-nav a').forEach((link) => {
    const href = link.getAttribute('href');
    if (href === current || (current === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });

  document.querySelectorAll('[data-current-year]').forEach((node) => {
    node.textContent = new Date().getFullYear();
  });
})();

const earthalignSlider = document.getElementById("earthalignImageSlider");

if (earthalignSlider) {
  const earthalignSlides = earthalignSlider.querySelectorAll(".slide");
  const earthalignDots = document.querySelectorAll("#earthalignSliderDots .slider-dot");
  const earthalignPrevBtn = document.getElementById("earthalignPrevBtn");
  const earthalignNextBtn = document.getElementById("earthalignNextBtn");

  let earthalignCurrentSlide = 0;

  function updateEarthalignSlider() {
    earthalignSlider.style.transform = `translateX(-${earthalignCurrentSlide * 100}%)`;
    earthalignDots.forEach((dot, index) => dot.classList.toggle("is-active", index === earthalignCurrentSlide));
  }

  earthalignPrevBtn.addEventListener("click", () => {
    earthalignCurrentSlide = (earthalignCurrentSlide - 1 + earthalignSlides.length) % earthalignSlides.length;
    updateEarthalignSlider();
  });

  earthalignNextBtn.addEventListener("click", () => {
    earthalignCurrentSlide = (earthalignCurrentSlide + 1) % earthalignSlides.length;
    updateEarthalignSlider();
  });

  earthalignDots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      earthalignCurrentSlide = index;
      updateEarthalignSlider();
    });
  });
}
const terrabenchSlider = document.getElementById("terrabenchImageSlider");

if (terrabenchSlider) {
  const terrabenchSlides = terrabenchSlider.querySelectorAll(".slide");
  const terrabenchDots = document.querySelectorAll("#terrabenchSliderDots .slider-dot");
  const terrabenchPrevBtn = document.getElementById("terrabenchPrevBtn");
  const terrabenchNextBtn = document.getElementById("terrabenchNextBtn");
  let terrabenchCurrentSlide = 0;

  function updateTerrabenchSlider() {
    terrabenchSlider.style.transform = `translateX(-${terrabenchCurrentSlide * 100}%)`;
    terrabenchDots.forEach((dot, index) => dot.classList.toggle("is-active", index === terrabenchCurrentSlide));
  }

  terrabenchPrevBtn.addEventListener("click", () => {
    terrabenchCurrentSlide = (terrabenchCurrentSlide - 1 + terrabenchSlides.length) % terrabenchSlides.length;
    updateTerrabenchSlider();
  });

  terrabenchNextBtn.addEventListener("click", () => {
    terrabenchCurrentSlide = (terrabenchCurrentSlide + 1) % terrabenchSlides.length;
    updateTerrabenchSlider();
  });

  terrabenchDots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      terrabenchCurrentSlide = index;
      updateTerrabenchSlider();
    });
  });
}