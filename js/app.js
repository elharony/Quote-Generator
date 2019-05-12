const quoteElem = document.querySelector('#quote')
const authorElem = document.querySelector('#author')
const generateBtns = document.querySelectorAll('.generate-btn')
const main = document.querySelector('main')
const quotesWrapper = document.querySelector('.quotes-wrapper')
const quotesContainer = document.querySelector('.quotes')
const showAll = document.querySelector('#show-all')
let currentQuoteIndex;


/**
 * `Click` Event Listener
 * Animate the `quotesContainer` to enter the UI
 * Display all available `quotes`
 */
showAll.addEventListener('click', () => {
  quotesWrapper.classList.add('animate')

  /**
   * Create `quoteWrapper`, `quoteTitle` and `quoteAuthor` elements
   * Fill them with associated data
   * Append both `quoteTitle` and `quoteAuthor` elements inside `quoteInner`
   * Append everything in each other, and finally append to the `quotesContainer`
   */
  for(quote of quotes) {
    let quoteWrapper = document.createElement('div')
    quoteWrapper.classList.add('quote')
    let quoteInner = document.createElement('div')
    let quoteTitle = document.createElement('h2')
    let quoteAuthor = document.createElement('p')

    quoteTitle.innerHTML = quote.quote
    quoteAuthor.innerHTML = `- ${quote.author} <b>in</b> ${quote.category}`

    quoteInner.appendChild(quoteTitle)
    quoteInner.appendChild(quoteAuthor)

    quoteWrapper.appendChild(quoteInner)
    quotesContainer.appendChild(quoteWrapper)
  }
})

/**
 * Hide `all quotes` grid
 */
function hideGrid() {
  quotesWrapper.classList.remove('animate')
}



// Click Event
for(let i = 0; i < generateBtns.length; i++) {

  /**
   * Add `click` event to each `generateBtns`
   * Invoke the `getRandomQuote`
   * Pass the `data-value` attribute
   **/
  generateBtns[i].addEventListener('click', () => {
    getRandomQuote(generateBtns[i].getAttribute('data-value'))
  })
}


getRandomQuote = (category) => {
  let rand = getRandomInt(0, 58)

  // If we get the same quote, get another one
  if(rand === currentQuoteIndex) {
    return getRandomQuote(category)
  }

  // Get Quotes based on the selected Category
  if(category == 'All') {
    displayQuote(rand)
  } else {

    /**
     * If `category` != 'All',
     * Do we get the same category randomly?
     * If so, display that quote
     * If not, recursive!
     */
    if(quotes[rand].category == category) {
      displayQuote(rand)
    } else {
      return getRandomQuote(category)
    }
  }
}


displayQuote = (randomQuoteIndex) => {

   // Update current index
   currentQuoteIndex = randomQuoteIndex
  
  /**
   * Cache the selected quote - `quotes[randomQuoteIndex]`
   * Display the `quote` text
   * Display the `author` text
   */
   let selectedQuote = quotes[randomQuoteIndex]
   quoteElem.innerHTML = selectedQuote.quote
   authorElem.innerHTML = `- ${selectedQuote.author}`

   /**
    * Change the background
    */
   main.style.background = `#ffffff url(../img/${selectedQuote.category}.jpg) center`
   main.style.backgroundSize = 'cover'
}


// SOF: https://stackoverflow.com/a/1527820/5560399
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


// Startup Quote
(function init() {
  getRandomQuote('All')
})()