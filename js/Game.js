/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
    constructor() {
        this.missed = 0; 
        this.phrases = [new Phrase('I love you'), new Phrase('Eat my shorts'), new Phrase('Hang loose'), new Phrase('Cowabunga Dude'), new Phrase('Fear not')];
        this.activePhrase = null;
    }

    /** This initializes game. */
    startGame() {
        //console.log(this);
        const overlay = document.getElementById('overlay');
        overlay.style.display = 'none';
        document.getElementById('phrase').innerHTML = '';
        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();
        
    }

    /** This will select a random phrase from the phrases */
    getRandomPhrase() {
        return this.phrases[Math.floor(Math.random() * this.phrases.length)];
    }

    /** This is a description of the foo function. */
    handleInteraction(e) {
        //console.log('This =', this); // this is the html e
        let letterButton = e.target;
        let letter = letterButton.innerHTML;
        letterButton.setAttribute('disabled', 'disabled');
        // should disable button when selected so that the && !e.target.classList.contains('chosen') && !e.target.classList.contains('wrong') isn't necessary
        if (letterButton.matches('button')) {
            //console.log('Keyboard interaction', letterButton.innerHTML);
            if (game.activePhrase.checkLetter(letterButton) !== -1) {
                letterButton.classList.add('chosen');
                game.activePhrase.showMatchedLetter(letter);
                if (game.checkForWin()) {
                    game.gameOver('win');
                }
            } else {
                letterButton.classList.add('wrong');
                game.removeLife();
            }
        }
    }

    /** This will check if all of the letters have been revealed. */
    checkForWin() {
        //console.log('Check for win!');
        // plan to use the same process for display letter to loop over the letters and see if all contain show class
        let phrase = document.getElementById('phrase').firstChild.getElementsByTagName('li');
        //let win = true;
        for (let i = 0; i < this.activePhrase.phrase.length; i++) {
            if (phrase[i].classList.contains('hide')) {
                return false;
            }
        }
        return true;

    }

    /** This will remove a life from the player on screen. */
    removeLife() {
        //console.log('A life has been lost');
        game.missed += 1;
        
        let scoreboard = document.getElementById('scoreboard').firstElementChild;
        let lives = scoreboard.getElementsByTagName('li');
        // replace liveHeart.PNG with lostHeart.PNG 
        lives[5-game.missed].firstElementChild.src = 'images/lostHeart.png';
        if(game.missed >= 5) {
            game.gameOver('lose');
        }
    }

    /** This ends the game and allow the game to be replayed. 
     * After a game is completed, the gameboard is reset so that clicking the "Start Game" button loads a new game
     * 
    */
    gameOver(message) {
        //console.log('game over!', message);
        const overlay = document.getElementById('overlay');
        const gameOverMessage = document.getElementById('game-over-message');
        overlay.style.display = 'block';
        if (message === 'win') {
            if (overlay.classList.contains('lose')) {
                overlay.classList.remove('lose');
            } 
            overlay.classList.add('win');
            gameOverMessage.innerText = "Congratulations, you win! Click start to try again.";

        } else {
            if (overlay.classList.contains('win')) {
                overlay.classList.remove('win');
            } 
            overlay.classList.add('lose');
            gameOverMessage.innerText = "Doh! You lose! Click start to try again.";
        }   
        
        // Reset Lives
        this.missed = 0;
        let scoreboard = document.getElementById('scoreboard').firstElementChild;
        let lives = scoreboard.getElementsByTagName('li');
        for (let i = 0; i < lives.length; i++) {
            lives[i].firstElementChild.src = 'images/liveHeart.png';    
        }
        // Reset Keyboard
        const keyboard = document.getElementById('qwerty');
        const rows = keyboard.getElementsByTagName('div');
        //console.log(rows);
        for (let i = 0; i < rows.length; i++) {
            let keys = rows[i].getElementsByTagName('button');
            for (let j = 0; j < keys.length; j++) {
                let key = keys[j];
                key.removeAttribute('disabled');
                if (key.classList.contains('wrong')) {
                    key.classList.remove('wrong');
                } else if (key.classList.contains('chosen')) {
                    key.classList.remove('chosen');
                }
            }
        }
    }
}