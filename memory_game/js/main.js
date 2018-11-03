

var cards = [
  {
  	rank: "queen",
  	suit: "hearts",
  	cardImage: "images/queen-of-hearts.png"
  },
    {
  	rank: "queen",
  	suit: "diamonds",
  	cardImage: "images/queen-of-diamonds.png"
  },
    {
  	rank: "king",
  	suit: "hearts",
  	cardImage: "images/king-of-hearts.png"
  },
    {
  	rank: "king",
  	suit: "diamonds",
  	cardImage: "images/king-of-diamonds.png"
  }
];

var cardsInPlay = [];

/*var checkForMatch = function() {
  setAttribute
	
}
*/
var flipCard = function() {

    var cardId = this.getAttribute(i);
    cardsInPlay[cardId] =  this.setAttribute('src', cards[cardId].cardImage);

	     console.log("User flipped " + cards.rank);
    //cardsInPlay.push(cards.rank);
    //console.log(cards.cardImage);
    //checkForMatch(cards.suit);
    if(cardsInPlay[0] === cardsInPlay[1]){
         alert("You found a match!");
     }
     else{
       alert("Sorry, try again");
     }

}



var createBoard = function() {

      for (var i = 0; i < cards.length; i++) {
           var cardElement = [];
           cardElement[i] = document.createElement('img');
           cardElement[i].setAttribute('src', 'images/back.png');
           //cardsInPlay.setAttribute();
           console.log(cardElement[i]);
           //cardElement.setAttribute(cards[i]);
           //console.log(cardElement);
           document.getElementById('game-board').appendChild(cardElement[i]);

           cardElement.addEventListener('click', flipCard);
           
          }

};

createBoard();


//<img src="images/queen-of-diamonds.png" alt="Queen of Diamonds">

