'use strict';

const score1= document.getElementById('score-1');
const score2= document.getElementById('score-2');

const currentScr1=document.getElementById('current-1');
const currentScr2=document.getElementById('current-2');

const dice= document.querySelector(".dice")

const btnNew= document.querySelector('.btn-new');
const btnRoll= document.querySelector('.btn-roll');
const btnHold= document.querySelector('.btn-hold');

let currentScore=0;
let activePlayer=0;

//Initial Conditions
score1.textContent=0;
score2.textContent=0;
dice.classList.add('hidden');

//Rolling dice functionality
btnRoll.addEventListener('click',function(){
    //Generating a random number.
    const dicenum= Math.trunc(Math.random() * 6) + 1;

    //Displaying the dice.
    dice.classList.remove('hidden');
    dice.src=`/DiceImages/dice-${dicenum}.png`;

    //Checking for rolled 1: if true switch the player
    if(dicenum!==1) //Add to current score.
    {
        currentScore+=dicenum;
        currentScr1.textContent=currentScore;
    }
    else //Switch to next player
    {
        currentScore=0;
        currentScr1.textContent=currentScore;
        document.querySelector(`.player-${activePlayer}`).classList.remove('player-active');
        activePlayer= activePlayer === 1 ? 2 : 1;
        document.querySelector(`.player-${activePlayer}`).classList.add('player-active');
    }
    
});