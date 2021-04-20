/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

/*

Phrase Class Planning

Properties
phrase

Methods
letter

*/


class Phrase {
 constructor(phrase) {
    
    this.phrase = phrase;
 }

 /** This add the phrase to the game board / display */
 addPhraseToDisplay() {
    console.log('The phrase has been added to the display.')
 }
 /** This will check if the clicked letter is in the phrase*/
 checkLetter() {
     console.log('The letter has been checked');

 }
/** This will reveal the letter(s) on the board that matches the player's selection*/
 showMatchedLetter() { 
    console.log('The Matched Letter has been shown.');
 }
}