/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */


/* 
Game class planning

Properties:

phrase
picks
lives

Methods:

get phrase 
set phrase

display phrase 
 show
 hide

select letter
-- classes for letters chosen / wrong


reduce lives

*/

class Game {
 constructor() {
    this.missed = 0; 
    this.phrases = ['I love you', 'Eat my shorts', 'Hang loose', 'Cowabunga Dude', 'Fear not'];
    this.activePhrase = '';
     
     
 }
/** This initializes game. */
 startGame() {
    const overlay = document.getElementById('overlay')
    overlay.style.display = 'none';
    this.activePhrase = this.getRandomPhrase();
    this.activePhrase.addPhraseToDisplay();

 }
/** This will select a random phrase from the phrases */
 getRandomPhrase() {
    return new Phrase(this.phrases[Math.floor(Math.random() * this.phrases.length)]);
 }

/** This is a description of the foo function. */
 handleInteraction() {

 }

 /** This will check if all of the letters have been revealed. */
 checkForWin() {

 }

 /** This will remove a life from the player on screen. */
removeLife() {

}

/** This end the game and allow the game to be replayed. 
 * After a game is completed, the gameboard is reset so that clicking the "Start Game" button loads a new game
 * 
*/
gameOver() {

}




}