const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    grabCursor: true,

    autoplay: {
        delay: 5000,
    },
  
    // // If we need pagination
    // pagination: {
    //   el: '.swiper-pagination',
    // },
  
    // // Navigation arrows
    // navigation: {
    //   nextEl: '.swiper-button-next',
    //   prevEl: '.swiper-button-prev',
    // },
  
    // // And if we need scrollbar
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // },
});

const swiperBadge = new Swiper('.swiper__badges', {
    direction: 'horizontal',
    loop: true,
    grabCursor: true,

    autoplay: {
        delay: 2500,
    },

    centeredSlides: true,

    slidesPerView: 3,
    spaceBetween: 10,

    breakpoints: {
        768: {
        slidesPerView: 4,
        spaceBetween: 30,
        centeredSlides: false
        },

        900: {
        slidesPerView: 6,
        spaceBetween: 30,
        centeredSlides: false,
        }
    }
  
    // // If we need pagination
    // pagination: {
    //   el: '.swiper-pagination',
    // },
  
    // // Navigation arrows
    // navigation: {
    //   nextEl: '.swiper-button-next',
    //   prevEl: '.swiper-button-prev',
    // },
  
    // // And if we need scrollbar
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // },
});

const swiperCustomer = new Swiper('.swiper__customers', {
    direction: 'horizontal',
    loop: true,
    grabCursor: true,

    centeredSlides: true,

    slidesPerView: 1,
    spaceBetween: 80,

    autoplay: {
        delay: 2500,
    },
  
    breakpoints: {
        768: {
        slidesPerView: 2,
        spaceBetween: 30,
        centeredSlides: false,
        },

        900: {
        slidesPerView: 3,
        spaceBetween: 40
        }
    }
  
    // // Navigation arrows
    // navigation: {
    //   nextEl: '.swiper-button-next',
    //   prevEl: '.swiper-button-prev',
    // },
  
    // // And if we need scrollbar
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // },
});

const swiperHome = new Swiper('.swiper__home', {
    direction: 'vertical',
    loop: true,
    centeredSlides: true,
    slidesPerView: 1,
    speed: 1000,
    effect: 'fade',

    autoplay: {
        delay: 5000,
    },
  
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        bulletActiveClass: 'active',
    },
    
    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

const swiperBlogs = new Swiper('.blogs', {
    direction: 'horizontal',
    loop: true,
    grabCursor: true,

    centeredSlides: true,

    slidesPerView: 1,
    spaceBetween: 80,
  
    breakpoints: {
        768: {
        slidesPerView: 2,
        spaceBetween: 30,
        centeredSlides: false,
        },

        900: {
        slidesPerView: 3,
        spaceBetween: 40
        }
    }
});