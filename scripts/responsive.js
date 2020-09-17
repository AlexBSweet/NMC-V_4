const mobileMenu = document.querySelector('div.mobile-menu')
const menuLink = document.querySelector('.mobile-menu-link')

menuLink.addEventListener('click', ()=>{
    mobileMenu.classList.toggle('open')
})