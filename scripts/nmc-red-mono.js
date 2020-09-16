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
    

  if(weightTag){
    weightTag.addEventListener('input', function(){
      let weight = weightTag.value
      // let slant = slantTag.value
      text.style['font-variation-settings'] = `"wght" ${weight}`
      weightOutput.innerHTML = weight
    })
   
  }

  sampleSelect.addEventListener('change', ()=>{
    const typeValue = sampleSelect.value
    if(typeValue=="Red Mono Extra-Light"){
      text.style['font-variation-settings'] = `'wght' 100`
      // weightTag.value = 400
      // weightOutput.innerHTML = '400'
      // slantTag.value = 1
      // slantOutput.innerHTML = '1'
    }else if(typeValue=="Red Mono Light"){
      text.style['font-variation-settings'] = `'wght' 200`

    }else if(typeValue=="Red Mono Regular"){
      text.style['font-variation-settings'] = `'wght' 400`

    }else if(typeValue=="Red Mono Medium"){
      text.style['font-variation-settings'] = `'wght' 500`

    }else if(typeValue=="Red Mono Semi-Bold"){
      text.style['font-variation-settings'] = `'wght' 600`

    }else if(typeValue=="Red Mono Bold"){
      text.style['font-variation-settings'] = `'wght' 700`

    }else if(typeValue=="Red Mono Black"){
      text.style['font-variation-settings'] = `'wght' 800`

    }
  })


})



testerSelect.addEventListener('change', ()=>{
  const typeValue = testerSelect.value
  if(typeValue=="Red Mono Extra-Light"){
    testerText.style['font-variation-settings'] = `'wght' 100`

  }else if(typeValue=="Red Mono Light"){
    testerText.style['font-variation-settings'] = `'wght' 200`

  }else if(typeValue=="Red Mono Regular"){
    testerText.style['font-variation-settings'] = `'wght' 400`

  }else if(typeValue=="Red Mono Medium"){
    testerText.style['font-variation-settings'] = `'wght' 500`

  }else if(typeValue=="Red Mono Semi-Bold"){
    testerText.style['font-variation-settings'] = `'wght' 600`

  }else if(typeValue=="Red Mono Bold"){
    testerText.style['font-variation-settings'] = `'wght' 700`

  }else if(typeValue=="Red Mono Black"){
    testerText.style['font-variation-settings'] = `'wght' 800`

  }
  
})
