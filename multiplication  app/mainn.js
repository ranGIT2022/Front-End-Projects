const scorejs = document.getElementById("score");
const questionjs = document.getElementById("question");
const answerjs = document.getElementById("input");
const formjs=document.getElementById("form");



const num1 = Math.ceil(Math.random()*10) ;
const num2 = Math.ceil(Math.random()*10);


const correctAnswer=num1*num2;

let score= JSON.parse(localStorage.getItem("score"));

if(!score){
    score=0;
}

scorejs.innerText=`score: ${score}`


questionjs.innerHTML = "what is " + num1 + " multiplied by  " + num2 + "?";

formjs.addEventListener("submit",()=>{
  const clintAnswer=  +answerjs.value;  // added the plus symbol to change the string value into number//
 if(correctAnswer === clintAnswer){
     score++;
     updatedLocalStorage();
 }else{
     score--;
     updatedLocalStorage();
 }
})

function updatedLocalStorage(){
    localStorage.setItem("score",JSON.stringify(score));
}