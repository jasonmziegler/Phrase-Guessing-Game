/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
 constructor(phrase) {   
    this.phrase = phrase.toLowerCase();
 }

 /** This add the phrase to the game board / display */
 addPhraseToDisplay() {
    //console.log('The phrase has been added to the display.')
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
    //console.log("Phrase: ", this.phrase);
    console.log('phrase.addPhraseToDisplay() - this.phrase: ', this.phrase);
    for (let i = 0; i < this.phrase.length; i++) {
        let li;
        let letter = this.phrase[i];
        //console.log(letter);
        if ( letter != ' ') {
            li = document.createElement('li');
            li.classList.add('hide','letter', letter);
            //console.log(li);
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
 checkLetter(letter) {
    console.log('The letter following letter has been checked: ', letter);
    console.log('Active Phrase', this.phrase); //game.activePhrase
    console.log('phrase.checkLetter(LetterButton) Index of Letter Chosen', this.phrase.indexOf(letter))
    return (this.phrase.indexOf(letter));
    // console.log('Active Phrase', game.activePhrase); 
    // console.log('Index of Letter Chosen', game.activePhrase.phrase.indexOf(letter))
    //return (game.activePhrase.phrase.indexOf(letter));

    // <button class="wrong key">q</button>
    // <button class="chosen key">w</button>
    // <button class="key">e</button>
 }

/** This will reveal the letter(s) on the board that matches the player's selection*/
 showMatchedLetter(letter) { 
    //console.log('The Matched Letter has been shown.', );
    let phrase = document.getElementById('phrase').firstChild.getElementsByTagName('li');
    //console.log('Phrase', phrase);
    for (let i = 0; i < phrase.length;i++) {
        if (phrase[i].classList.contains(letter)) {
            phrase[i].classList.add('show');
            phrase[i].classList.remove('hide');
        }
    }
    // if the il class contains letter class then remove hide and add show to the il
 }
}