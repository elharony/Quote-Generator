const quoteElem = document.querySelector('#quote')
const authorElem = document.querySelector('#author')
const generateBtn = document.querySelector('#generate')
let currentQuoteIndex;

generateBtn.addEventListener('click', () => {
  getRandomQuote()
})

getRandomQuote = () => {
  let rand = getRandomInt(0, 3)
  console.log(rand)

  // If we get the same quote, get another one
  if(rand === currentQuoteIndex) {
    console.log("SAME!")
    return getRandomQuote()
  }

  // Update current index
  currentQuoteIndex = rand
  
  // Display quote
  let selectedQuote = quotes[rand]
  quoteElem.innerHTML = selectedQuote.quote
  authorElem.innerHTML = `- ${selectedQuote.author}`
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