const progressBar = document.querySelector('div.progress-bar')

document.addEventListener('scroll', function(){
    
    const pageTop = window.pageYOffset
    const pageHeight = bodyTag.getBoundingClientRect().height
    const totalScrollableDistance = pageHeight - window.innerHeight
    
    const percentageWidth = pageTop / totalScrollableDistance
    
    progressBar.style.width = percentageWidth * 100 + '%'
})






const sections = document.querySelectorAll('.section-start')
const stylesLink = document.querySelector('a.styles-link')
const samplesLink = document.querySelector('a.samples-link')
const glyphsLink = document.querySelector('a.glyphs-link')
const testerLink = document.querySelector('a.tester-link')
const infoLink = document.querySelector('a.info-link')
const downloadLink = document.querySelector('a.download-link')

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if(entry.intersectionRatio >= 0.5 && entry.target.classList.contains('tf-intro-start')) {
        stylesLink.classList.remove('current-section')
        infoLink.classList.remove('current-section')
        samplesLink.classList.remove('current-section')
        glyphsLink.classList.remove('current-section')
        // downloadLink.classList.remove('current-section')
        // samplesLink.classList.add('current-section')
        // stylesLink.classList.remove('current-section')

      } else if(entry.intersectionRatio >= 1 && entry.target.classList.contains('tf-styles')) {
       
        stylesLink.classList.add('current-section')
        infoLink.classList.remove('current-section')
        samplesLink.classList.remove('current-section')
        glyphsLink.classList.remove('current-section')
        // downloadLink.classList.remove('current-section')
        // samplesLink.classList.add('current-section')
        // stylesLink.classList.remove('current-section')

      } else if(entry.intersectionRatio >= 0.5 && entry.target.classList.contains('tf-samples')) {

        samplesLink.classList.add('current-section')
        infoLink.classList.remove('current-section')
        stylesLink.classList.remove('current-section')
        glyphsLink.classList.remove('current-section')
        // downloadLink.classList.remove('current-section')
 

        // testerLink.classList.remove('current-section')
        // infoLink.classList.remove('current-section')
      } else if(entry.intersectionRatio >= 0.1 && entry.target.classList.contains('tf-glyphs')) {
        glyphsLink.classList.add('current-section')
        samplesLink.classList.remove('current-section')
        infoLink.classList.remove('current-section')
        stylesLink.classList.remove('current-section')
        testerLink.classList.remove('current-section')
        // downloadLink.classList.remove('current-section')
        // testerLink.classList.add('current-section')
        // glyphsLink.classList.remove('current-section')
        // samplesLink.classList.remove('current-section')
        // stylesLink.classList.remove('current-section')
        // buyLink.classList.remove('current-section')
        // infoLink.classList.remove('current-section')
      }  else if(entry.intersectionRatio >= 0.1 && entry.target.classList.contains('tf-tester')) {
        testerLink.classList.add('current-section')
        samplesLink.classList.remove('current-section')
        infoLink.classList.remove('current-section')
        stylesLink.classList.remove('current-section')
        glyphsLink.classList.remove('current-section')
        // downloadLink.classList.remove('current-section')
        // infoLink.classList.add('current-section')
        // glyphsLink.classList.remove('current-section')
        // samplesLink.classList.remove('current-section')
        // stylesLink.classList.remove('current-section')
        // testerLink.classList.remove('current-section')
        // buyLink.classList.remove('current-section')
      }
      else if(entry.intersectionRatio >= 0.1 && entry.target.classList.contains('tf-download')) {
        console.log('download')
        infoLink.classList.add('current-section')
        testerLink.classList.remove('current-section')
        // samplesLink.classList.remove('current-section')
        // infoLink.classList.remove('current-section')
        // stylesLink.classList.remove('current-section')
        // glyphsLink.classList.remove('current-section')
      }
    })
  },
  {
    threshold: [0, 0.1, 1]
  }
)



sections.forEach(section=>{
  observer.observe(section)
})







const tfIntroSection = document.querySelector('section.tf-intro')
const stylesSection = document.querySelector('section.tf-styles')
const samplesSection = document.querySelector('section.tf-samples')
const glyphsSection = document.querySelector('section.tf-glyphs')
const testerSection = document.querySelector('section.tf-tester')
const anchorTags = document.querySelectorAll('a')
const header = document.querySelector('header.tf-header')
const headerBg = document.querySelector('div.header-bg')


let pixels = 0
if(pixels>window.innerHeight){
    headerBg.style.opacity = 1
} else{
    headerBg.style.opacity = 0
}

const introOpacity = ()=>{
  window.addEventListener('scroll', ()=>{
    pixels = window.pageYOffset
    let pxDamp = pixels / 500

    tfIntroSection.style.opacity = 1- pxDamp

    if(pixels>window.innerHeight){
        headerBg.style.opacity = 1
    } else{
        headerBg.style.opacity = 0
    }
})
}

const introOpacityMobile = ()=>{
  window.addEventListener('scroll', ()=>{
    pixels = window.pageYOffset

    if(pixels>window.innerHeight){
        headerBg.style.opacity = 1
    } else{
        headerBg.style.opacity = 0
    }
})
}

var mq = window.matchMedia( "(min-width: 800px)" );
if (mq.matches) {
   introOpacity()
}
else {
    introOpacityMobile()
}













const samples = samplesSection.querySelectorAll('div.sample')

samples.forEach(sample=>{

  const text = sample.querySelector('p')
  const changeTextSelect = sample.querySelector('select.change-text')
  let v = changeTextSelect.value
  let sampleCounter = 0

  changeTextSelect.addEventListener('change', ()=>{
    sampleCounter = 0
     v = changeTextSelect.value

    if(v=="Abc"){
      text.innerHTML = Abc[0]
    } else if(v=="Number"){
      text.innerHTML = Number[0]
    } else if(v=="Pangram"){
      text.innerHTML = Pangram[0]
    } else if(v=="Language"){
      text.innerHTML = Language[0]
    } else if(v=="Punctuation"){
      text.innerHTML = Punctuation[0]
    } else if(v=="Symbols"){
      text.innerHTML = Symbols[0]
    } else if(v=="Body"){
      text.innerHTML = Body[0]
    } else if(v=="Random"){
      text.innerHTML = Random[0]
    } else if(v=="Change Text"){
      text.innerHTML = Random[0]
    }
  })

  const sampleLeft = sample.querySelector('div.sample-left-50')
  const sampleRight = sample.querySelector('div.sample-right-50')



  sampleLeft.addEventListener('click', ()=>{
    sampleCounter = sampleCounter -1
    
    if(v=="Abc"){
      if(sampleCounter<0){
        sampleCounter=Abc.length - 1
      }
      text.innerHTML = Abc[sampleCounter]
    } else if(v=="Number"){
      if(sampleCounter<0){
        sampleCounter=Number.length -1 
      }
      text.innerHTML = Number[sampleCounter]
    } else if(v=="Language"){
      if(sampleCounter<0){
        sampleCounter=Language.length -1 
      }
      text.innerHTML = Language[sampleCounter]
    } else if(v=="Punctuation"){
      if(sampleCounter<0){
        sampleCounter=Punctuation.length -1 
      }
      text.innerHTML = Punctuation[sampleCounter]
    } else if(v=="Symbols"){
      if(sampleCounter<0){
        sampleCounter=Symbols.length -1 
      }
      text.innerHTML = Symbols[sampleCounter]
    } else if(v=="Pangram"){
      if(sampleCounter<0){
        sampleCounter=Pangram.length -1 
      }
      text.innerHTML = Pangram[sampleCounter]
    } else if(v=="Body"){
      if(sampleCounter<0){
        sampleCounter=Body.length -1 
      }
      text.innerHTML = Body[sampleCounter]
    } else if(v=="Random"){
      if(sampleCounter<0){
        sampleCounter=Random.length -1 
      }
      text.innerHTML = Random[sampleCounter]
    } else if(v=="Change Text"){
      if(sampleCounter<0){
        sampleCounter=Random.length -1 
      }
      text.innerHTML = Random[sampleCounter]
    }
    
  })
  sampleRight.addEventListener('click', ()=>{
    sampleCounter = sampleCounter + 1
    console.log(sampleCounter)
    if(v=="Abc"){
      if(sampleCounter>=Abc.length){
        sampleCounter = 0
      }
      text.innerHTML = Abc[sampleCounter]
    } else if(v=="Number"){
      if(sampleCounter>=Number.length){
        sampleCounter = 0
      }
      text.innerHTML = Number[sampleCounter]
    } else if(v=="Language"){
      if(sampleCounter>=Language.length){
        sampleCounter = 0
      }
      text.innerHTML = Language[sampleCounter]
    } else if(v=="Punctuation"){
      if(sampleCounter>=Punctuation.length){
        sampleCounter = 0
      }
      text.innerHTML = Punctuation[sampleCounter]
    } else if(v=="Symbols"){
      if(sampleCounter>=Symbols.length){
        sampleCounter = 0
      }
      text.innerHTML = Symbols[sampleCounter]
    } else if(v=="Pangram"){
      if(sampleCounter>=Pangram.length){
        sampleCounter = 0
      }
      text.innerHTML = Pangram[sampleCounter]
    } else if(v=="Body"){
      if(sampleCounter>=Body.length){
        sampleCounter = 0
      }
      text.innerHTML = Body[sampleCounter]
    } else if(v=="Random"){
      if(sampleCounter>=Random.length){
        sampleCounter = 0
      }
      text.innerHTML = Random[sampleCounter]
    } else if(v=="Change Text"){
      if(sampleCounter>=Random.length){
        sampleCounter = 0
      }
      text.innerHTML = Random[sampleCounter]
    }

  })

})

  



























// GLYPHS SECTION =====================--------------------------------------------===========

const introGlyphsSection = () =>{

  const glyphsSection = document.querySelector('section.tf-glyphs')
  const glyphsContainerTop = document.querySelector('div.glyphs-container')
  const glyphsContainer = document.querySelectorAll('section.glyphs-category')
  const glyphs = glyphsContainerTop.querySelectorAll('div')
  const activeGlyphContainer = document.querySelector('div.active-glyph-container')
  const detailsOne = document.querySelector('div.glyph-details-one')
  const detailsTwo = document.querySelector('div.glyph-details-two')
  const glyphsSelect = document.querySelector('select.glyphs-select')


  // glyphsSelect.addEventListener('change', ()=>{
  //     const typeValue = glyphsSelect.value

  //     glyphsContainer.forEach(container=>{
  
  //       if(typeValue=="Extra-Light"){
  //         container.style['font-variation-settings'] = `"wght" 100, "slnt" 0`
  //         activeGlyphContainer.style['font-variation-settings'] = `"wght" 100, "slnt" 0`
  //       }else if(typeValue=="Extra-Light Italic"){
  //         container.style['font-variation-settings'] = `"wght" 100, "slnt" 1`
  //         activeGlyphContainer.style['font-variation-settings'] = `"wght" 100, "slnt" 1`
  //       }else if(typeValue=="Light"){
  //         container.style['font-variation-settings'] = `"wght" 200, "slnt" 0`
  //         activeGlyphContainer.style['font-variation-settings'] = `"wght" 200, "slnt" 0`
  //       }else if(typeValue=="Light Italic"){
  //         container.style['font-variation-settings'] = `"wght" 200, "slnt" 1`
  //         activeGlyphContainer.style['font-variation-settings'] = `"wght" 200, "slnt" 1`
  //       }else if(typeValue=="Regular"){
  //         container.style['font-variation-settings'] = `"wght" 400, "slnt" 0`
  //         activeGlyphContainer.style['font-variation-settings'] = `"wght" 400, "slnt" 0`
  //       }else if(typeValue=="Regular Italic"){
  //         container.style['font-variation-settings'] = `"wght" 400, "slnt" 1`
  //         activeGlyphContainer.style['font-variation-settings'] = `"wght" 400, "slnt" 1`
  //       }else if(typeValue=="Medium"){
  //         container.style['font-variation-settings'] = `"wght" 500, "slnt" 0`
  //         activeGlyphContainer.style['font-variation-settings'] = `"wght" 500, "slnt" 0`
  //       }else if(typeValue=="Medium Italic"){
  //         container.style['font-variation-settings'] = `"wght" 500, "slnt" 1`
  //         activeGlyphContainer.style['font-variation-settings'] = `"wght" 500, "slnt" 1`
  //       }else if(typeValue=="Semi-Bold"){
  //         container.style['font-variation-settings'] = `"wght" 600, "slnt" 0`
  //         activeGlyphContainer.style['font-variation-settings'] = `"wght" 600, "slnt" 0`
  //       }else if(typeValue=="Semi-Bold Italic"){
  //         container.style['font-variation-settings'] = `"wght" 600, "slnt" 1`
  //         activeGlyphContainer.style['font-variation-settings'] = `"wght" 600, "slnt" 1`
  //       }else if(typeValue=="Bold"){
  //         container.style['font-variation-settings'] = `"wght" 700, "slnt" 0`
  //         activeGlyphContainer.style['font-variation-settings'] = `"wght" 700, "slnt" 0`
  //       }else if(typeValue=="Bold Italic"){
  //         container.style['font-variation-settings'] = `"wght" 700, "slnt" 1`
  //         activeGlyphContainer.style['font-variation-settings'] = `"wght" 700, "slnt" 1`
  //       }else if(typeValue=="Black"){
  //         container.style['font-variation-settings'] = `"wght" 800, "slnt" 0`
  //         activeGlyphContainer.style['font-variation-settings'] = `"wght" 800, "slnt" 0`
  //       }else if(typeValue=="Black Italic"){
  //         container.style['font-variation-settings'] = `"wght" 800, "slnt" 1`
  //         activeGlyphContainer.style['font-variation-settings'] = `"wght" 800, "slnt" 1`
  //       }
  //     })
  // })


    glyphs.forEach(glyph=>{

      glyph.addEventListener('mouseenter', ()=>{
        const hoveredGlyph = glyph.innerHTML
        activeGlyphContainer.innerHTML = hoveredGlyph


// GLYPH NAME ==========================================
        const glyphName = glyph.getAttribute('data-name')
        detailsOne.innerHTML = glyphName


        var hex = hoveredGlyph.codePointAt(0).toString(16);
        var result = "\\u" + "0000".substring(0, 4 - hex.length) + hex;
        var unicode = result.substr(1);
        var formattedUnicode = 'U+' + unicode.slice(1, 5)

        detailsTwo.innerHTML = formattedUnicode

// OPENTYPE FEATURES==========================================
        const openType = glyph.getAttribute('data-opentype')
        
        if(openType == 'ss01'){
          activeGlyphContainer.classList.add('ss01')
        } else{
          activeGlyphContainer.classList.remove('ss01')
        }
        if(openType == 'ss02'){
          activeGlyphContainer.classList.add('ss02')
        } else{
          activeGlyphContainer.classList.remove('ss02')
        }
        if(openType == 'ss03'){
          activeGlyphContainer.classList.add('ss03')
        } else{
          activeGlyphContainer.classList.remove('ss03')
        }
        if(openType == 'lnum'){
          activeGlyphContainer.classList.add('lnum')
        } else{
          activeGlyphContainer.classList.remove('lnum')
        }
     
      })
    })
}

introGlyphsSection()







// TESTER SECTION =========================================================================


const testerText = document.querySelector('.tester-text')
const testerOptions = document.querySelector('div.tester-options')
let tc = 0
let tcTwo = 0
testerText.addEventListener('click', ()=>{
      tcTwo = tcTwo+1
      if(tcTwo==1){
        testerOptions.classList.add('open')
        testerText.innerHTML='Type anthing...'
        testerText.style.animation = 'none'
        testerText.style.opacity = 0.4
        // testerText.style.color = 'white'
      }
      
})


testerText.addEventListener('keydown', ()=>{
      tc = tc+1
      if(tc==1){
        testerText.innerHTML=' '
        testerText.style.opacity = 1
      }
      
})


  const testerSelect = testerOptions.querySelector('select')

  const testerSizeTag = testerOptions.querySelector('input[name="typesize"]')
  const testerSizeOutput = testerOptions.querySelector('span.size-output')
  const letterSpacingTag = testerOptions.querySelector('input[name="letter-spacing"]')
  const letterSpacingOutput = testerOptions.querySelector('span.letter-spacing-output')
  const lineHeightTag = testerOptions.querySelector('input[name="line-height"]')
  const lineHeightOutput = testerOptions.querySelector('span.line-height-output')

  if(testerSizeTag){
    testerSizeTag.addEventListener('input', function(){
      testerText.style.fontSize = this.value + 'px'
      testerSizeOutput.innerHTML = this.value + 'px'
    })
  }

  // let textSize =  window.getComputedStyle(text, null).getPropertyValue('font-size');
  // let t = parseInt(textSize, 10)
  // sizeOutput.innerHTML = t + 'px'
  // sizeTag.value= t
    
  if(lineHeightTag){
    lineHeightTag.addEventListener('input', ()=>{
      testerText.style.lineHeight = lineHeightTag.value
      lineHeightOutput.innerHTML = lineHeightTag.value
    })
  }
  if(letterSpacingTag){
    letterSpacingTag.addEventListener('input', ()=>{
      testerText.style.letterSpacing = letterSpacingTag.value
      letterSpacingOutput.innerHTML = letterSpacingTag.value
    })
  }




  const tObserver = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.intersectionRatio >= 0.3) {
          testerOptions.style.opacity = 1
        } else{
          testerOptions.style.opacity = 0
        }
      })
    },
    {
      threshold: [0, 0.1, 0.2, 0.3, 1]
    }
  )
tObserver.observe(testerText)







const sampleRight = document.querySelector('div.sample-right-50')
const sampleLeft = document.querySelector('div.sample-left-50')
const downloadSection = document.querySelector('section.tf-download')
const tfIndexSection = document.querySelector('section.tf-page-index')
const indexContainers = document.querySelectorAll('div.index-container')
const sampleSelects = document.querySelectorAll('select.select-css')

  bwIcon.addEventListener('click', ()=>{
    // stylesSection.classList.toggle('color-toggle-on')
    // samplesSection.classList.toggle('color-toggle-on')
    bodyTag.classList.toggle('color-toggle-on')
    // glyphsSection.classList.toggle('color-toggle-on')
    // testerSection.classList.toggle('color-toggle-on')
    // testerOptions.classList.toggle('color-toggle-on')
    menu.classList.toggle('color-toggle-on')
    // downloadSection.classList.toggle('color-toggle-on')
    // tfIndexSection.classList.toggle('color-toggle-on')
    // mainTag.classList.toggle('color-toggle-on')
    headerBg.classList.toggle('color-toggle-on')
    // indexContainers.forEach(container=>{
    //   container.classList.toggle('color-toggle-on')
    // })
    sampleSelects.forEach(select=>{
      select.classList.toggle('color-toggle-on')
    })
    
    if(bodyTag.classList.contains('color-toggle-on')){
        sampleRight.classList.add('color')
        bwIcon.src = "assets/B-W-black.png"
        
        anchorTags.forEach(tag=>{
            tag.style.color = 'var(--black)'
        })
    } else{
        bwIcon.src = "assets/B-W-white.svg"

        anchorTags.forEach(tag=>{
            tag.style.color = 'var(--white)'
        })
    }
})

