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
 constructor() {
    this.phraseList = ['I love you', 'Eat my shorts', 'Hang loose'];
    this.phrase = this.pickPhrase();
 }

/** This function will select a random phrase from the phraseList */
 pickPhrase() {
    return this.phraseList[Math.floor(Math.random() * this.phraseList.length)];
 }

 /** This add the phrase to the game board / display */
 addPhraseToDisplay() {

 }
 checkLetter() {

 }

 showMatchedLetter() { }
}