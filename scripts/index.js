const bodyTag = document.querySelector('body')
const bwIcon = document.querySelector('.bw-icon')
const sectionLinks = document.querySelector('div.sections-links')
const mainTag = document.querySelector('main')
const menu = document.querySelector('div.menu')
const menuLink = document.querySelector('.menu-link')
const fontInner = document.querySelectorAll('.mm-font-inner')

menuLink.addEventListener('click', ()=>{
    menu.classList.toggle('open')
    if(menu.classList.contains('open')){
      mainTag.classList.add('menu-open')
      if(sectionLinks){
        sectionLinks.classList.add('menu-open')
      }

      menuLink.innerHTML = 'Close'
      if(bwIcon){
        bwIcon.style.opacity = 0
      }

      fontInner.forEach(container=>{
        container.classList.add('animate')
      })

    } else{
      mainTag.classList.remove('menu-open')
      if(sectionLinks){
        sectionLinks.classList.remove('menu-open')
      }
      menuLink.innerHTML = 'Menu'
      if(bwIcon){
        bwIcon.style.opacity = 1
      }

      fontInner.forEach(container=>{
        container.classList.remove('animate')
      })
    }
   
})

mainTag.addEventListener('click', ()=>{
  menu.classList.remove('open')
  menuLink.innerHTML = 'Menu'
  mainTag.classList.remove('menu-open')
  if(bwIcon){
    bwIcon.style.opacity = 1
  }
  if(sectionLinks){
    sectionLinks.classList.remove('menu-open')
  }

  fontInner.forEach(container=>{
    container.classList.remove('animate')
  })
})





const indexIntro = document.querySelector('section.index-intro')

window.addEventListener('scroll', ()=>{

    pixels = window.pageYOffset
    let pxDamp = pixels / 300
    if(indexIntro){
        indexIntro.style.opacity = 1- pxDamp
    }
   
   

})