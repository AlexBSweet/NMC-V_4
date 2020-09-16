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

  sampleSelect.addEventListener('change', ()=>{
    const typeValue = sampleSelect.value
    if(typeValue=="Serata Text Light"){
      text.style.fontFamily = "NMC Serata Text Light"

    }else if(typeValue=="Serata Text Regular"){
      text.style.fontFamily = "NMC Serata Text Regular"

    }else if(typeValue=="Serata Text Medium"){
      text.style.fontFamily = "NMC Serata Text Medium"

    }else if(typeValue=="Serata Text Semi-Bold"){
      text.style.fontFamily = "NMC Serata Text Semi-Bold"

    }else if(typeValue=="Serata Text Bold"){
      text.style.fontFamily = "NMC Serata Text Bold"

    }
  })


})



testerSelect.addEventListener('change', ()=>{
  const typeValue = testerSelect.value
  
  if(typeValue=="Serata Text Light"){
    testerText.style.fontFamily = "NMC Serata Text Light"

  }else if(typeValue=="Serata Text Regular"){
    testerText.style.fontFamily = "NMC Serata Text Regular"

  }else if(typeValue=="Serata Text Medium"){
    testerText.style.fontFamily = "NMC Serata Text Medium"

  }else if(typeValue=="Serata Text Semi-Bold"){
    testerText.style.fontFamily = "NMC Serata Text Semi-Bold"

  }else if(typeValue=="Serata Text Bold"){
    testerText.style.fontFamily = "NMC Serata Text Bold"

  }
})
