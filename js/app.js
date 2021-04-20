/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

// Javascript Goes Here

// Potential Classes
// Board (Phrase)
// q
// Letter 
// 

// TODO: Hide Overlay document.getElementById('overlay').style.display = 'none';

const game = new Game();

const startButton = document.getElementById('btn__reset');
const overlay = document.getElementById('overlay')
startButton.addEventListener('click', (e) => {
    overlay.style.display = 'none';
});