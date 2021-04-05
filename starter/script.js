'use strict';

let randNum=Math.trunc(Math.random()*20)+1;
let score=20;
let HighScore=0;
let isMatched=false;
//document.querySelector('.number').textContent=randNum;


    console.log(document.querySelector('.score').textContent);

document.querySelector('.check').addEventListener('click',function(){
    //const x=Number(document.querySelector('.guess').value);
    
    const original_num=Number(document.querySelector('.guess').value);  
    console.log(original_num);

    if(!original_num && !isMatched){
        document.querySelector('.message').textContent='😒 No number';
    }
    else
    {
        if(original_num===randNum && !isMatched){

            console.log(randNum);
            isMatched=true;
            document.querySelector('.message').textContent='🎉 correct number';
            document.querySelector('body').style.backgroundColor='#60b347';
            document.querySelector('.number').style.width='30rem';
            document.querySelector('.number').textContent=original_num.toString();
            score++;
            document.querySelector('.score').textContent=score.toString();
            console.log(score +">>>>>" + HighScore);
            if(score > HighScore)
            {
                HighScore=score;
                document.querySelector('.highscore').textContent=score.toString();
            }
        }
        else if(original_num < randNum)
        {
            document.querySelector('.message').textContent='😒 Too Less';
            score--;
            document.querySelector('.score').textContent=score.toString();
        }
        else if(original_num > randNum)
        {
            document.querySelector('.message').textContent='😒 Too High';
            score--;
            document.querySelector('.score').textContent=score.toString();
        }
    }
});

//retry button
document.querySelector('.again').addEventListener('click',function(){
    randNum=Math.trunc(Math.random()*20)+1;
    isMatched=false;
    document.querySelector('.message').textContent='Start guessing...';
    document.querySelector('body').style.backgroundColor='#222';
    document.querySelector('.number').style.width='15rem';
    document.querySelector('.number').textContent='?';
    document.querySelector('.guess').value='';
});