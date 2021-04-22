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



const startButton = document.getElementById('btn__reset');
const keyboard = document.getElementById('qwerty');

startButton.addEventListener('click', (e) => {
    const game = new Game();
    keyboard.addEventListener('click', game.handleInteraction);
    game.startGame();

});


