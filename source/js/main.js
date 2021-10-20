// No Js
try {
  document.querySelector('.header__top').classList.remove('header__top-open');
  document.querySelector('.header__bottom').classList.remove('header__bottom-open');
} catch {}

// Swiper
try {
  let swiper = new Swiper(".mySwiper", {
    slidesPerView: 2,
    slidesPerGroup: 2,
    spaceBetween: 30,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + (index + 1) + "</span>";
      },
    },
    breakpoints: {
      769: {
        slidesPerView: 4,
        slidesPerGroup: 4,
      },
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
} catch {};

// Accordion
try {
  let accordion = document.querySelector('.accordion')
  let accordionItems = document.querySelectorAll('.accordion__item')

  accordionItems.forEach((item) => {
    let accordionHeader = item.querySelector('.accordion__header')

    accordionHeader.addEventListener('click', () => {
      let openItem = document.querySelector('._accordion-open')

      toggleItem(item)

      if (openItem && openItem !== item && !accordion.classList.contains('accordion--no-swipe')) {
        toggleItem(openItem)
      }
    })
  })

  let toggleItem = (item) => {
    let accordionContent = item.querySelector('.accordion__content')

    if (item.classList.contains('_accordion-open')) {
      accordionContent.removeAttribute('style')
      item.classList.remove('_accordion-open')
    } else {
      accordionContent.style.height = accordionContent.scrollHeight + 'px'
      item.classList.add('_accordion-open')
    }
  }
} catch {};

// Menu toggle
try {
  let headerTop = document.querySelector('.header__top')
  let headerBottom = document.querySelector('.header__bottom')

  let menuToggle = document.querySelector('.menu-toggle')
  menuToggle.addEventListener('click', () => {
    headerBottom.classList.toggle('header__bottom-open')
    headerTop.classList.toggle('header__top-open')
  })
} catch {};

// Popup
try {
  const isEscKey = (evt) => evt.key === 'Escape' || evt.key === 'Esc';

  let pageBody = document.querySelector('.page__body');
  let popup = document.querySelector('.popup');
  let linkLogin = document.querySelectorAll('a[href$="login.html"]')
  let closePopupButton = document.querySelector('#popup-close')
  let inputEmail = popup.querySelector('input[type="email"]');

  linkLogin.forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      popup.classList.add('popup--active');
      inputEmail.focus();
      pageBody.classList.add('_no-scroll');
    })
  })

  closePopupButton.addEventListener('click', () => {
    popup.classList.remove('popup--active');
    pageBody.classList.remove('_no-scroll');
  });

  document.addEventListener('click', (e) => {
    if (e.target === popup) {
      popup.classList.remove('popup--active');
      pageBody.classList.remove('_no-scroll');
    }
  });

  document.addEventListener('keydown', (evt) => {
    if (isEscKey(evt)) {
      popup.classList.remove('popup--active');
      pageBody.classList.remove('_no-scroll');
    }
  });
} catch {};

// Validation
try {
  let form = document.querySelector('.form-login')
  let inputEmail = form.querySelector('input[type="email"]');
  let inputPassword = form.querySelector('input[type="password"]')

  form.addEventListener('submit', function (evt) {
    if (!inputEmail.value || !inputPassword.value) {
      evt.preventDefault();
    } else {
      localStorage.setItem("login", inputEmail.value);
      localStorage.setItem("password", inputPassword.value);
    }
  })
} catch {};

// Filter toggle
try {
  const isEscKey = (evt) => evt.key === 'Escape' || evt.key === 'Esc';

  let filterCatalog = document.querySelector('.catalog__filter')
  let filterToggle = document.querySelector('.catalog__filter-toggle')
  let closePopupButton = document.querySelector('#form-close')

  filterToggle.addEventListener('click', () => {
    filterCatalog.classList.add('active')
  })

  closePopupButton.addEventListener('click', () => {
    filterCatalog.classList.remove('active');
  });

  document.addEventListener('click', (e) => {
    if (e.target === filterCatalog) {
      filterCatalog.classList.remove('active');
    }
  });

  document.addEventListener('keydown', (evt) => {
    if (isEscKey(evt)) {
      filterCatalog.classList.remove('active');
    }
  });
} catch {}

// Range slider
try {
  window.onload = function () {
    slideOne();
    slideTwo();
  }

  let sliderOne = document.getElementById('range-slider-1');
  let sliderTwo = document.getElementById('range-slider-2');
  let displayValOne = document.getElementById('range-slider-value-1');
  let displayValTwo = document.getElementById('range-slider-value-2');
  let minGap = 10;
  let sliderTrack = document.querySelector('.range-slider__track');
  let sliderMaxValue = document.getElementById('range-slider-1').max;

  function slideOne() {
    if (parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap) {
      sliderOne.value = parseInt(sliderTwo.value) - minGap;
    }
    displayValOne.textContent = sliderOne.value + ' $';
    displayValOne.style.left = (sliderOne.value / 2) + '%';
    fillColor();
  }

  function slideTwo() {
    if (parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap) {
      sliderTwo.value = parseInt(sliderOne.value) + minGap;
    }
    displayValTwo.textContent = sliderTwo.value + ' $';
    displayValTwo.style.left = (sliderTwo.value / 2) + '%';

    fillColor();
  }

  function fillColor() {
    percent1 = (sliderOne.value / sliderMaxValue) * 100;
    percent2 = (sliderTwo.value / sliderMaxValue) * 100;
    sliderTrack.style.background = `linear-gradient(to right, #dadae5 ${percent1}% , #A87B62 ${percent1}% , #A87B62 ${percent2}%, #dadae5 ${percent2}%)`;
  }
} catch {}
