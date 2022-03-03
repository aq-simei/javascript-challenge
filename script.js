const suits = ["copas", "espadas", "ouros", "paus"];
const values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

const copasButton = document.querySelector('#copas-button');
const espadasButton = document.querySelector('#espadas-button');
const ourosButton = document.querySelector('#ouros-button');
const pausButton = document.querySelector('#paus-button');
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

function suitFilter(suit) {
  cardsDiv.innerHTML = ("")
  
  return createDeck().filter(card => {
    if (card.CardSuit === suit) {
      return `${card.Value} ${card.Suit}`
    }
  })
}

copasButton.addEventListener('click', () => {

  const copasCards = suitFilter('copas')

  const text = document.createTextNode(JSON.stringify(copasCards))
  cardsDiv.appendChild(text)
});

espadasButton.addEventListener('click', () => {
  const espadasCards = suitFilter('espadas')

  const text = document.createTextNode(JSON.stringify(espadasCards))
  cardsDiv.appendChild(text)
});

ourosButton.addEventListener('click', () => {
  const ouroCards =suitFilter('ouros')

  const text = document.createTextNode(JSON.stringify(ouroCards))
  cardsDiv.appendChild(text)
});

pausButton.addEventListener('click', () => {
  const pausCards = suitFilter('paus')

  const text = document.createTextNode(JSON.stringify(pausCards))
  cardsDiv.appendChild(text)
});

initialStateButton.addEventListener('click', () => {
  cardsDiv.innerHTML = (" ")

  const text = document.createTextNode(JSON.stringify(initialDeck))
  cardsDiv.appendChild(text)
});
