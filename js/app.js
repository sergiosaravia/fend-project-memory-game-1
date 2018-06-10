/*
 * Create a list that holds all of your cards
 */
// Creates card deck array //
const cardDeck = [
      [1, 'fa-diamond'],
      [1, 'fa-diamond'],
      [2, 'fa-paper-plane-o'],
      [2, 'fa-paper-plane-o'],
      [3, 'fa-bomb'],
      [3, 'fa-bomb'],
      [4, 'fa-anchor'],
      [4, 'fa-anchor'],
      [5, 'fa-leaf'],
      [5, 'fa-leaf'],
      [6, 'fa-bicycle'],
      [6, 'fa-bicycle'],
      [7, 'fa-cube'],
      [7, 'fa-cube'],
      [8, 'fa-bicycle'],
      [8, 'fa-bicycle']
   ];


// Global variables



/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */

// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}


/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */
let gameCanvas = "";

 function setGameBoard() {
   let gameCanvas = document.getElementById("deck");
       cardDeck.shuffle();
       for (i = 0; i < cardDeck.length; i++) {
          gameCanvas += '<ul class="deck' + cardDeck[i][0] + '"><i class="fas ' + cardDeck[i][1] + '"></i></ul>';
       }



// Reset canvas

gameBoard.innerHTML = gameCanvas;

setGameBoard();
