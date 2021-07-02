'use strict';
const startBtn = document.querySelector('.btn--new');
const rollDiceBtn = document.querySelector('.btn--roll');
const holdBtn = document.querySelector('.btn--hold');
const diceEl = document.querySelector('.dice');
const scoreEl0 = document.querySelector('#score--0');
const scoreEl1 = document.querySelector('#score--1');
const current0El = document.querySelector('#current--0');
const current1El = document.querySelector('#current--1');


scoreEl0.textContent = 0;
scoreEl1.textContent = 0;

//create function to push scores to localStorage
let player0Score = 0;
let player1Score = 0;


// listen to start button click and start the game
diceEl.classList.add('hidden');
startBtn.addEventListener('click', function(){
    diceEl.classList.remove('hidden');
    
    // listn to click on the roll dice button
    rollDiceBtn.addEventListener('click' , function() {
        // generate a random dice roll
    let diceRolling = Math.trunc(Math.random() * 6) + 1;
        console.log(diceRolling);
        diceEl.src = `assets/img/dice-${diceRolling}.png`;

        // create if conditional to check if it is `${player--}` 0 or 1

        if(diceRolling !== 1){
            player0Score += diceRolling;
            current0El.textContent = player0Score;
        }else{

        }
    });


})