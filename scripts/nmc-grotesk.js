// SAMPLES SECTION



samples.forEach(sample=>{
  const sampleSelect = sample.querySelector('select')

  const sizeTag = sample.querySelector('input[name="typesize"]')
  const sizeOutput = sample.querySelector('span.size-output')
  const text = sample.querySelector('p')

  if(sizeTag){
    sizeTag.addEventListener('input', function(){
      text.style.fontSize = this.value + 'px'
      sizeOutput.innerHTML = this.value + 'px'
    })
  }
    
  let textSize =  window.getComputedStyle(text, null).getPropertyValue('font-size');
  let t = parseInt(textSize, 10)
  sizeOutput.innerHTML = t + 'px'
  sizeTag.value= t



  sampleSelect.addEventListener('change', ()=>{
    const typeValue = sampleSelect.value
    if(typeValue=="Grotesk Thin"){
      text.style.fontFamily = "NMC Grotesk Thin"

    }else if(typeValue=="Grotesk Extra-Light"){
      text.style.fontFamily = "NMC Grotesk Extra-Light"

    }else if(typeValue=="Grotesk Light"){
      text.style.fontFamily = "NMC Grotesk Light"

    }else if(typeValue=="Grotesk Regular"){
      text.style.fontFamily = "NMC Grotesk Regular"

    }else if(typeValue=="Grotesk Medium"){
      text.style.fontFamily = "NMC Grotesk Medium"
  
    }else if(typeValue=="Grotesk Semi-Bold"){
      text.style.fontFamily = "NMC Grotesk Semi-Bold"

    }else if(typeValue=="Grotesk Bold"){
      text.style.fontFamily = "NMC Grotesk Bold"

    }else if(typeValue=="Grotesk Black"){
      text.style.fontFamily = "NMC Grotesk Black"

    }else if(typeValue=="Grotesk Heavy"){
      text.style.fontFamily = "NMC Grotesk Heavy"

    }
  
  })


})





testerSelect.addEventListener('change', ()=>{
  const typeValue = testerSelect.value
  if(typeValue=="Grotesk Thin"){
    testerText.style.fontFamily = "NMC Grotesk Thin"

  }else if(typeValue=="Grotesk Extra-Light"){
    testerText.style.fontFamily = "NMC Grotesk Extra-Light"

  }else if(typeValue=="Grotesk Light"){
    testerText.style.fontFamily = "NMC Grotesk Light"

  }else if(typeValue=="Grotesk Regular"){
    testerText.style.fontFamily = "NMC Grotesk Regular"

  }else if(typeValue=="Grotesk Medium"){
    testerText.style.fontFamily = "NMC Grotesk Medium"

  }else if(typeValue=="Grotesk Semi-Bold"){
    testerText.style.fontFamily = "NMC Grotesk Semi-Bold"

  }else if(typeValue=="Grotesk Bold"){
    testerText.style.fontFamily = "NMC Grotesk Bold"

  }else if(typeValue=="Grotesk Black"){
    testerText.style.fontFamily = "NMC Grotesk Black"

  }else if(typeValue=="Grotesk Heavy"){
    testerText.style.fontFamily = "NMC Grotesk Heavy"

  }
})