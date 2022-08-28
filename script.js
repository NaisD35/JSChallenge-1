const rangeInputs = document.querySelectorAll('input[type="range"]')
let slideOne = document.getElementById('slideOne');

function handleInputChange(e) {
  let target = e.target
  if (e.target.type !== 'range') {
    target = document.getElementById('range')
  } 
  const min = target.min
  const max = target.max
  const val = target.value
  let pageViews = document.getElementById('pageviews');
  let perMonth = document.getElementById('permonth');
  let price = Math.trunc(val*0.16)
  let yearlyPrice = Math.trunc(price*0.75)
  
  target.style.backgroundSize = (val - min) * 100 / (max - min) + '% 100%'  
  pageViews.innerHTML=val+'K'
  perMonth.innerHTML= '$' + price + '.00';

  if (slideOne.checked) {
    perMonth.innerHTML= '$' + yearlyPrice + '.00';
  }

} 


rangeInputs.forEach(input => {
  input.addEventListener('input', handleInputChange);
})

