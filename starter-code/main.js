console.log("JS file is connected to HTML! Woo!")

/*var cardOne = "queen";
var cardTwo = "king";
var cardThree = "queen";
var cardFour = "king";*/


/*if (cardTwo === cardFour) {alert ('You found  match!');}
else if (cardOne === cardThree) {alert ('You found a match!')}
else if (cardThree === cardFour) {alert ('You found a match!');}
else {alert ('Sorry, try again!')}*/

/*var gameBoard = document.getElementById ('game-board');

var createCards = function() {
	for (var i = 0; i<4; i++){
		var cardDiv = document.createElement('div');
		cardDiv.className = 'card';
		gameBoard.appendChild(newCards);
	}
}*/

/*function createCards() {

	var gameBoard = document.getElementById('game-board');

	for (var i = 0; i < 4; i++) {
		var cardDiv = document.createElement('div');
		cardDiv.className = 'card';

	gameBoard.appendChild(cardDiv);}
}

createCards();*/


var cards = ['queen', 'queen', 'king', 'king'];


var cardsInPlay = [];


var gameBoard = document.getElementById('game-board');

function createBoard() {
  
  for (var i=0; i<cards.length; i++) {
    
    var cardElement = document.createElement('div');
    
    cardElement.className = 'card';


    cardElement.setAttribute('data-card', cards[i]);
	
    cardElement.addEventListener('click', isTwoCards);

    
    gameBoard.appendChild(cardElement);
    gameBoard.appendChild(cardElement);
  }

}

function isTwoCards() {
 
 cardsInPlay.push(this.getAttribute('data-card'));

	console.log(this.getAttribute('data-card'));
	if (this.getAttribute('data-card') === 'king') {
		this.innerHTML = "<img src='http://i.imgur.com/Z1yZFzq.png'>";
	} else {
		this.innerHTML = "<img src='http://i.imgur.com/FR8Wnrt.png'>";
	}
  
  if (cardsInPlay.length === 2) {
  
    isMatch(cardsInPlay);
  
    cardsInPlay = [];
  }
}

function isMatch(cards) {
  
  if (cards[0] === cards[1]) {
    alert("You found a match!");
  } else {
    alert("Sorry, try again.");

  }
}

createBoard();
