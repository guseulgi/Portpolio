// Search Btn
const search = document.querySelector('header .sub-search span');
const inputField = document.querySelector('header .sub-search input');
search.addEventListener('click', function() {
  inputField.focus();
  // if(inputField.ariaChecked)
  inputField.setAttribute('placeholder', '통합검색');

});
inputField.addEventListener('blur', function() {
  inputField.setAttribute('placeholder', '');
});

// Main menu
const main_menu = document.querySelectorAll('li.main-menu__item');
for(let i = 0; i < main_menu.length; i++) {
  main_menu[i].addEventListener('mouseover', function() {
    main_menu[i].classList.add('animate');
  });
  main_menu[i].addEventListener('mouseout', function() {
    main_menu[i].classList.remove('animate');
  });
}


// Visual - 웹페이지가 로드되자마자 바로
window.onload = function() {
  const visual_slogan = document.querySelector('.visual .inner .visual__contents');
  const visual_item1 = document.querySelector('.visual__image1');
  const visual_item2 = document.querySelector('.visual__image2');
  const visual_item3 = document.querySelector('.visual__image3');

  visual_slogan.classList.add('animate');
  visual_item1.classList.add('animate');
  visual_item2.classList.add('animate');
  visual_item3.classList.add('animate');
}

// Notice
const swiperNotice = new Swiper('section.notice .item__notice .swiper-container',{
  direction : 'vertical',
  loop : true,
  autoplay : true,
  observer: true,
observeParents: true,
});

// Promotion
const toggleBtn = document.querySelector('.item__promotion > span');
toggleBtn.addEventListener('click', function() {
  const promotionOn = document.querySelector('.notice .promotion__contents');
  if(promotionOn.classList.contains('animate')=== true) {
    toggleBtn.classList.remove('toggle');
    promotionOn.classList.remove('animate');  
  } else {
    toggleBtn.classList.add('toggle');
    promotionOn.classList.add('animate');
  }
});

const swiperPromotion = new Swiper('.notice .promotion__contents .swiper-container', {
  direction : 'horizontal',
  slidesPerView : 3,
  spaceBetween : 10,
  centeredSlides : true,
  loop : true,
  autoplay : {
    delay: 4000,
    disableOnInteraction : false,
  },
});

// Scroll Animation
window.addEventListener('scroll', function() {
  console.log(window.scrollY);

  if(window.scrollY > 804) {
    const elsalvadorImg = document.querySelector('.elsalvador .contents__image');
    const elsalvadorTxt = document.querySelector('.elsalvador .contents__right');
    elsalvadorImg.classList.add('animate');
    elsalvadorTxt.classList.add('animate');
  }

  if(window.scrollY > 1234) {
    const ethiopiaTxt = document.querySelector('.ethiopia .contents__text');
    const ethiopiaImg = document.querySelector('.ethiopia .contents__image');
    const ethiopiaBtn = document.querySelector('.ethiopia .btn.btn--gold');
    ethiopiaTxt.classList.add('animate');
    ethiopiaImg.classList.add('animate');
    ethiopiaBtn.classList.add('animate');
  }

  if(window.scrollY > 1700) {
    const favoriteTitle = document.querySelector('.favorite .contents__title');
    const favoriteTxt = document.querySelector('.favorite .contents__text');
    const favoriteBtn = document.querySelector('.favorite .btn.btn--white');

    favoriteTitle.classList.add('animate');
    favoriteTxt.classList.add('animate');
    favoriteBtn.classList.add('animate');
  }

  if(window.scrollY > 2400) {
    const magazineImg = document.querySelector('.magazine .contents__image');
    magazineImg.classList.add('animate');
  }

  if(window.scrollY > 2740) {
    const storeImg1 = document.querySelector('.store .contents__image1');
    const storeImg2 = document.querySelector('.store .contents__image2');
    const storeImg4 = document.querySelector('.store .contents__image4');
    storeImg1.classList.add('animate');
    storeImg2.classList.add('animate');
    storeImg4.classList.add('animate');
  }
});
