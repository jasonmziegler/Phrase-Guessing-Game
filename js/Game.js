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
 constructor(lives = 5) {
     this.phrase = new Phrase();
     this.lives = lives;
     this.picks = [];
 }

 startGame() {
    const overlay = document.getElementById('overlay')
    overlay.style.display = 'none';
 }

}