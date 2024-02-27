const quotes = [
  // array of quote objects
];

const quote = document.getElementById('quote');
const btn = document.getElementById('new-quote');

function getRandomQuote() {
  // return random quote from array
}

function displayQuote() {
  const randomQuote = getRandomQuote();
  quote.textContent = randomQuote; 
}

btn.addEventListener('click', displayQuote);

displayQuote();
