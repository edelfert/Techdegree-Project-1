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
  {quote: 'Trying to define yourself is like trying to bite your own teeth.', source: 'Alan Watts'},
  {quote: 'What good is the warmth of summer, without the cold of winter to give it sweetness.', source: 'John Steinbeck', citation: 'Travels with Charley'},
  {quote: 'The man who does not read good books has no advantage over the man who cannot read them.', source: 'Mark Twain', year: '1895'},
  {quote: 'Sometimes even to live is an act of courage.', source: 'Seneca'},
  {quote: 'Freedom is nothing but a chance to be better.', source: 'Albert Camus'},

]


/***
 * `getRandomQuote` function
***/

function getRandomQuote(array) {
  //creates random number to insert into array value

  const randomQuote = Math.ceil(Math.random() * quotes.length - 1) 

  //creates variables so that the function can return quote, source, citation, and year
  let quoteRandom = quotes[randomQuote].quote;
  let nameRandom = quotes[randomQuote].source;
  let randomYear = quotes[randomQuote].year;
  let randomCitation = quotes[randomQuote].citation
  return {quoteRandom, nameRandom, randomYear, randomCitation}
}

//initializes function and pulls the data from object
// let randomQuote = getRandomQuote(quotes)

// let quoteRandom = randomQuote.quoteRandom
// let nameRandom = randomQuote.nameRandom
// let yearRandom = randomQuote.randomYear
// let citationRandom = randomQuote.randomCitation

// console.log(quoteRandom)
// console.log(nameRandom)



/***
 * `printQuote` function
***/

// variable to add quote into quote box
const printRandom = document.getElementById('quote-box')


//printQuote Do Over

function printQuote () {
  //Create variable to store a random quote object from getRandomQuote function
  let randomPrint = getRandomQuote(quotes); 

  //Create another variable to store HTML String
  let html = `<p class="quote">${randomPrint.quoteRandom} </p> <p class="source"> ${randomPrint.nameRandom} `
  if (randomPrint.randomYear){
    html = `${html} <span class="year"> ${randomPrint.randomYear} </span> </p>` 
  } 
  if (randomPrint.randomCitation){
     html = `${html} <span class="citation"> ${randomPrint.randomCitation} </span> </p>`
  } 
  return html
}

printRandom.innerHTML = printQuote ();


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);