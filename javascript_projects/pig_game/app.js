/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
var scores, roundScore, activePlayer, gameActive, prevDieA, prevDieB, ceiling;

init();

console.log(prevDieA);
console.log(prevDieB);

document.querySelector('.btn-roll').addEventListener('click', function() {
    if (gameActive) {
        // 1. random number
        diceA = Math.floor(Math.random() * 6) + 1;
        diceB = Math.floor(Math.random() * 6) + 1;
        //2. display result
        var diceADOM = document.querySelector('.diceA');
        diceADOM.style.display = 'block';
        diceADOM.src = 'dice-' + diceA + '.png';

        var diceBDOM = document.querySelector('.diceB');
        diceBDOM.style.display = 'block';
        diceBDOM.src = 'dice-' + diceB + '.png';
        
        // 3. update the round score if the rolled number was not a one
        if (((prevDieA === 6 || prevDieB === 6) && diceA === 6) || ((prevDieA === 6 || prevDieB === 6) && diceB === 6)) {
            document.querySelector('#score-' + activePlayer).textContent = 0;
            scores[activePlayer] = 0;
            nextPlayer();
        } else if (diceA !== 1 && diceB !== 1) {
            //add score
            roundScore = diceA + diceB + roundScore;
            // display score
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
            prevDieA = diceA;
            prevDieB = diceB;
        } else {
            // change player
            nextPlayer();
        }         
    }
});

document.querySelector('.btn-hold').addEventListener('click', function() {
    if (gameActive) {
        // add current score to global
        scores[activePlayer] += roundScore;
        // update UI
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
        // check if player won game
        if (scores[activePlayer] >= ceiling) {
            document.querySelector('#name-' + activePlayer).textContent = "Winner!";
            document.querySelector('.dice').style.display = 'none';
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            gameActive = false;
        } else {
            // chngae player
            nextPlayer();
        }
    }
});

function nextPlayer() {
    //next player
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;
    prevDieA = 0;
    prevDieB = 0;
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    document.querySelector('.diceA').style.display = 'none';
    document.querySelector('.diceB').style.display = 'none';
};

document.querySelector('.btn-new').addEventListener('click', init);

function init() {
    scores = [0, 0];
    activePlayer = 0;
    roundScore = 0;
    gameActive = true;
    prevDieA = 0;
    prevDieB = 0;

    // Sets value of deiling
    document.getElementById("num").defaultValue = "100";
    ceiling = document.getElementById('num').value;
    
    document.querySelector('.diceA').style.display = 'none';
    document.querySelector('.diceB').style.display = 'none';
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0').textContent = "Player 1";
    document.getElementById('name-1').textContent = "Player 2";
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
};

// get and set ceiling if no score
document.querySelector('.btn-win').addEventListener('click', function() {
    if (scores[0] === 0 && scores[1] === 0) {
        ceiling = document.getElementById('num').value;
    }
});
