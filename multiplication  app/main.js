const scorejs = document.getElementById("score");
const questionjs = document.getElementById("question");
const answerjs = document.getElementById("input");
const formjs=document.getElementById("form");



const num1 = Math.ceil(Math.random()*10) ;
const num2 = Math.ceil(Math.random()*10);






questionjs.innerHTML = "what is " + num1 + " multiplied by  " + num2 + "?";


formjs.addEventListener("submit",function(){
    let correctAnswer=num1*num2;
    let clintAnswer;
    let score;

    clintAnswer=answerjs.value;
    score= correctAnswer===clintAnswer ? score++ : score--;
    scorejs.innerText=`score: ${score}`;
})

