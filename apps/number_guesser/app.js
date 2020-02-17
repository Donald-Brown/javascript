/*
Game Function:
- Player must guess a number between min and max
- Player recieves limited number of guesses
- Notify of remaining guesses
- State correct answer if loose
- Allow player to choose to play again
 */

// Game values
let min = 1,
  max = 10,
  winningNum = getRandomNum(min, max),
  guessesLeft = 3;

// UI Elements
const game = document.querySelector("#game"),
  minNum = document.querySelector(".min-num"),
  maxNum = document.querySelector(".max-num"),
  guessBtn = document.querySelector("#guess-btn"),
  guessInput = document.querySelector("#guess-input"),
  message = document.querySelector(".message");

// Assign UI min and max
minNum.textContent = min;
maxNum.textContent = max;

// Play again event listener
game.addEventListener('mousedown', function(e){
    if(e.target.className === 'play-again'){
        window.location.reload();
    }
});

// Listen for guess
guessBtn.addEventListener('click', function(){
    let guess = parseInt(guessInput.value);

    // Validate
    if(isNaN(guess) || guess < min || guess > max){
        setMessage(`Please enter a number between ${min} and ${max}`, 'red');
        
    }else if(guess === winningNum){
        // game over won
        gameOver(true, `${winningNum} is correct, You Won!`);
    }else{
        // Wrong number
        guessesLeft -= 1;

        if(guessesLeft === 0){
            // Game over lost
            gameOver(false, `Game Over, ${winningNum} was the winning number`);
            
        }else{
            // Game continues answer wrong

            // Change border red
            guessInput.style.borderColor = 'red';

            // Clear the input
            guessInput.value = '';

            // Inform user of wrong number
            setMessage(`${guess} is not correct, you have ${guessesLeft} guesses left`, 'red');
        }
    }
});

// Game over
function gameOver(won, msg){
    let color;
    won === true ? color = 'green' : color = 'red';

    // Disable input
    guessInput.disabled = true;
    // Change border color
    guessInput.style.borderColor = color;
    // Set text color
    message.style.color = 'color';
    // Set message
    setMessage(msg);

    // Play again
    guessBtn.value = 'Play again';
    guessBtn.className += 'play-again';
}

// Get winning num
function getRandomNum(min, max){
    return Math.floor(Math.random()*(max-min+1)+min);
}


// Set message 
function setMessage(msg, color){
    message.style.color = color;
    message.textContent = msg;
}