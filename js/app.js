/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

// Javascript Goes Here

// Potential Classes
// Board (Phrase)
// q
// Letter 
// 
// methods
// 
// 

// TODO: Hide Overlay document.getElementById('overlay').style.display = 'none';

const game = new Game();

const startButton = document.getElementById('btn__reset');

startButton.addEventListener('click', game.startGame);