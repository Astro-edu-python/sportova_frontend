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

document.querySelectorAll('.product-card').forEach((element) => {
    element.addEventListener('mouseover', (event) => {
        element.querySelector('.add-to-favorite').classList.remove('not-visible')
    })
    element.addEventListener('mouseout', (event) => {
        element.querySelector('.add-to-favorite').classList.add('not-visible')
    })
})
