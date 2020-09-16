const titleText = document.querySelectorAll('h1.title')
// const header = document.querySelector('header')

window.addEventListener('scroll', ()=>{
    let pixels = window.pageYOffset

    let opacity = pixels/500
    

    titleText.forEach(title=>{
        title.style.opacity = 1- (opacity/1)

            // var textSize = window.getComputedStyle(titleText, null).getPropertyValue('font-size');
    // let parsedTextSize = parseInt(textSize, 10);
    // let newTextSize = parsedTextSize - (pixels/100)

   
    // titleText.style.fontSize = newTextSize + 'px'
    })
    
    // header.style.opacity = opacity


})









// const tfContainer = document.querySelectorAll('div.typeface-container')

// tfContainer.forEach(container=>{

//     const quickViewContent = container.querySelector('div.quick-view')
//     const caret = container.querySelector('img.caret')

//     caret.addEventListener('click', ()=>{
//         quickViewContent.classList.toggle('open')
//         container.classList.toggle('open')
//         caret.classList.toggle('open')
   
//     })

// })








// COLOR HOVER SECTION ==============================================================
// const tfSection = document.querySelector('section.typefaces')
// const nmcGroteskContainer = document.querySelector('div.nmc-grotesk-container')
// const nmcSerataDispContainer = document.querySelector('div.nmc-serata-display-container')
// const nmcSerataTextContainer = document.querySelector('div.nmc-serata-text-container')
// const nmcRedContainer = document.querySelector('div.nmc-red-container')
// const nmcRedMonoContainer = document.querySelector('div.nmc-red-mono-container')
// const nmcBellingerContainer = document.querySelector('div.nmc-bellinger-container')
// const nmcGriffeContainer = document.querySelector('div.nmc-griffe-container')
// const nmcDoubleContainer = document.querySelector('div.nmc-double-container')
// const smallTypes = document.querySelectorAll('.small-type')




// nmcGroteskContainer.addEventListener('mouseenter', ()=>{
//     tfSection.style.backgroundColor = 'var(--grotesk-bg-hover)'
//     smallTypes.forEach(type=>{
//         type.style.color = 'var(--grotesk-fg-hover)'
//     })
// })
// nmcGroteskContainer.addEventListener('mouseleave', ()=>{
//     tfSection.style.backgroundColor = 'var(--bg-color)'
//     smallTypes.forEach(type=>{
//         type.style.color = 'var(--mid-gray-1)'
//     })
// })





// nmcSerataDispContainer.addEventListener('mouseenter', ()=>{
//     tfSection.style.backgroundColor = 'var(--serata-display-bg-hover)'
//     smallTypes.forEach(type=>{
//         type.style.color = 'var(--serata-display-fg-hover)'
//     })
// })
// nmcSerataDispContainer.addEventListener('mouseleave', ()=>{
//     tfSection.style.backgroundColor = 'var(--bg-color)'
//     smallTypes.forEach(type=>{
//         type.style.color = 'var(--mid-gray-1)'
//     })
// })
// nmcSerataTextContainer.addEventListener('mouseenter', ()=>{
//     tfSection.style.backgroundColor = 'var(--serata-text-bg-hover)'
//     smallTypes.forEach(type=>{
//         type.style.color = 'var(--serata-text-fg-hover)'
//     })
// })
// nmcSerataTextContainer.addEventListener('mouseleave', ()=>{
//     tfSection.style.backgroundColor = 'var(--bg-color)'
//     smallTypes.forEach(type=>{
//         type.style.color = 'var(--mid-gray-1)'
//     })
// })






// nmcRedContainer.addEventListener('mouseenter', ()=>{
//     tfSection.style.backgroundColor = 'var(--red-bg-hover)'
//     smallTypes.forEach(type=>{
//         type.style.color = 'var(--red-fg-hover)'
//     })
// })
// nmcRedContainer.addEventListener('mouseleave', ()=>{
//     tfSection.style.backgroundColor = 'var(--bg-color)'
//     smallTypes.forEach(type=>{
//         type.style.color = 'var(--mid-gray-1)'
//     })
// })
// nmcRedMonoContainer.addEventListener('mouseenter', ()=>{
//     tfSection.style.backgroundColor = 'var(--red-mono-bg-hover)'
//     smallTypes.forEach(type=>{
//         type.style.color = 'var(--red-mono-fg-hover)'
//     })
// })
// nmcRedMonoContainer.addEventListener('mouseleave', ()=>{
//     tfSection.style.backgroundColor = 'var(--bg-color)'
//     smallTypes.forEach(type=>{
//         type.style.color = 'var(--mid-gray-1)'
//     })
// })







// nmcBellingerContainer.addEventListener('mouseenter', ()=>{
//     tfSection.style.backgroundColor = 'var(--bellinger-bg-hover)'
//     smallTypes.forEach(type=>{
//         type.style.color = 'var(--bellinger-fg-hover)'
//     })
// })
// nmcBellingerContainer.addEventListener('mouseleave', ()=>{
//     tfSection.style.backgroundColor = 'var(--bg-color)'
//     smallTypes.forEach(type=>{
//         type.style.color = 'var(--mid-gray-1)'
//     })
// })






// nmcGriffeContainer.addEventListener('mouseenter', ()=>{
//     tfSection.style.backgroundColor = 'var(--griffe-bg-hover)'
//     smallTypes.forEach(type=>{
//         type.style.color = 'var(--griffe-fg-hover)'
//     })
// })
// nmcGriffeContainer.addEventListener('mouseleave', ()=>{
//     tfSection.style.backgroundColor = 'var(--bg-color)'
//     smallTypes.forEach(type=>{
//         type.style.color = 'var(--mid-gray-1)'
//     })
// })




// nmcDoubleContainer.addEventListener('mouseenter', ()=>{
//     tfSection.style.backgroundColor = 'var(--double-bg-hover)'
//     smallTypes.forEach(type=>{
//         type.style.color = 'var(--double-fg-hover)'
//     })
// })
// nmcDoubleContainer.addEventListener('mouseleave', ()=>{
//     tfSection.style.backgroundColor = 'var(--bg-color)'
//     smallTypes.forEach(type=>{
//         type.style.color = 'var(--mid-gray-1)'
//     })
// })




