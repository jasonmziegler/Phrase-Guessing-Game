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
    
    this.phrase = phrase.toLowerCase();
 }

 /** This add the phrase to the game board / display */
 addPhraseToDisplay() {
    console.log('The phrase has been added to the display.')
    // <ul>
    //     <li class="hide letter h">h</li>
    //     <li class="hide letter o">o</li>
    //     <li class="hide letter w">w</li>
    //     <li class="space"> </li>
    //     <li class="hide letter a">a</li>
    //     <li class="hide letter r">r</li>
    //     <li class="hide letter e">e</li>
    //     <li class="space"> </li>
    //     <li class="hide letter y">y</li>
    //     <li class="hide letter o">o</li>
    //     <li class="hide letter u">u</li>
    // </ul>
    const ul = document.createElement('ul');
    console.log("Phrase: ", this.phrase);
    for (let i = 0; i < this.phrase.length; i++) {
        let li;
        let letter = this.phrase[i];
        console.log(letter);
        if ( letter != ' ') {
            li = document.createElement('li');
            li.classList.add('hide','letter', letter);
            console.log(li);
            li.innerText = letter;
        } else {
            li = document.createElement('li');
            li.classList.add('space');
            li.innerText = ' ';
        }
        ul.appendChild(li);
    }
    document.getElementById('phrase').appendChild(ul);
    

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