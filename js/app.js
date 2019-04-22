const quoteElem = document.querySelector('#quote')
const generateBtn = document.querySelector('#generate')


generateBtn.addEventListener('click', () => {
  getRandomQuote()
})

getRandomQuote = () => {
  let rand = getRandomInt(0, 27)
  console.log(rand)
  let selectedQuote = quotes[rand]
  quoteElem.innerHTML = selectedQuote.quote
  console.log(selectedQuote)
}

// SOF: https://stackoverflow.com/a/1527820/5560399
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


// Startup Quote
(function init() {
  getRandomQuote()
})()