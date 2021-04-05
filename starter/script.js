'use strict';

let randNum=Math.trunc(Math.random()*20)+1;

//document.querySelector('.number').textContent=randNum;

document.querySelector('.again').addEventListener('click',function(){
    
});
console.log(randNum);

document.querySelector('.check').addEventListener('click',function(){
    //const x=Number(document.querySelector('.guess').value);
    
    if(!randNum){
        document.querySelector('.message').textContent='😒 No number';
    }
    else
    {
        const original_num=Number(document.querySelector('.guess').value);  
        console.log(original_num);
        if(original_num===randNum){

            console.log(randNum);
            document.querySelector('.message').textContent='🎉 correct number';

            document.querySelector('body').style.backgroundColor='#60b347';
            document.querySelector('.number').style.width='30rem';
            document.querySelector('.number').textContent=original_num.toString();
        }
        else if(original_num < randNum)
        {
            document.querySelector('.message').textContent='😒 Too Less';
        }
        else if(original_num > randNum)
        {
            document.querySelector('.message').textContent='😒 Too High';
        }
    }
});

//retry button
document.querySelector('.again').addEventListener('click',function(){
    randNum=Math.trunc(Math.random()*20)+1;
    document.querySelector('.message').textContent='Start guessing...';
    document.querySelector('body').style.backgroundColor='#222';
    document.querySelector('.number').style.width='15rem';
    document.querySelector('.number').textContent='?';
    document.querySelector('.guess').value='';
});