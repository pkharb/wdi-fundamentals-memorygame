var cards = ["queen" , "queen" , "king" , "king"];
var cardsInPlay = [];
var cardOne = cards[0];
cardsInPlay.push(cardOne);
var cardTwo = cards[1];
cardsInPlay.push(cardTwo);

if(cardsInPlay[0] === cardsInPlay[1]){
    alert("You found a match!");
}
else{
	alert("Sorry, try again");
}

