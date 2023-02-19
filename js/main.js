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
    promotionOn.classList.remove('animate');  
  } else {
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