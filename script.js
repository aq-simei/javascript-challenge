const suits = ['hearts', 'spades', 'diamonds', 'clubs'];
const values = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];

const heartsButton = document.querySelector('#hearts-button');
const spadesButton = document.querySelector('#spades-button');
const diamondsButton = document.querySelector('#diamonds-button');
const clubsButton = document.querySelector('#clubs-button');

const shuffle = document.querySelector('#shuffle');
const initialStateButton = document.querySelector('#initial-state-button');

const cardsDiv = document.querySelector('#cards-div');

function createDeck() {
	let deck = []; 
	for(let suit = 0; suit < suits.length; suit++)	{
		for(let value = 0; value < values.length; value++) {
			let card = {CardValue: values[value], CardSuit: suits[suit]};
			deck.push(card);
		}
	}
	return deck;
};

const initialDeck = createDeck();

let currentDeck = createDeck();

function suitFilter(suit) {
  return currentDeck.filter(card => {
    if (card.CardSuit === suit) {
      return card
    }
  })
}

function shuffleFunction(array) {
  let currentIndex = array.length,  randomIndex;
  while (currentIndex != 0) {

    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }
  return array;
}

heartsButton.addEventListener('click', () => {
  const heartsCards = suitFilter('hearts') 
  manipulateDom(heartsCards)
});

spadesButton.addEventListener('click', () => {
  const spadesCards = suitFilter('spades')
  manipulateDom(spadesCards)
});

diamondsButton.addEventListener('click', () => {
  const diamondsCards =suitFilter('diamonds')
  manipulateDom(diamondsCards)
});

clubsButton.addEventListener('click', () => {
  const clubsCards = suitFilter('clubs')
  manipulateDom(clubsCards)
});

initialStateButton.addEventListener('click', () => {
  manipulateDom(initialDeck)
});

shuffle.addEventListener('click', ()=>{
  currentDeck = shuffleFunction(currentDeck)
  manipulateDom(currentDeck)
  
})

function manipulateDom(currentDeck){
  cardsDiv.innerHTML = ('')
  const text = document.createTextNode(JSON.stringify(currentDeck))
  cardsDiv.appendChild(text)
}
