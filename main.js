const burger = document.getElementsByClassName('burger')
const navLinks = document.getElementsByClassName('nav-links')

burger.addEventListener('click', () => {
    navLinks.classList.toggle('active')
})