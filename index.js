// Адаптивная верстка полноэкранного лендинга с навигацией и параллакс эффектом на базе слайдера Swiper

let pageSlider = new Swiper(".page", {
  wrapperClass: "page_wrapper",
  slideClass: "page_screen",

  direction: "vertical",

  slidesPerView: "auto",

  parallax: true,

  keyboard: {
    enabled: true,

    onlyInViewport: true,

    psgeUpDown: true,
  },

  mousewheel: {
    sensivity: 1,
  },

  watchOverflow: true,

  speed: 800,

  observer: true,

  observeParents: true,

  observeSlideChildren: true,

  pagination: {
    el: ".page_pagination",
    type: "bullets",
    clickable: true,
    bulletClass: "page_bullet",
    bulletActiveClass: "page_bullet_active",
  },

  scrollbar: {
    el: ".page_scroll",
    dragClass: "page_drag-scroll",

    draggable: true,
  },

  init: false,

  on: {
    init: function () {
      menuSlider();
    },
    sliderChange: function () {
      menuSliderRemove();
      menuLinks[pageSlider.realIndex].classList.add("_active");
    },
  },
});

let menuLinks = document.querySelectorAll(".menu_link");

function menuSlider() {
  if (menuLinks.length > 0) {
    menuLinks[pageSlider.realIndex].classList.add("_active");

    for (let index = 0; index < menuLinks.length; index++) {
      const menuLink = menuLinks[index];
      menuLink.addEventListener("click", function (e) {
        menuSliderRemove();
        pageSlider.slideTo(index, 800);
        menuLink.classList.add("_active");
        e.preventDefault();
      });
    }
  }
}
function menuSliderRemove() {
  let menuLinkActive = document.querySelector(".menu_link._active");
  if (menuLinkActive) {
    menuLinkActive.classList.remove("_active");
  }
}
pageSlider.init();
