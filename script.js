// ********** Navigation **********
const hamburger = document.querySelector('.hamburger')
const navMenu = document.querySelector('ul')

hamburger.addEventListener('click', function () {
    navMenu.classList.toggle('active')
})