const suits = ['copas', 'espadas', 'ouros', 'paus'];
const values = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];

// passar pra ingles
const copasButton = document.querySelector('#copas-button');
const espadasButton = document.querySelector('#espadas-button');
const ourosButton = document.querySelector('#ouros-button');
const pausButton = document.querySelector('#paus-button');
const shuffle = document.querySelector('#shuffle');
const initialStateButton = document.querySelector('#initial-state-button');

const cardsDiv = document.querySelector('#cards-div');

function createDeck() {
	let deck = []; // olhar o foreach
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

  // While there remain elements to shuffle...
  while (currentIndex != 0) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }
  return array;
}

copasButton.addEventListener('click', () => {
  cardsDiv.innerHTML = ('') // procurar outra forma de limpar a tela
  const copasCards = suitFilter('copas') 
  const text = document.createTextNode(JSON.stringify(copasCards))
  cardsDiv.appendChild(text)
});

espadasButton.addEventListener('click', () => {
  cardsDiv.innerHTML = ('') // procurar outra forma de limpar a tela
  const espadasCards = suitFilter('espadas')
  const text = document.createTextNode(JSON.stringify(espadasCards))
  cardsDiv.appendChild(text)
});

ourosButton.addEventListener('click', () => {
  cardsDiv.innerHTML = ('') // procurar outra forma de limpar a tela
  const ouroCards =suitFilter('ouros')
  const text = document.createTextNode(JSON.stringify(ouroCards))
  cardsDiv.appendChild(text)
});

pausButton.addEventListener('click', () => {
  cardsDiv.innerHTML = ('') // procurar outra forma de limpar a tela
  const pausCards = suitFilter('paus')
  const text = document.createTextNode(JSON.stringify(pausCards))
  cardsDiv.appendChild(text)
});

initialStateButton.addEventListener('click', () => {
  cardsDiv.innerHTML = ('') // procurar outra forma de limpar a tela
  const text = document.createTextNode(JSON.stringify(initialDeck))
  cardsDiv.appendChild(text)
});

shuffle.addEventListener('click', ()=>{
  cardsDiv.innerHTML = ('')
  currentDeck = shuffleFunction(currentDeck)
  const text = document.createTextNode(JSON.stringify(currentDeck))
  cardsDiv.appendChild(text)
})
