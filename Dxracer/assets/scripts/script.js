const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 1,
    allowTouchMove: true,
    autoplay: {
        delay: 3000,
    },    
    
    scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true,
    },

    // Navigation arrows
    navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
     },
});

const teams = new Swiper('.swiper-teams', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 2,
    allowTouchMove: true,
    autoplay: {
        delay: 3000,
    },     
    
    pagination: {
        el: '.swiper-pagination',
    },

    breakpoints: {
        // when window width is >= 480px
        480: {
            direction: 'horizontal',
            loop: true,
            qslidesPerView: 3,
            allowTouchMove: true,
            autoplay: {
                delay: 3000,
            },  
        },

        // when window width is >= 768px
        768: {
            direction: 'horizontal',
            loop: true,
            qslidesPerView: 5,
            allowTouchMove: true,
            autoplay: {
                delay: 3000,
            },  
        }
    }
});