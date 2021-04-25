/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

// Javascript Goes Here

const startButton = document.getElementById('btn__reset');
const keyboard = document.getElementById('qwerty');

let game;

startButton.addEventListener('click', (e) => {
    game = new Game();
    console.log("***********************NEW GAME************************");
    game.startGame();
});

keyboard.addEventListener('click', (e) =>  {        
    game.handleInteraction(e);
});


