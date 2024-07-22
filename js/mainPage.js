new Swiper('.banner .slide-banner .swiper', {
    slidesPerView: 1,
    pagination: {
        el: ".slide-banner-pagination",
        type: "fraction",
    },
    navigation: {
        nextEl: ".banner .slide-banner .navigation .slide-banner-button-next",
        prevEl: ".banner .slide-banner .navigation .slide-banner-button-prev",
    },
});

let selectorParents = ['.athletic-category', '.street-category', '.sweden-category']
selectorParents.forEach((className) => {
    new Swiper(className + ' .products-slide .swiper', {
        slidesPerView: 'auto',
        watchOverflow: true,
        navigation: {
            nextEl: className + " .products-slide .navigation .slide-banner-button-next",
            prevEl: className + " .products-slide .navigation .slide-banner-button-prev",
        },
    })
})

let childSwiper = new Swiper(".examples .photo-examples .photo-examples-swiper-navigation", {
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
});

new Swiper(".examples .photo-examples .photo-examples-swiper-main", {
    spaceBetween: 10,
    navigation: {
        nextEl: ".photo-examples-swiper-main .photo-examples-swiper-button-next",
        prevEl: ".photo-examples-swiper-main .photo-examples-swiper-button-prev",
    },
    thumbs: {
        swiper: childSwiper,
    },
});
