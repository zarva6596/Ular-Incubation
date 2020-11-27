new Swiper('.swiper-container', {   
   initialSlide: 4,
   slidesPerView: 3,
   spaceBetween: 30,
   centeredSlides: true,

   navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
   },

   pagination: {
      el: '.swiper-pagination',
      clickable: true,
   }
});