const p1button=document.querySelector('#p1button');
const p2button=document.querySelector('#p2button');
const p1display=document.querySelector('#p1score');
const p2display=document.querySelector('#p2score');
const reset=document.querySelector('#reset');
const winningScoreval=document.querySelector('#playto');
let p1score=0;let p2score=0;
let winningScore=3; let isGameOver=false;
p1button.addEventListener('click',function(){
    if(!isGameOver){
        p1score+=1;
        p1display.textContent=p1score;
    if(p1score === winningScore ){
        
        isGameOver = true;
        p1display.claasList.add('winner');
    p2display.claasList.add('losser');
    }
    
    

}
})

p2button.addEventListener('click',function(){
    if(!isGameOver){
        p2score+=1;
        p2display.textContent=p2score;
    if(p2score===winningScore ){
    isGameOver=true;
    p2display.claasList.add('winner');
   p1display.classList.add('losser');

}

   }
})
winningScoreval.addEventListener('change',function(){
    winningScore=parseInt(this.value);
   reseto();
})

reset.addEventListener('click',reseto);
   

function reseto(){
    
        isGameOver=false;
        p1score=0;
        p2score=0;
        p1display.textContent=0;
        p2display.textContent=0;
        p1display.classList.remove('losser','winner');
        p2display.classList.remove('losser','winner');
    }
    
