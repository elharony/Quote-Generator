const quoteElem = document.querySelector('#quote')
const authorElem = document.querySelector('#author')
const generateBtns = document.querySelectorAll('.generate-btn')
const main = document.querySelector('main')
const quotesContainer = document.querySelector('.quotes-container')
const quotesWrapper = document.querySelector('.quotes-wrapper')
const quotesGrid = document.querySelector('.quotes')
const showAll = document.querySelector('#show-all')
const quoteCounter = document.querySelector('#quote-counter')
let currentQuoteIndex;
let currentQuoteCounter = quoteCounter.options[quoteCounter.selectedIndex].value;


/**
 * `Click` Event Listener
 * Animate the `quotesGrid` to enter the UI
 * Display all available `quotes`
 */
showAll.addEventListener('click', () => {
  quotesWrapper.classList.add('animate')

  /**
   * Create `quoteWrapper`, `quoteTitle` and `quoteAuthor` elements
   * Fill them with associated data
   * Append both `quoteTitle` and `quoteAuthor` elements inside `quoteInner`
   * Append everything in each other, and finally append to the `quotesGrid`
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
    quotesGrid.appendChild(quoteWrapper)
  }
})

/**
 * Hide `all quotes` grid
 */
function hideGrid() {
  quotesWrapper.classList.remove('animate')
}

/**
 * Update `quote-counter` value
 */
function updateCounter() {
  currentQuoteCounter = quoteCounter.options[quoteCounter.selectedIndex].value
}



// Click Event
for(let i = 0; i < generateBtns.length; i++) {

  /**
   * Add `click` event to each `generateBtns`
   * Invoke the `getRandomQuote`
   * Pass the `data-value` attribute
   **/
  generateBtns[i].addEventListener('click', () => {
    getRandomQuote(generateBtns[i].getAttribute('data-value'), currentQuoteCounter)
  })
}


getRandomQuote = (category, howMany) => {

  // Empty before adding new quotes
  quotesContainer.innerHTML = ''

  for(let i=0; i < howMany; i++) {
    let rand = getRandomInt(0, 58)

    // If we get the same quote, get another one
    if(rand === currentQuoteIndex) {
      return getRandomQuote(category, currentQuoteCounter)
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
        return getRandomQuote(category, currentQuoteCounter)
      }
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
   let quoteElem = document.createElement('h2')
   quoteElem.classList.add('quote')
   let authorElem = document.createElement('p')
   authorElem.classList.add('author')
   quoteElem.innerHTML = selectedQuote.quote
   authorElem.innerHTML = `- ${selectedQuote.author}`

   quotesContainer.appendChild(quoteElem)
   quotesContainer.appendChild(authorElem)

   /**
    * Change the background
    */
   main.style.background = `#ffffff url(./img/${selectedQuote.category.toLowerCase()}.jpg) center`
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
  getRandomQuote('All', currentQuoteCounter)
})()