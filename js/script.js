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

  const randomQuote = Math.floor(Math.random() * quotes.length) 
  return quotes[randomQuote]
}

/***
 * `printQuote` function
***/

function printQuote () {
  //Create variable to store a random quote object from getRandomQuote function
  let randomPrint = getRandomQuote(quotes); 

  //Create another variable to store HTML String
  let html = `<p class="quote">${randomPrint.quote} </p> <p class="source"> ${randomPrint.source} `
  
  //Check if quote has a year or citation
  if (randomPrint.year){
    html = `${html} <span class="year"> ${randomPrint.year} </span> </p>` 
  } 
  if (randomPrint.citation){
     html = `${html} <span class="citation"> ${randomPrint.citation} </span> </p>`
  } 

  //Print to html
  document.getElementById('quote-box').innerHTML = html
}



/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);