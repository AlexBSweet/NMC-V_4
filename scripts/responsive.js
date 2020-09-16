const mobileMenu = document.querySelector('div.mobile-menu')
const menuLink = document.querySelector('div.tf-header-right-mobile')

menuLink.addEventListener('click', ()=>{
    mobileMenu.classList.toggle('open')
})