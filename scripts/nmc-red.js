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
    if(typeValue=="Red Extra-Light"){
      text.style['font-variation-settings'] = `"wght" 100, 'slnt' 0`
      weightTag.value = 100
      weightOutput.innerHTML = '100'
      slantTag.value = 0
      slantOutput.innerHTML = '0'
    }else if(typeValue=="Red Extra-Light Italic"){
      text.style['font-variation-settings'] = `"wght" 100, 'slnt' 1`
      weightTag.value = 100
      weightOutput.innerHTML = '100'
      slantTag.value = 1
      slantOutput.innerHTML = '1'
    }else if(typeValue=="Red Light"){
      text.style['font-variation-settings'] = `"wght" 200, 'slnt' 0`
      weightTag.value = 200
      weightOutput.innerHTML = '200'
      slantTag.value = 0
      slantOutput.innerHTML = '0'
    }else if(typeValue=="Red Light Italic"){
      text.style['font-variation-settings'] = `"wght" 200, 'slnt' 1`
      weightTag.value = 200
      weightOutput.innerHTML = '200'
      slantTag.value = 1
      slantOutput.innerHTML = '1'
    }else if(typeValue=="Red Regular"){
      text.style['font-variation-settings'] = `"wght" 400, 'slnt' 0`
      weightTag.value = 400
      weightOutput.innerHTML = '400'
      slantTag.value = 0
      slantOutput.innerHTML = '0'
    }else if(typeValue=="Red Regular Italic"){
      text.style['font-variation-settings'] = `"wght" 400, 'slnt' 1`
      weightTag.value = 400
      weightOutput.innerHTML = '400'
      slantTag.value = 1
      slantOutput.innerHTML = '1'
    }else if(typeValue=="Red Medium"){
      text.style['font-variation-settings'] = `"wght" 500, 'slnt' 0`
      weightTag.value = 500
      weightOutput.innerHTML = '500'
      slantTag.value = 0
      slantOutput.innerHTML = '0'
    }else if(typeValue=="Red Medium Italic"){
      text.style['font-variation-settings'] = `"wght" 500, 'slnt' 1`
      weightTag.value = 500
      weightOutput.innerHTML = '500'
      slantTag.value = 1
      slantOutput.innerHTML = '1'
    }else if(typeValue=="Red Semi-Bold"){
      text.style['font-variation-settings'] = `"wght" 600, 'slnt' 0`
      weightTag.value = 600
      weightOutput.innerHTML = '600'
      slantTag.value = 0
      slantOutput.innerHTML = '0'
    }else if(typeValue=="Red Semi-Bold Italic"){
      text.style['font-variation-settings'] = `"wght" 600, 'slnt' 1`
      weightTag.value = 600
      weightOutput.innerHTML = '600'
      slantTag.value = 1
      slantOutput.innerHTML = '1'
    }else if(typeValue=="Red Bold"){
      text.style['font-variation-settings'] = `"wght" 700, 'slnt' 0`
      weightTag.value = 700
      weightOutput.innerHTML = '700'
      slantTag.value = 0
      slantOutput.innerHTML = '0'
    }else if(typeValue=="Red Bold Italic"){
      text.style['font-variation-settings'] = `"wght" 700, 'slnt' 1`
      weightTag.value = 700
      weightOutput.innerHTML = '700'
      slantTag.value = 1
      slantOutput.innerHTML = '1'
    }else if(typeValue=="Red Black"){
      text.style['font-variation-settings'] = `"wght" 800, 'slnt' 0`
      weightTag.value = 800
      weightOutput.innerHTML = '800'
      slantTag.value = 0
      slantOutput.innerHTML = '0'
    }else if(typeValue=="Red Black Italic"){
      text.style['font-variation-settings'] = `"wght" 800, 'slnt' 1`
      weightTag.value = 800
      weightOutput.innerHTML = '800'
      slantTag.value = 1
      slantOutput.innerHTML = '1'
    }
  
  })

})





testerSelect.addEventListener('change', ()=>{
  const typeValue = testerSelect.value
  
  if(typeValue=="Red Extra-Light"){
    testerText.style['font-variation-settings'] = `"wght" 100, 'slnt' 0`

  }else if(typeValue=="Red Extra-Light Italic"){
    testerText.style['font-variation-settings'] = `"wght" 100, 'slnt' 1`

  }else if(typeValue=="Red Light"){
    testerText.style['font-variation-settings'] = `"wght" 200, 'slnt' 0`

  }else if(typeValue=="Red Light Italic"){
    testerText.style['font-variation-settings'] = `"wght" 200, 'slnt' 1`

  }else if(typeValue=="Red Regular"){
    testerText.style['font-variation-settings'] = `"wght" 400, 'slnt' 0`

  }else if(typeValue=="Red Regular Italic"){
    testerText.style['font-variation-settings'] = `"wght" 400, 'slnt' 1`

  }else if(typeValue=="Red Medium"){
    testerText.style['font-variation-settings'] = `"wght" 500, 'slnt' 0`

  }else if(typeValue=="Red Medium Italic"){
    testerText.style['font-variation-settings'] = `"wght" 500, 'slnt' 1`

  }else if(typeValue=="Red Semi-Bold"){
    testerText.style['font-variation-settings'] = `"wght" 600, 'slnt' 0`

  }else if(typeValue=="Red Semi-Bold Italic"){
    testerText.style['font-variation-settings'] = `"wght" 600, 'slnt' 1`
    
  }else if(typeValue=="Red Bold"){
    testerText.style['font-variation-settings'] = `"wght" 700, 'slnt' 0`

  }else if(typeValue=="Red Bold Italic"){
    testerText.style['font-variation-settings'] = `"wght" 700, 'slnt' 1`

  }else if(typeValue=="Red Black"){
    testerText.style['font-variation-settings'] = `"wght" 800, 'slnt' 0`

  }else if(typeValue=="Red Black Italic"){
    testerText.style['font-variation-settings'] = `"wght" 800, 'slnt' 1`

  }
})


