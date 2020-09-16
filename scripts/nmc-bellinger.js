// SAMPLES SECTION


samples.forEach(sample=>{
  const sampleSelect = sample.querySelector('select')
  const weightTag = sample.querySelector('input[name="weight"]')
  const weightOutput = sample.querySelector('span.weight-output')
  const slantTag = sample.querySelector('input[name="slant"]')
  const slantOutput = sample.querySelector('span.slant-output')
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
    
  if(slantTag){
    slantTag.addEventListener('input', function(){
      let weight = weightTag.value
      let slant = slantTag.value
      text.style['font-variation-settings'] = `"wght" ${weight}, "slnt" ${slant}`
      slantOutput.innerHTML = slant
    })
  }
  
  if(weightTag){
    weightTag.addEventListener('input', function(){
      let weight = weightTag.value
      let slant = slantTag.value
      text.style['font-variation-settings'] = `"wght" ${weight}, "slnt" ${slant}`
      weightOutput.innerHTML = weight
    })
   
  }

  sampleSelect.addEventListener('change', ()=>{
    const typeValue = sampleSelect.value
    if(typeValue=="Bellinger Regular"){
      text.style.fontFamily = 'NMC Bellinger Regular'

    }else if(typeValue=="Bellinger Medium"){
      text.style.fontFamily = 'NMC Bellinger Medium'

    }else if(typeValue=="Bellinger Semi-Bold"){
      text.style.fontFamily = 'NMC Bellinger Semi-Bold'

    }else if(typeValue=="Bellinger Bold"){
      text.style.fontFamily = 'NMC Bellinger Bold'

    }else if(typeValue=="Bellinger Heavy"){
      text.style.fontFamily = 'NMC Bellinger Heavy'

    }else if(typeValue=="Bellinger Ultra"){
      text.style.fontFamily = 'NMC Bellinger Ultra'

    }else if(typeValue=="Bellinger Italic"){
      text.style.fontFamily = 'NMC Bellinger Italic'

    }else if(typeValue=="Bellinger Medium Italic"){
      text.style.fontFamily = 'NMC Bellinger Medium Italic'

    }else if(typeValue=="Bellinger Semi-Bold Italic"){
      text.style.fontFamily = 'NMC Bellinger Semi-Bold Italic'

    }else if(typeValue=="Bellinger Bold Italic"){
      text.style.fontFamily = 'NMC Bellinger Bold Italic'

    }else if(typeValue=="Bellinger Heavy Italic"){
      text.style.fontFamily = 'NMC Bellinger Heavy Italic'

    }else if(typeValue=="Bellinger Ultra Italic"){
      text.style.fontFamily = 'NMC Bellinger Ultra Italic'

    }
  
  })

})


testerSelect.addEventListener('change', ()=>{
  const typeValue = testerSelect.value
  if(typeValue=="Bellinger Regular"){
    testerText.style.fontFamily = 'NMC Bellinger Regular'

  }else if(typeValue=="Bellinger Medium"){
    testerText.style.fontFamily = 'NMC Bellinger Medium'

  }else if(typeValue=="Bellinger Semi-Bold"){
    testerText.style.fontFamily = 'NMC Bellinger Semi-Bold'

  }else if(typeValue=="Bellinger Bold"){
    testerText.style.fontFamily = 'NMC Bellinger Bold'

  }else if(typeValue=="Bellinger Heavy"){
    testerText.style.fontFamily = 'NMC Bellinger Heavy'

  }else if(typeValue=="Bellinger Ultra"){
    testerText.style.fontFamily = 'NMC Bellinger Ultra'

  }else if(typeValue=="Bellinger Italic"){
    testerText.style.fontFamily = 'NMC Bellinger Italic'

  }else if(typeValue=="Bellinger Medium Italic"){
    testerText.style.fontFamily = 'NMC Bellinger Medium Italic'

  }else if(typeValue=="Bellinger Semi-Bold Italic"){
    testerText.style.fontFamily = 'NMC Bellinger Semi-Bold Italic'

  }else if(typeValue=="Bellinger Bold Italic"){
    testerText.style.fontFamily = 'NMC Bellinger Bold Italic'

  }else if(typeValue=="Bellinger Heavy Italic"){
    testerText.style.fontFamily = 'NMC Bellinger Heavy Italic'

  }else if(typeValue=="Bellinger Ultra Italic"){
    testerText.style.fontFamily = 'NMC Bellinger Ultra Italic'

  }

})
