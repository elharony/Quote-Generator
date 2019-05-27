const main = document.querySelector('main')

/* Quote Body */
const quotesContainer = document.querySelector('.quotes-container')

/* Quote Options */
const generateBtns = document.querySelectorAll('.generate-btn')
const quoteCounter = document.querySelector('#quote-counter')
const showAll = document.querySelector('#show-all')
let currentQuoteIndex
let currentQuoteCounter = quoteCounter.options[quoteCounter.selectedIndex].value

/* Gridview */
const quotesWrapper = document.querySelector('.quotes-wrapper')
const quotesGrid = document.querySelector('.quotes')




/************************************************************
 * ############
 * Program Flow
 * ############
 * 1) `init`: Initial Startup Quote
 * 2) Add `click` event to quote `category` button
 * 3) `getRandomInt`: Generate `random` integer number
 * 4) `getRandomQuote`: Loop on `howMuch` quotes, call `getRandomInt`, avoid `category` duplication, call `displayQuote`
 * 5) `displayQuote`: Build the quote DOM, according to the given `random` quote index
 * 6) Add `click` event to `Show All` grid button, start the enter animation of the `quotesWrapper`
 * 7) `hideGrid`: Click on the `X` button, start the exit animation of the `quotesQrapper`
 ***********************************************************/




/**
 * Add `click` event to each `generateBtns` element (i.e. `Random`, `Business`)
 * Invoke the `getRandomQuote`
 * Pass the `data-value` attribute
 */
for(let i = 0; i < generateBtns.length; i++) {
  generateBtns[i].addEventListener('click', () => {
    getRandomQuote(generateBtns[i].getAttribute('data-value'), currentQuoteCounter)
  })
}


/**
 * Update the required quotes number (i.e. `howMuch` parameter)
 */
function updateCounter() {
  currentQuoteCounter = quoteCounter.options[quoteCounter.selectedIndex].value
}


/**
 * @returns Random integer within the "min" and "max" range
 * SOF: https://stackoverflow.com/a/1527820/5560399
 */
function getRandomInt(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min
}


/**
 * Get the required `category` and `howMany` quotes to be displayed
 * Generate `random` quotes indexes
 * Avoid Duplication
 * If it went well, invoke the `displayQuote` to show random quote(s)
 * If not, run the function again!
 */
getRandomQuote = (category, howMany) => {

  // Empty before adding new quotes
  quotesContainer.innerHTML = ''

  for(let i=0; i < howMany; i++) {
    let rand = getRandomInt(0, 58)

    // **Avoid Duplication** If we get the same quote, get another one
    if(rand === currentQuoteIndex) {
      return getRandomQuote(category, currentQuoteCounter)
    }

    /**
     * Get Quotes based on the selected Category
     * If `category` != 'All',
     * Do we get the same category randomly?
     * If so, display that quote
     * If not, recursive!
     */
    if(category == 'All') {
      displayQuote(rand)
    } else {
      if(quotes[rand].category == category) {
        displayQuote(rand)
      } else {
        return getRandomQuote(category, currentQuoteCounter)
      }
    }
  }
}


/**
 * Create the DOM to show a quote, according to the given quote index
 */
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


/**
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
 * Animate the `quotesGrid` to exit the UI
 * DON'T remove the current displayed `quotes`
 */
function hideGrid() {
  quotesWrapper.classList.remove('animate')
}


/**
 * Startup Quote
 */
(function init() {
  getRandomQuote('All', currentQuoteCounter)
})()