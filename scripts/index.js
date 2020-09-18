const indexIntro = document.querySelector('section.index-intro')

window.addEventListener('scroll', ()=>{

    pixels = window.pageYOffset
    let pxDamp = pixels / 500

    indexIntro.style.opacity = 1- pxDamp
   

})