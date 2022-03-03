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





<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <!-- <link rel="stylesheet" type="text/css" href="styles.css" /> -->
    <title>Baralho</title>
  </head>
  <body>
    <button id="initial-state-button">ESTADO INICIAL</button>
    <button id="copas-button">COPAS</button>
    <button id="espadas-button">ESPADAS</button>
    <button id="ouros-button">OUROS</button>
    <button id="paus-button">PAUS</button>
    <div id="cards-div"></div>
  </body>
  <script src="script.js"></script>
</html>





# Javascript challenge

## Desafio do Baralho!

### Contexto
Utilizando de seus conhecimentos de HTML, Javascript e Css crie um site que mostre as cartas de um baralho de 52 cartas As cartas não precisam ser estilizadas, apenas uma <div> com o valor e o naipe da carta é o suficiente com uma borda e um padding pra ficar fácil de ler.

Estado Inicial: Ás a Reis -> copas, espadas, ouros, paus

#### Tarefa 1
Adicione quatro botões, um para cada naipe, que quando clicados devem mostrar apenas a cartas do naipe selecionado.

#### Tarefa 2
Adicione mais um botão para retornar o deck ao seu estado inicial.

#### Tarefa 3
Crie um botão que embaralhe o deck e mostre as cartas em ordem aleatória.

#### Tarefa 4
Se o baralho estiver embaralhado, quando selecionar o naipe, a ordem do baralho embaralhado deve ser mantida.

