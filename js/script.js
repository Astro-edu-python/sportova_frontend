function toggleDisplayInput(event, inputElement, selectorBtn) {
    if (inputElement.value.length) {
        document.querySelector(selectorBtn).style.display = 'block'
    } else {
        document.querySelector(selectorBtn).style.display = 'none'
    }
}


function toggleDisplayElement(event, selectorBtn) {
    document.querySelector(selectorBtn).classList.toggle('not-visible')
}


const toggleSearchBtn = (event) => {
    toggleDisplayInput(event, inputSearch, '.mid-header .second .submit')
}


const toggleMenuHeaderDropdown = (event) => {
    toggleDisplayElement(event, '.bottom-header .dropdown .dropdown-menu')
    toggleDisplayElement(event, '.bottom-header .dropdown .burger')
    toggleDisplayElement(event, '.bottom-header .dropdown .close')
    toggleDisplayElement(event, '.bottom-header .dropdown .down')
    toggleDisplayElement(event, '.bottom-header .dropdown .up')
}


let inputSearch = document.querySelector('.mid-header .second .search')
inputSearch.addEventListener('keydown', toggleSearchBtn)
let menuDropdown = document.querySelector('.bottom-header .dropdown')
menuDropdown.addEventListener('click', toggleMenuHeaderDropdown)

const swiper = new Swiper('.banner .slide-banner .swiper', {
    slidesPerView: 1,
    pagination: {
        el: ".slide-banner-pagination",
        type: "fraction",
    },
    navigation: {
        nextEl: ".slide-banner-button-next",
        prevEl: ".slide-banner-button-prev",
    },
});
