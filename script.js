'use strict';
let player01=document.querySelector('.play0');
let player02=document.querySelector('.play1');
let mscore1=document.querySelector('.score-0');
let mscore2=document.querySelector('.score-1');

let diceI=document.querySelector('.dice');

let btnNew=document.querySelector('#tap');
let rollbtn=document.querySelector('#roll');
let holdbtn=document.querySelector('#hold');
let scores, currentscore, activeplayer, playing;

function switchPlayer()
{
    document.getElementById(`current-${activeplayer}`).textContent=0;
    currentscore=0;
    activeplayer=activeplayer===0? 1 : 0;
    player01.classList.toggle('playeractive');
    player02.classList.toggle('playeractive');
}

function init()
{
    scores=[0,0];
    currentscore=0;
    activeplayer=0;
    playing=true;
    document.querySelector('#score--0').textContent=0;
    document.querySelector('#score--1').textContent=0;
    document.querySelector('#current-0').textContent=0;
    document.querySelector('#current-1').textContent=0;

    diceI.classList.add('hidden');
}
init();

rollbtn.addEventListener('click',function()
{
    if(playing)
    {
        let dice=Math.trunc(Math.random()*6)+1;
        diceI.classList.remove('hidden');
        diceI.src=`dice-${dice}.png`;

        if(dice !==1)
        {
            currentscore=currentscore+dice;
            document.getElementById(`current-${activeplayer}`).textContent=currentscore;
        }
        else{
            switchPlayer();
        }
    }
})
holdbtn.addEventListener('click',function()
{
    if(playing)
    {
        scores[activeplayer]+=currentscore;
        console.log(scores[activeplayer]);
        document.getElementById(`score--${activeplayer}`).textContent=scores[activeplayer];
        if(scores[activeplayer]>=20)
        {
            playing=false;
            diceI.classList.toggle('hidden');
          document.querySelector(`.play${activeplayer}`).classList.add('playerwinner');
          
        }
        else{
            switchPlayer();
        }
    }
});
btnNew.addEventListener('click',function()
{
    document.querySelector(`.play${activeplayer}`).classList.remove('playerwinner');
    init();
    
});




