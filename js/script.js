/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/

const quotes = [
  {quote: 'Trying to define yourself is like trying to bite your own teeth.', name: 'Alan Watts'},
  {quote: 'What good is the warmth of summer, without the cold of winter to give it sweetness.', name: 'John Steinbeck' },
  {quote: 'The man who does not read good books has no advantage over the man who cannot read them.', name: 'Mark Twain'},
  {quote: 'Sometimes even to live is an act of courage.', name: 'Seneca'},
  {quote: 'Freedom is nothing but a chance to be better.',name: 'Albert Camus'},

]


/***
 * `getRandomQuote` function
***/

function getRandomQuote(array) {
  //creates random number to insert into array value

  const randomQuote = Math.ceil(Math.random() * quotes.length - 1) 

  //creates variables so that the function can return both the quote and name
  let quoteRandom = quotes[randomQuote].quote
  let nameRandom = quotes[randomQuote].name
  return {quoteRandom, nameRandom}
}

//initializes function and pulls the name and quote from it
let randomQuote = getRandomQuote()

let quoteRandom = randomQuote.quoteRandom
let nameRandom = randomQuote.nameRandom

console.log(quoteRandom)
console.log(nameRandom)



/***
 * `printQuote` function
***/

// variable to add quote into quote box
const printRandom = document.querySelector('#quote-box')


//function that adds quote & source into quote box
function printQuote () {
  
  // change contents of quote box and run new random quote
    printRandom.innerHTML = `<p class="quote">${quoteRandom}</p> <p class="source"> ${nameRandom} </p>`
    getRandomQuote(quotes)
  
}



/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);