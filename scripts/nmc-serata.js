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
    if(typeValue=="Serata Thin"){
      text.style.fontFamily = "NMC Serata Display Thin"

    }else if(typeValue=="Serata Extra-Light"){
      text.style.fontFamily = "NMC Serata Display Extra-Light"

    }else if(typeValue=="Serata Light"){
      text.style.fontFamily = "NMC Serata Display Light"

    }else if(typeValue=="Serata Regular"){
      text.style.fontFamily = "NMC Serata Display Regular"

    }else if(typeValue=="Serata Medium"){
      text.style.fontFamily = "NMC Serata Display Medium"

    }else if(typeValue=="Serata Semi-Bold"){
      text.style.fontFamily = "NMC Serata Display Semi-Bold"

    }else if(typeValue=="Serata Bold"){
      text.style.fontFamily = "NMC Serata Display Bold"

    }
  
  })

})




testerSelect.addEventListener('change', ()=>{
  const typeValue = testerSelect.value
  
  if(typeValue=="Serata Thin"){
    testerText.style.fontFamily = "NMC Serata Display Thin"

  }else if(typeValue=="Serata Extra-Light"){
    testerText.style.fontFamily = "NMC Serata Display Extra-Light"

  }else if(typeValue=="Serata Light"){
    testerText.style.fontFamily = "NMC Serata Display Light"

  }else if(typeValue=="Serata Regular"){
    testerText.style.fontFamily = "NMC Serata Display Regular"

  }else if(typeValue=="Serata Medium"){
    testerText.style.fontFamily = "NMC Serata Display Medium"

  }else if(typeValue=="Serata Semi-Bold"){
    testerText.style.fontFamily = "NMC Serata Display Semi-Bold"

  }else if(typeValue=="Serata Bold"){
    testerText.style.fontFamily = "NMC Serata Display Bold"

  }
})