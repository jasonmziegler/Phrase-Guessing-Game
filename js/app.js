/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

// Javascript Goes Here

const startButton = document.getElementById('btn__reset');
const keyboard = document.getElementById('qwerty');
const game = new Game();
startButton.addEventListener('click', (e) => {
    
    game.startGame();
    keyboard.addEventListener('click', game.handleInteraction);

});


