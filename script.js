'use strict';

const player1= document.querySelector('.player-1');
const player2= document.querySelector('.player-2');

const score1= document.getElementById('score-1');
const score2= document.getElementById('score-2');

const currentScr1=document.getElementById('current-1');
const currentScr2=document.getElementById('current-2');

const dice= document.querySelector(".dice")

const btnNew= document.querySelector('.btn-new');
const btnRoll= document.querySelector('.btn-roll');
const btnHold= document.querySelector('.btn-hold');

let currentScore=0;
let activePlayer=1;

let playing= true;

//Initial Conditions
const init= function(){
    playing=true;

    score1.textContent=0;
    score2.textContent=0;
    dice.classList.add('hidden');

    score1.textContent=0;
    score2.textContent=0;
    currentScr1.textContent=0;
    currentScr2.textContent=0;
    dice.classList.add('hidden');
    player1.classList.remove('player-winner','player-loser');
    player2.classList.remove('player-winner','player-loser');
    player1.classList.add('player-active');
    player2.classList.remove('player-active');
}
init();

//Switching player function.
const switchPlayer= ()=>{
    currentScore=0;
    document.getElementById(`current-${activePlayer}`).textContent=currentScore;

    document.querySelector(`.player-${activePlayer}`).classList.remove('player-active');

    activePlayer= activePlayer === 1 ? 2 : 1;

    document.querySelector(`.player-${activePlayer}`).classList.add('player-active');    
}


//Rolling dice functionality
btnRoll.addEventListener('click',function(){
    if(playing)
    {
        dice.classList.remove('hidden');
        //Generating a random number.
        const dicenum= Math.trunc(Math.random() * 6) + 1;

        //Displaying the dice.
        dice.classList.remove('hidden');
        dice.src=`./DiceImages/dice-${dicenum}.png`;

        //Checking for rolled 1: if true switch the player
        if(dicenum!==1) //Add to current score.
        {
            currentScore+=dicenum;
            document.getElementById(`current-${activePlayer}`).textContent=currentScore;
        }
        else //Switch to next player when dice shows '1'
        switchPlayer();  
    }
});

//'Hold' button functionality.
btnHold.addEventListener('click', function(){
    if(playing)
    {
        document.getElementById(`score-${activePlayer}`).textContent= Number(document.getElementById(`score-${activePlayer}`).textContent) + currentScore;
        if(document.getElementById(`score-${activePlayer}`).textContent >= 20)
        {
            playing= false;
            document.querySelector(`.player-${activePlayer}`).classList.add('player-winner');
            document.querySelector(`.player-${activePlayer}`).classList.remove('player-active');
            activePlayer= activePlayer === 1 ? 2 : 1;
            document.querySelector(`.player-${activePlayer}`).classList.add('player-loser');
            dice.classList.add('hidden');
        }
        //Swith to next player/
        switchPlayer();
    }
});

//'New Game' button functionality.
btnNew.addEventListener('click',init)
